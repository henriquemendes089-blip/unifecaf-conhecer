/* Componentes do site técnico que dependem dos dados (cards, vídeos). */

const DEPOIMENTOS_YOUTUBE = ['NqhLLb2UfaM', 'OGjDdv7uhBY', 'X39J3C-ZSAY', 'j_aSTsi5jwA'];
const VIDEO_ESTRUTURA_BH = 'Pr47OCz14oU';

const ICONES_AREA_TECNICA = {
  saude: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>',
  gestao: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"/>',
  tecnologia: '<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>',
  seguranca: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>'
};

const ICONE_PIN = '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>';
const ICONE_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"/></svg>';

function escHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function iconeArea(areaKey) {
  return `<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">${ICONES_AREA_TECNICA[areaKey] || ICONES_AREA_TECNICA.saude}</svg>`;
}

function nomesUnidades(curso) {
  if (!curso.unidades) return 'Consulte as unidades';
  return unidadesConhecer.filter(u => curso.unidades.includes(u.key)).map(u => u.nome).join(' · ');
}

function cardCurso(c) {
  // Cartão no estilo Grau Técnico: área no balão, nome em destaque e o profissional recortado sobre o azul.
  const selos = `<span class="cartao-curso__selo">${escHtml(c.area)}</span>`
    + (c.tipo ? `<span class="cartao-curso__selo cartao-curso__selo--contorno">${escHtml(c.tipo)}</span>` : '')
    + (c.emBreve ? '<span class="cartao-curso__selo cartao-curso__selo--contorno">Em breve</span>' : '');
  const miolo = `
    <div class="cartao-curso__topo">
      <div class="cartao-curso__selos">${selos}</div>
      <h3 class="cartao-curso__nome">${escHtml(c.nome)}</h3>
    </div>
    <div class="cartao-curso__foto">${c.foto ? `<img src="${c.foto}" alt="" loading="lazy" />` : `<span class="cartao-curso__icone">${iconeArea(c.areaKey)}</span>`}</div>`;
  return c.emBreve
    ? `<article class="cartao-curso cartao-curso--breve">${miolo}</article>`
    : `<a href="curso.html?slug=${c.slug}" class="cartao-curso">${miolo}</a>`;
}

function videoYoutube(id, legenda, vertical) {
  return `<button type="button" class="video${vertical ? ' video--vertical' : ''}" data-youtube="${id}" aria-label="${escHtml(legenda)}">
    <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy" />
    <span class="video__play">${ICONE_PLAY}</span>
    ${legenda ? `<span class="video__legenda">${escHtml(legenda)}</span>` : ''}
  </button>`;
}

function cursosOrdenados() {
  const ordemArea = areasTecnicas.map(a => a.key);
  return Object.values(cursosTecnicosData)
    .sort((a, b) => (!!a.emBreve - !!b.emBreve) || (!!b.destaque - !!a.destaque) || (ordemArea.indexOf(a.areaKey) - ordemArea.indexOf(b.areaKey)));
}
