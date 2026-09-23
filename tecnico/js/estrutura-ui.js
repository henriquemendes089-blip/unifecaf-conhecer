/* Galeria da estrutura: o mosaico da seção abre a foto, e o botão abre todas as fotos das unidades.
   Depende de estrutura-data.js (fotosMosaicoEstrutura, fotosEstrutura) e de cursos-ui.js (escHtml). */
(function () {
  'use strict';

  if (typeof fotosEstrutura === 'undefined') return;

  const NOMES = { bh: 'Belo Horizonte', sl: 'Santa Luzia', rn: 'Ribeirão das Neves' };

  // uma lista só: primeiro as fotos do mosaico, depois as das unidades
  const TODAS = [].concat(
    (typeof fotosMosaicoEstrutura === 'undefined' ? [] : fotosMosaicoEstrutura).map(f => ({
      mini: f.caminho, grande: f.caminho, legenda: f.legenda, unidade: ''
    })),
    fotosEstrutura.map(f => ({
      mini: `img/estrutura/mini/${f.arquivo}.webp`, grande: `img/estrutura/grande/${f.arquivo}.webp`,
      legenda: f.legenda, unidade: f.unidade
    }))
  );
  const descricao = f => f.unidade ? `${f.legenda} — unidade ${NOMES[f.unidade]}` : f.legenda;

  let modal = null;
  let visor = null;
  let filtro = '';
  let indiceAtual = 0;
  let listaVisivel = TODAS;
  let focoAnterior = null;
  let visorSozinho = false; // aberto direto pelo mosaico, sem a página com todas as fotos atrás

  function montarModal() {
    modal = document.createElement('div');
    modal.className = 'galeria-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Estrutura das unidades da Conhecer');
    modal.innerHTML = `
      <div class="galeria-modal__topo">
        <div class="container galeria-modal__cabecalho">
          <div>
            <span class="eyebrow">Estrutura</span>
            <strong class="galeria-modal__titulo">Conheça a estrutura da Conhecer</strong>
            <p class="galeria-modal__conta"></p>
          </div>
          <button type="button" class="galeria-modal__fechar" aria-label="Fechar galeria">✕</button>
        </div>
        <div class="container">
          <div class="abas galeria-modal__filtros" role="tablist">
            <button type="button" class="aba ativa" data-unidade="" role="tab">Todas</button>
            ${Object.entries(NOMES).map(([k, n]) => `<button type="button" class="aba" data-unidade="${k}" role="tab">${n}</button>`).join('')}
          </div>
        </div>
      </div>
      <div class="galeria-modal__rolagem">
        <div class="container"><div class="galeria-modal__grade"></div></div>
      </div>`;
    document.body.appendChild(modal);

    visor = document.createElement('div');
    visor.className = 'galeria-visor';
    visor.setAttribute('role', 'dialog');
    visor.setAttribute('aria-modal', 'true');
    visor.setAttribute('aria-label', 'Foto ampliada');
    visor.innerHTML = `
      <button type="button" class="galeria-visor__fechar" aria-label="Fechar foto">✕</button>
      <button type="button" class="galeria-visor__nav galeria-visor__nav--anterior" aria-label="Foto anterior">‹</button>
      <figure class="galeria-visor__quadro">
        <img alt="" />
        <figcaption class="galeria-visor__legenda"></figcaption>
      </figure>
      <button type="button" class="galeria-visor__nav galeria-visor__nav--proxima" aria-label="Próxima foto">›</button>`;
    document.body.appendChild(visor);

    modal.querySelector('.galeria-modal__fechar').addEventListener('click', fecharGaleria);
    modal.querySelector('.galeria-modal__filtros').addEventListener('click', e => {
      const aba = e.target.closest('.aba');
      if (!aba) return;
      filtro = aba.dataset.unidade;
      aba.parentElement.querySelectorAll('.aba').forEach(x => x.classList.toggle('ativa', x === aba));
      montarGrade();
    });
    modal.querySelector('.galeria-modal__grade').addEventListener('click', e => {
      const botao = e.target.closest('[data-indice]');
      if (botao) abrirVisor(+botao.dataset.indice);
    });
    visor.querySelector('.galeria-visor__fechar').addEventListener('click', fecharVisor);
    visor.querySelector('.galeria-visor__nav--anterior').addEventListener('click', () => mover(-1));
    visor.querySelector('.galeria-visor__nav--proxima').addEventListener('click', () => mover(1));
    visor.addEventListener('click', e => { if (e.target === visor) fecharVisor(); });
    document.addEventListener('keydown', teclado);
  }

  function montarGrade() {
    listaVisivel = filtro ? TODAS.filter(f => f.unidade === filtro) : TODAS;
    modal.querySelector('.galeria-modal__conta').textContent = filtro
      ? `${listaVisivel.length} fotos da unidade ${NOMES[filtro]}`
      : `${listaVisivel.length} fotos das nossas três unidades`;
    modal.querySelector('.galeria-modal__grade').innerHTML = listaVisivel.map((f, i) => `
      <button type="button" class="galeria-modal__item" data-indice="${i}" aria-label="Abrir foto: ${escHtml(descricao(f))}">
        <img src="${f.mini}" alt="" loading="lazy" />
        <span>${escHtml(f.legenda)}${f.unidade ? `<small>${escHtml(NOMES[f.unidade])}</small>` : ''}</span>
      </button>`).join('');
  }

  function abrirGaleria() {
    if (!modal) montarModal();
    focoAnterior = document.activeElement;
    filtro = '';
    visorSozinho = false;
    modal.querySelectorAll('.galeria-modal__filtros .aba').forEach(x => x.classList.toggle('ativa', x.dataset.unidade === ''));
    montarGrade();
    modal.classList.add('aberta');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.galeria-modal__fechar').focus({ preventScroll: true });
  }

  // clique numa foto do mosaico: abre só a foto, e fechar volta direto para a página
  function abrirFotoDoMosaico(indice) {
    if (!modal) montarModal();
    focoAnterior = document.activeElement;
    listaVisivel = TODAS;
    visorSozinho = true;
    document.body.style.overflow = 'hidden';
    abrirVisor(indice);
  }

  function fecharGaleria() {
    fecharVisor();
    modal.classList.remove('aberta');
    document.body.style.overflow = '';
    if (focoAnterior) focoAnterior.focus({ preventScroll: true });
  }

  function abrirVisor(i) {
    if (i < 0 || i >= listaVisivel.length) return;
    indiceAtual = i;
    const f = listaVisivel[i];
    const img = visor.querySelector('img');
    img.src = f.grande;
    img.alt = descricao(f);
    visor.querySelector('.galeria-visor__legenda').innerHTML = `${escHtml(f.legenda)}${f.unidade ? ` <span>· ${escHtml(NOMES[f.unidade])}</span>` : ''}`;
    visor.classList.add('aberta');
    visor.querySelector('.galeria-visor__fechar').focus({ preventScroll: true });
  }

  function fecharVisor() {
    if (!visor) return;
    visor.classList.remove('aberta');
    if (visorSozinho) {
      visorSozinho = false;
      document.body.style.overflow = '';
      if (focoAnterior) focoAnterior.focus({ preventScroll: true });
    }
  }

  function mover(passo) {
    abrirVisor((indiceAtual + passo + listaVisivel.length) % listaVisivel.length);
  }

  function teclado(e) {
    if (!modal) return;
    const visorAberto = visor.classList.contains('aberta');
    if (!visorAberto && !modal.classList.contains('aberta')) return;
    if (e.key === 'Escape') { e.stopPropagation(); visorAberto ? fecharVisor() : fecharGaleria(); }
    else if (visorAberto && e.key === 'ArrowLeft') mover(-1);
    else if (visorAberto && e.key === 'ArrowRight') mover(1);
  }

  const mosaico = document.getElementById('mosaicoEstrutura');
  if (mosaico) mosaico.addEventListener('click', e => {
    const item = e.target.closest('[data-mosaico]');
    if (item) abrirFotoDoMosaico(+item.dataset.mosaico);
  });
  document.querySelectorAll('[data-galeria-estrutura]').forEach(b => b.addEventListener('click', () => abrirGaleria()));
})();
