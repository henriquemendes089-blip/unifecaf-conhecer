/* Componentes do site de graduação que dependem dos dados (cards, vídeos, espaços reservados). */

// Preencher com os IDs do YouTube quando o polo enviar os vídeos. Vazio = mostra o espaço reservado.
const DEPOIMENTOS_YOUTUBE = [];
const VIDEO_INSTITUCIONAL = '';

const MODALIDADE_ROTULO = { ead: 'EAD', semipresencial: 'Semipresencial' };
const MODALIDADE_DESCRICAO = { ead: 'EAD · 100% online', semipresencial: 'Semipresencial · online + polo' };

const POLO = {
  endereco: 'Av. Dionísio Gomes, 159 - Veneza, Ribeirão das Neves - MG, 33820-565',
  horario: 'Segunda a sexta, 8h às 18h · Sábado, 8h às 12h',
  telefone: '(31) 97193-6023'
};

const ICONE_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"/></svg>';
const ICONES_ESPACO = {
  foto: '<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/></svg>',
  video: '<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/></svg>',
  logo: '<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"/></svg>'
};

function escHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function espacoMidia(tipo, titulo, texto, classes) {
  return `<div class="espaco-midia ${classes || ''}" role="img" aria-label="${escHtml(titulo)}">
    ${ICONES_ESPACO[tipo]}<strong>${escHtml(titulo)}</strong>${texto ? `<span>${escHtml(texto)}</span>` : ''}
  </div>`;
}

function videoYoutube(id, legenda, vertical) {
  return `<button type="button" class="video${vertical ? ' video--vertical' : ''}" data-youtube="${id}" aria-label="${escHtml(legenda)}">
    <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy" />
    <span class="video__play">${ICONE_PLAY}</span>
    ${legenda ? `<span class="video__legenda">${escHtml(legenda)}</span>` : ''}
  </button>`;
}

function depoimentosHtml() {
  if (DEPOIMENTOS_YOUTUBE.length) return DEPOIMENTOS_YOUTUBE.map((id, i) => videoYoutube(id, `Depoimento de aluno ${i + 1}`, true)).join('');
  return [1, 2, 3, 4].map(i => espacoMidia('video', `Vídeo de depoimento ${i}`, 'Formato vertical', 'espaco-midia--vertical')).join('');
}

function videoInstitucionalHtml() {
  return VIDEO_INSTITUCIONAL
    ? videoYoutube(VIDEO_INSTITUCIONAL, 'Conheça o polo UniFECAF Conhecer')
    : espacoMidia('video', 'Espaço para vídeo institucional do polo', 'Formato horizontal 16:9');
}

function urlCurso(c) {
  return `curso.html?slug=${c.slug}&modalidade=${c.modalidade}`;
}

function imagemCurso(c) {
  return `img/cursos/${c.slug}.webp`;
}

function cardGraduacao(c) {
  return `<article class="card-curso">
    <a href="${urlCurso(c)}" class="card-curso__imagem card-curso__imagem--foto" tabindex="-1" aria-hidden="true">
      <img src="${imagemCurso(c)}" alt="${escHtml(c.nome)}" loading="lazy" width="960" height="780" />
      <span class="card-curso__tipo">${MODALIDADE_ROTULO[c.modalidade]}</span>
    </a>
    <div class="card-curso__corpo">
      <span class="card-curso__area">${escHtml(c.area)}</span>
      <h3 class="card-curso__nome"><a href="${urlCurso(c)}">${escHtml(c.nome)}</a></h3>
      <div class="card-curso__meta"><span>${escHtml(c.duracao)}</span><span>${escHtml(c.tipoGrau)}</span></div>
      <div class="card-curso__acao"><a href="${urlCurso(c)}" class="btn btn--contorno btn--pequeno">Saiba mais</a></div>
    </div>
  </article>`;
}

function preencherRodapeGraduacao() {
  const lista = document.getElementById('rodapeCursos');
  if (lista) {
    const destaques = ['administracao', 'analise-e-desenvolvimento-de-sistemas', 'biomedicina', 'pedagogia', 'engenharia-civil', 'gestao-de-recursos-humanos'];
    lista.innerHTML = destaques
      .map(s => graduacoesData.find(c => c.slug === s))
      .filter(Boolean)
      .map(c => `<li><a href="${urlCurso(c)}">${escHtml(c.nome)}</a></li>`).join('') + '<li><a href="cursos.html">Todas as graduações</a></li>';
  }
}
