// Gera uma página fixa (HTML já renderizado) para cada curso técnico e cada graduação,
// a partir de tecnico/curso.html e graduacao/curso.html. Também atualiza os sitemaps.
// O conteúdo vem pronto no HTML (bom para o Google); o JS da página continua funcionando normal.
//
// Uso (na raiz do projeto, precisa do Google Chrome instalado):
//   node _interno/gerar-paginas.js
// Rode de novo sempre que mudar cursos-tecnicos-data.js, graduacoes-data.js ou curso.html.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const raiz = path.join(__dirname, '..');
const CHROME = process.env.CHROME || 'google-chrome';
const HOJE = new Date().toISOString().slice(0, 10);

function carregar(arquivo, nome) {
  const codigo = fs.readFileSync(path.join(raiz, arquivo), 'utf8');
  return new Function(`${codigo}; return ${nome};`)();
}

function renderizar(arquivo, query) {
  const url = 'file://' + path.join(raiz, arquivo) + query;
  const dom = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-sandbox',
    '--virtual-time-budget=4000', '--dump-dom', url], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
  const titulo = dom.match(/<title>([\s\S]*?)<\/title>/)[1].trim();
  const descricao = dom.match(/<meta name="description" content="([^"]*)"/)[1];
  const conteudo = dom.match(/<main id="conteudo">([\s\S]*?)<\/main>/)[1];
  if (/não encontrado|disponível em breve/i.test(titulo + conteudo.slice(0, 400))) throw new Error('curso não renderizou: ' + query);
  return { titulo, descricao, conteudo };
}

const attr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function montar(modelo, { url, titulo, descricao, conteudo, dataset, jsonLd }) {
  let html = modelo;
  const trocar = (de, para) => {
    if (!html.includes(de)) throw new Error('trecho não encontrado no modelo: ' + de.slice(0, 50));
    html = html.replace(de, para);
  };
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${titulo}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${descricao}" />`);
  html = html.replace(/  <meta property="og:title" content="[^"]*" \/>\n/, '');
  html = html.replace(/  <meta property="og:description" content="[^"]*" \/>\n/, '');
  trocar('  <meta property="og:site_name"',
    `  <link rel="canonical" href="${url}" />\n` +
    `  <meta property="og:url" content="${url}" />\n` +
    `  <meta property="og:title" content="${titulo}" />\n` +
    `  <meta property="og:description" content="${descricao}" />\n` +
    `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n` +
    '  <meta property="og:site_name"');
  trocar('<body>', `<body ${Object.entries(dataset).map(([k, v]) => `data-${k}="${attr(v)}"`).join(' ')}>`);
  trocar('<main id="conteudo"></main>', `<main id="conteudo">${conteudo}</main>`);
  return html;
}

