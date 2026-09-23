/* Faixa de fotos das unidades que passa sozinha + galeria com todas as fotos.
   Depende de estrutura-data.js (fotosEstrutura) e de cursos-ui.js (escHtml). */
(function () {
  'use strict';

  const faixa = document.getElementById('faixaEstrutura');
  if (!faixa || typeof fotosEstrutura === 'undefined') return;

  const NOMES = { bh: 'Belo Horizonte', sl: 'Santa Luzia', rn: 'Ribeirão das Neves' };
  const mini = f => `img/estrutura/mini/${f.arquivo}.webp`;
  const grande = f => `img/estrutura/grande/${f.arquivo}.webp`;
  const descricao = f => `${f.legenda} — unidade ${NOMES[f.unidade]}`;

  /* ── Faixa que passa sozinha ──────────────────────────────── */
  const itens = fotosEstrutura.map((f, i) => `
    <button type="button" class="faixa-fotos__item" data-foto="${i}" aria-label="Ver foto: ${escHtml(descricao(f))}">
      <img src="${mini(f)}" alt="" loading="lazy" />
      <span>${escHtml(f.legenda)}<small>${escHtml(NOMES[f.unidade])}</small></span>
    </button>`).join('');
  // a lista aparece duas vezes: quando a primeira termina, a segunda já está na tela
  faixa.innerHTML = `<div class="faixa-fotos__trilho" aria-hidden="false">${itens}${itens}</div>`;
  faixa.querySelectorAll('.faixa-fotos__trilho > *:nth-child(n+' + (fotosEstrutura.length + 1) + ')').forEach(el => {
    el.setAttribute('aria-hidden', 'true');
    el.tabIndex = -1;
  });

  /* ── Galeria com todas as fotos ───────────────────────────── */
  let modal = null;
  let visor = null;
  let filtro = '';
  let indiceAtual = 0;
  let listaVisivel = fotosEstrutura;
  let focoAnterior = null;

  function montarModal() {
    modal = document.createElement('div');
    modal.className = 'galeria-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Estrutura das unidades da Conhecer');
    modal.innerHTML = `
      <div class="galeria-modal__topo">
        <div>
          <strong class="galeria-modal__titulo">Estrutura da Conhecer</strong>
          <small class="galeria-modal__conta"></small>
        </div>
        <button type="button" class="galeria-modal__fechar" aria-label="Fechar galeria">✕</button>
      </div>
      <div class="galeria-modal__filtros abas" role="tablist">
        <button type="button" class="aba ativa" data-unidade="" role="tab">Todas</button>
        ${Object.entries(NOMES).map(([k, n]) => `<button type="button" class="aba" data-unidade="${k}" role="tab">${n}</button>`).join('')}
      </div>
      <div class="galeria-modal__grade"></div>`;
    document.body.appendChild(modal);

    visor = document.createElement('div');
    visor.className = 'galeria-visor';
    visor.setAttribute('role', 'dialog');
    visor.setAttribute('aria-modal', 'true');
    visor.setAttribute('aria-label', 'Foto ampliada');
    visor.innerHTML = `
      <button type="button" class="galeria-visor__fechar" aria-label="Fechar foto">✕</button>
      <button type="button" class="galeria-visor__nav galeria-visor__nav--anterior" aria-label="Foto anterior">‹</button>
      <img alt="" />
      <button type="button" class="galeria-visor__nav galeria-visor__nav--proxima" aria-label="Próxima foto">›</button>
      <p class="galeria-visor__legenda"></p>`;
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
    listaVisivel = filtro ? fotosEstrutura.filter(f => f.unidade === filtro) : fotosEstrutura;
    modal.querySelector('.galeria-modal__conta').textContent = `${listaVisivel.length} fotos${filtro ? ' · ' + NOMES[filtro] : ' das 3 unidades'}`;
    modal.querySelector('.galeria-modal__grade').innerHTML = listaVisivel.map((f, i) => `
      <button type="button" data-indice="${i}" aria-label="Abrir foto: ${escHtml(descricao(f))}">
        <img src="${mini(f)}" alt="" loading="lazy" />
        <span>${escHtml(f.legenda)}<small>${escHtml(NOMES[f.unidade])}</small></span>
      </button>`).join('');
  }

  function abrirGaleria(indice) {
    if (!modal) montarModal();
    focoAnterior = document.activeElement;
    montarGrade();
    modal.classList.add('aberta');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.galeria-modal__fechar').focus({ preventScroll: true });
    if (typeof indice === 'number') abrirVisor(listaVisivel.indexOf(fotosEstrutura[indice]));
  }

  function fecharGaleria() {
    fecharVisor();
    modal.classList.remove('aberta');
    document.body.style.overflow = '';
    if (focoAnterior) focoAnterior.focus({ preventScroll: true });
  }

  function abrirVisor(i) {
    if (i < 0) return;
    indiceAtual = i;
    const f = listaVisivel[i];
    const img = visor.querySelector('img');
    img.src = grande(f);
    img.alt = descricao(f);
    visor.querySelector('.galeria-visor__legenda').innerHTML = `${escHtml(f.legenda)} <span>· ${escHtml(NOMES[f.unidade])}</span>`;
    visor.classList.add('aberta');
    visor.querySelector('.galeria-visor__fechar').focus({ preventScroll: true });
  }

  function fecharVisor() {
    if (visor) visor.classList.remove('aberta');
  }

  function mover(passo) {
    abrirVisor((indiceAtual + passo + listaVisivel.length) % listaVisivel.length);
  }

  function teclado(e) {
    if (!modal || !modal.classList.contains('aberta')) return;
    const visorAberto = visor.classList.contains('aberta');
    if (e.key === 'Escape') { e.stopPropagation(); visorAberto ? fecharVisor() : fecharGaleria(); }
    else if (visorAberto && e.key === 'ArrowLeft') mover(-1);
    else if (visorAberto && e.key === 'ArrowRight') mover(1);
  }

  faixa.addEventListener('click', e => {
    const item = e.target.closest('[data-foto]');
    if (item) abrirGaleria(+item.dataset.foto);
  });
  document.querySelectorAll('[data-galeria-estrutura]').forEach(b => b.addEventListener('click', () => abrirGaleria()));
})();