function sitemap(arquivo, urls) {
  const corpo = urls.map(([u, p]) =>
    `  <url><loc>${u.replace(/&/g, '&amp;')}</loc><lastmod>${HOJE}</lastmod><priority>${p}</priority></url>`).join('\n');
  fs.writeFileSync(path.join(raiz, arquivo),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${corpo}\n</urlset>\n`);
}

const urlCursoTec = c => `curso-${c.slug}.html`;
const resumo = t => t.replace(/\s+/g, ' ').trim().slice(0, 300);

// ─── Técnico ───────────────────────────────────────────────
const T = 'https://tecnico.conhecerescola.com.br';
const tecnicos = Object.values(carregar('tecnico/js/cursos-tecnicos-data.js', 'cursosTecnicosData')).filter(c => !c.emBreve);
const unidades = carregar('tecnico/js/cursos-tecnicos-data.js', 'unidadesConhecer');
const modeloTec = fs.readFileSync(path.join(raiz, 'tecnico/curso.html'), 'utf8');
const urlsTec = [[T + '/', '1.0'], [T + '/cursos.html', '0.9']];
for (const u of unidades) urlsTec.push([`${T}/unidade-${u.key}.html`, '0.8']);

for (const c of tecnicos) {
  const arquivo = urlCursoTec(c);
  const url = `${T}/${arquivo}`;
  const r = renderizar('tecnico/curso.html', `?slug=${c.slug}`);
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Course', name: c.nome, description: resumo(c.descricao || r.descricao), url,
    provider: { '@type': 'EducationalOrganization', name: 'Conhecer Escola Técnica', sameAs: 'https://conhecerescola.com.br/' },
    hasCourseInstance: (c.unidades || []).map(k => unidades.find(u => u.key === k)).filter(Boolean).map(u => ({
      '@type': 'CourseInstance', courseMode: 'onsite',
      location: { '@type': 'Place', name: `Conhecer Escola Técnica – ${u.nome}`, address: u.endereco }
    }))
  };
  fs.writeFileSync(path.join(raiz, 'tecnico', arquivo), montar(modeloTec, { ...r, url, dataset: { slug: c.slug }, jsonLd }));
  urlsTec.push([url, '0.8']);
  console.log('tecnico/' + arquivo);
}
// ─── Páginas locais das unidades (SEO local) ───────────────
// Telefones e fichas do Google Maps = os mesmos do Google Meu Negócio de cada unidade.
const UNIDADES_EXTRA = {
  bh: { telefone: '(31) 99508-7385', cid: '2478551644527854057', cidade: 'Belo Horizonte' },
  sl: { telefone: '(31) 99347-0074', cid: '11343575720695690420', cidade: 'Santa Luzia' },
  rn: { telefone: '(31) 98444-7480', cid: '5941621997700809384', cidade: 'Ribeirão das Neves' }
};
const modeloLista = fs.readFileSync(path.join(raiz, 'tecnico/cursos.html'), 'utf8');

function renderizarLista(chave) {
  const url = 'file://' + path.join(raiz, 'tecnico/cursos.html') + `?unidade=${chave}`;
  const dom = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-sandbox',
    '--virtual-time-budget=4000', '--dump-dom', url], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
  return {
    grade: dom.match(/<div class="grade-cursos grade-cartoes" id="gradeCursos">([\s\S]*?)<\/div>\n      <\/div>\n    <\/section>/)[1],
    contador: dom.match(/<p id="contador"[^>]*>([^<]*)<\/p>/)[1]
  };
}

for (const u of unidades) {
  const x = UNIDADES_EXTRA[u.key];
  const arquivo = `unidade-${u.key}.html`;
  const url = `${T}/${arquivo}`;
  const cursosUnidade = tecnicos.filter(c => (c.unidades || []).includes(u.key));
  const nomesCursos = cursosUnidade.map(c => c.nome.replace(/^Técnico em /, ''));
  const titulo = `Cursos Técnicos em ${x.cidade} (${u.bairro}) | Conhecer Escola Técnica`;
  const descricao = `Cursos técnicos presenciais em ${x.cidade}, bairro ${u.bairro}: ${nomesCursos.slice(0, 5).join(', ')} e mais. Laboratórios, estágio e bolsas de até 40%.`;
  const tel = x.telefone.replace(/\D/g, '');
  const mapa = `https://maps.google.com/?cid=${x.cid}`;
  const r = renderizarLista(u.key);
  const outras = unidades.filter(o => o.key !== u.key)
    .map(o => `<a href="unidade-${o.key}.html">${UNIDADES_EXTRA[o.key].cidade} (${o.bairro})</a>`).join(' · ');

  const topo = `<section class="pagina-topo">
      <div class="container">
        <nav class="migalhas" aria-label="Você está em"><a href="index.html">Início</a><span>/</span><a href="index.html#unidades">Unidades</a><span>/</span><span>${x.cidade}</span></nav>
        <h1>Cursos técnicos em ${x.cidade} – Unidade ${u.bairro}</h1>
        <p>A Conhecer Escola Técnica em ${x.cidade} fica na ${u.endereco.split(' - ')[0]}, no bairro ${u.bairro}. São ${cursosUnidade.length} cursos presenciais com laboratórios, estágio garantido e bolsas de até 40%.</p>
      </div>
    </section>

    <section class="secao" style="padding-top:48px;padding-bottom:0">
      <div class="container conteudo-curso">
        <div>
          <article class="bloco">
            <span class="eyebrow">Unidade ${u.bairro}</span>
            <h2>Como chegar</h2>
            <p>${u.endereco}</p>
            <iframe title="Mapa da unidade ${x.cidade}" src="https://www.google.com/maps?q=${encodeURIComponent(u.endereco)}&output=embed" style="width:100%;height:320px;border:0;border-radius:16px;margin-top:12px" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </article>
        </div>
        <aside class="lateral">
          <div class="cartao-matricula">
            <h3>Matrículas abertas</h3>
            <p>Fale com a unidade ${x.cidade} e garanta sua vaga com bolsa.</p>
            <a href="#" class="btn btn--branco" data-quiz data-quiz-modalidade="tecnico" data-quiz-origem="unidade-${u.key}">Quero me matricular</a>
            <a href="#" class="btn btn--contorno-claro" data-quiz data-quiz-modalidade="tecnico" data-quiz-origem="unidade-${u.key}-visita">Agendar visita</a>
          </div>
          <div class="bloco">
            <h2 style="font-size:1.05rem">Contato da unidade</h2>
            <address style="font-style:normal;display:grid;gap:14px;font-size:.9rem">
              <span><strong style="color:var(--tinta)">Endereço</strong><br>${u.endereco}</span>
              <span><strong style="color:var(--tinta)">Telefone / WhatsApp</strong><br><a href="tel:+55${tel}">${x.telefone}</a></span>
              <span><a href="${mapa}" target="_blank" rel="noopener">Abrir no Google Maps →</a></span>
            </address>
          </div>
        </aside>
      </div>
    </section>`;

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'EducationalOrganization',
    name: `Conhecer Escola Técnica – ${x.cidade}`, url, telephone: `+55${tel}`, hasMap: mapa,
    parentOrganization: { '@type': 'EducationalOrganization', name: 'Conhecer Escola Técnica', url: 'https://conhecerescola.com.br/' },
    address: { '@type': 'PostalAddress', streetAddress: u.endereco.split(' - ')[0], addressLocality: x.cidade, addressRegion: 'MG', postalCode: (u.endereco.match(/\d{5}-\d{3}/) || [''])[0], addressCountry: 'BR' },
    makesOffer: cursosUnidade.map(c => ({ '@type': 'Offer', itemOffered: { '@type': 'Course', name: c.nome, url: `${T}/${urlCursoTec(c)}` } }))
  };

  let html = modeloLista;
  const trocar = (de, para) => {
    if (!html.includes(de)) throw new Error('trecho não encontrado em cursos.html: ' + de.slice(0, 50));
    html = html.replace(de, para);
  };
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${titulo}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${descricao}" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${titulo}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${descricao}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  trocar('  <meta property="og:site_name"', `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  <meta property="og:site_name"`);
  trocar('<body>', `<body data-unidade="${u.key}">`);
  html = html.replace(/<section class="pagina-topo">[\s\S]*?<\/section>/, topo);
  trocar('<p id="contador" style="font-size:.9rem;color:var(--texto-suave)"></p>',
    `<p id="contador" style="font-size:.9rem;color:var(--texto-suave)">${r.contador}</p>`);
  trocar('<div class="grade-cursos grade-cartoes" id="gradeCursos"></div>',
    `<div class="grade-cursos grade-cartoes" id="gradeCursos">${r.grade}</div>\n        <p style="margin-top:28px;font-size:.95rem">Outras unidades: ${outras}</p>`);
  fs.writeFileSync(path.join(raiz, 'tecnico', arquivo), html);
  console.log('tecnico/' + arquivo);
}

sitemap('tecnico/sitemap.xml', urlsTec);

// ─── Graduação ─────────────────────────────────────────────
const G = 'https://graduacao.conhecerescola.com.br';
const graduacoes = carregar('graduacao/js/graduacoes-data.js', 'graduacoesData').filter(c => !c.emBreve);
const modeloGrad = fs.readFileSync(path.join(raiz, 'graduacao/curso.html'), 'utf8');
const urlsGrad = [[G + '/', '1.0'], [G + '/cursos.html', '0.9']];

for (const c of graduacoes) {
  const arquivo = `graduacao-${c.slug}-${c.modalidade}.html`;
  const url = `${G}/${arquivo}`;
  const r = renderizar('graduacao/curso.html', `?slug=${c.slug}&modalidade=${c.modalidade}`);
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Course', name: `Graduação em ${c.nome}`, description: resumo(c.descricao || r.descricao), url,
    provider: { '@type': 'CollegeOrUniversity', name: 'UniFECAF – Polo Conhecer Ribeirão das Neves', sameAs: 'https://graduacao.conhecerescola.com.br/' },
    hasCourseInstance: [{ '@type': 'CourseInstance', courseMode: c.modalidade === 'ead' ? 'online' : 'blended' }]
  };
  fs.writeFileSync(path.join(raiz, 'graduacao', arquivo),
    montar(modeloGrad, { ...r, url, dataset: { slug: c.slug, modalidade: c.modalidade }, jsonLd }));
  urlsGrad.push([url, '0.8']);
  console.log('graduacao/' + arquivo);
}
sitemap('graduacao/sitemap.xml', urlsGrad);
console.log(`\n${tecnicos.length} técnicos + ${graduacoes.length} graduações geradas; sitemaps atualizados.`);
