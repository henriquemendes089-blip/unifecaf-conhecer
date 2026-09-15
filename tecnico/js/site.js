/* Interações de interface. Edite só tecnico/js/site.js e rode `node _interno/sincronizar.js`. */
(function () {
  'use strict';

  const cabecalho = document.querySelector('.cabecalho');
  if (cabecalho) {
    const aoRolar = () => cabecalho.classList.toggle('rolou', window.scrollY > 10);
    window.addEventListener('scroll', aoRolar, { passive: true });
    aoRolar();
  }

  const hamburguer = document.querySelector('.hamburguer');
  const menuMobile = document.querySelector('.menu-mobile');
  if (hamburguer && menuMobile) {
    hamburguer.addEventListener('click', () => {
      const aberto = menuMobile.classList.toggle('aberto');
      hamburguer.setAttribute('aria-expanded', String(aberto));
    });
    menuMobile.addEventListener('click', e => {
      if (e.target.closest('a, button')) {
        menuMobile.classList.remove('aberto');
        hamburguer.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('.dropdown').forEach(dd => {
    const botao = dd.querySelector('.dropdown__botao');
    botao.addEventListener('click', e => {
      e.stopPropagation();
      const aberto = dd.classList.toggle('aberto');
      botao.setAttribute('aria-expanded', String(aberto));
    });
  });
  document.addEventListener('click', () => document.querySelectorAll('.dropdown.aberto').forEach(dd => dd.classList.remove('aberto')));

  document.querySelectorAll('[data-carrossel]').forEach(carrossel => {
    const trilho = carrossel.querySelector('.hero__trilho');
    const slides = [...trilho.children];
    const controles = carrossel.querySelector('.hero__controles');
    if (slides.length < 2 || !controles) return;
    let atual = 0;
    let timer;

    controles.innerHTML = slides.map((_, i) => `<button type="button" class="hero__ponto" aria-label="Slide ${i + 1}"></button>`).join('');
    const pontos = [...controles.children];

    const ir = i => {
      atual = (i + slides.length) % slides.length;
      trilho.scrollTo({ left: slides[atual].offsetLeft, behavior: 'smooth' });
    };
    const marcar = () => pontos.forEach((p, i) => p.classList.toggle('ativo', i === atual));
    const iniciar = () => { clearInterval(timer); timer = setInterval(() => ir(atual + 1), 6500); };

    pontos.forEach((p, i) => p.addEventListener('click', () => { ir(i); iniciar(); }));
    trilho.addEventListener('scroll', () => {
      const i = Math.round(trilho.scrollLeft / trilho.clientWidth);
      if (i !== atual) { atual = i; }
      marcar();
    }, { passive: true });
    carrossel.addEventListener('mouseenter', () => clearInterval(timer));
    carrossel.addEventListener('mouseleave', iniciar);
    marcar();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) iniciar();
  });

  document.addEventListener('click', e => {
    const video = e.target.closest('button.video[data-youtube]');
    if (!video) return;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.dataset.youtube)}?autoplay=1&rel=0`;
    iframe.title = video.getAttribute('aria-label') || 'Vídeo';
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    const caixa = document.createElement('div');
    caixa.className = video.className;
    caixa.appendChild(iframe);
    video.replaceWith(caixa);
  });

  const observador = 'IntersectionObserver' in window
    ? new IntersectionObserver(entradas => entradas.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('visivel'); observador.unobserve(en.target); }
      }), { threshold: 0.12 })
    : null;
  window.revelar = raiz => (raiz || document).querySelectorAll('.revelar:not(.visivel)').forEach(el => {
    if (observador) observador.observe(el); else el.classList.add('visivel');
  });
  window.revelar();

  /* ── Seletor personalizado ────────────────────────────────────
     A caixa nativa do <select> não aceita estilo (abre quadrada). Cada select vira um botão
     com lista própria; o <select> continua na página, escondido, com o valor e os eventos de sempre. */
  const SELETORES = 'select.campo, select.lq-select';
  const SETA = '<svg class="seletor__seta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';
  const MARCA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
  const nativoValor = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value');
  const nativoIndice = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'selectedIndex');
  const normalizar = t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  let aberto = null;
  let contador = 0;
  let digitado = '';
  let digitadoTimer;

  function aprimorarSelect(select) {
    if (select.dataset.seletor || select.multiple || select.size > 1) return;
    select.dataset.seletor = '1';

    const botao = document.createElement('button');
    botao.type = 'button';
    botao.id = `seletor-${++contador}`;
    botao.setAttribute('aria-haspopup', 'listbox');
    botao.setAttribute('aria-expanded', 'false');
    const rotulo = select.getAttribute('aria-label')
      || (select.closest('label') ? [...select.closest('label').childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join(' ').trim() : '');
    botao.innerHTML = `<span class="seletor__valor"></span>${SETA}`;
    botao._select = select;

    const sincronizar = () => {
      botao.className = [...select.classList].filter(c => c !== 'seletor-nativo').concat('seletor').join(' ');
      botao.disabled = select.disabled;
      const op = select.options[nativoIndice.get.call(select)];
      botao.querySelector('.seletor__valor').textContent = op ? op.text : '';
      if (rotulo) botao.setAttribute('aria-label', `${rotulo}: ${op ? op.text : ''}`);
      // Textos invisíveis empilhados: com largura automática o botão fica do tamanho da maior opção, como o select nativo.
      botao.querySelectorAll('.seletor__medida').forEach(n => n.remove());
      [...select.options].forEach(o => {
        const medida = document.createElement('span');
        medida.className = 'seletor__medida';
        medida.setAttribute('aria-hidden', 'true');
        medida.textContent = o.text;
        botao.appendChild(medida);
      });
      if (aberto && aberto.select === select) montarLista();
    };

    // Código da página que faz `select.value = ...` também atualiza o botão.
    Object.defineProperty(select, 'value', { configurable: true, get() { return nativoValor.get.call(this); }, set(v) { nativoValor.set.call(this, v); sincronizar(); } });
    Object.defineProperty(select, 'selectedIndex', { configurable: true, get() { return nativoIndice.get.call(this); }, set(v) { nativoIndice.set.call(this, v); sincronizar(); } });

    select.classList.add('seletor-nativo');
    select.tabIndex = -1;
    select.setAttribute('aria-hidden', 'true');
    select.after(botao);
    sincronizar();
    if (document.activeElement === select) botao.focus({ preventScroll: true });

    new MutationObserver(sincronizar).observe(select, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['class', 'disabled'] });
    select.addEventListener('change', sincronizar);
    select.addEventListener('focus', () => botao.focus({ preventScroll: true }));
    select.addEventListener('invalid', e => { e.preventDefault(); botao.focus(); abrirSeletor(botao); });

    botao.addEventListener('click', () => (aberto && aberto.botao === botao ? fecharSeletor() : abrirSeletor(botao)));
    botao.addEventListener('keydown', e => tecladoSeletor(e, botao));
    botao.addEventListener('keyup', e => { if (e.key === ' ') e.preventDefault(); });
  }

  function abrirSeletor(botao) {
    fecharSeletor();
    const select = botao._select;
    const lista = document.createElement('ul');
    lista.className = 'seletor-lista';
    lista.id = `${botao.id}-lista`;
    lista.setAttribute('role', 'listbox');
    if (botao.getAttribute('aria-label')) lista.setAttribute('aria-label', botao.getAttribute('aria-label').split(':')[0]);
    lista.addEventListener('pointerdown', e => e.preventDefault());
    lista.addEventListener('pointermove', e => {
      const li = e.target.closest('.seletor-lista__opcao');
      if (li && aberto && +li.dataset.indice !== aberto.ativo) marcarAtivo(+li.dataset.indice, false);
    });
    lista.addEventListener('click', e => {
      const li = e.target.closest('.seletor-lista__opcao');
      if (li && !li.hasAttribute('aria-disabled')) escolherOpcao(+li.dataset.indice);
    });
    document.body.appendChild(lista);

    aberto = { select, botao, lista, ativo: Math.max(0, select.selectedIndex) };
    montarLista();
    const r = botao.getBoundingClientRect();
    const altura = Math.min(lista.scrollHeight, 320);
    aberto.paraCima = window.innerHeight - r.bottom < altura + 20 && r.top > window.innerHeight - r.bottom;
    lista.classList.toggle('seletor-lista--acima', aberto.paraCima);
    posicionarSeletor();
    marcarAtivo(aberto.ativo, true, true);

    botao.setAttribute('aria-expanded', 'true');
    botao.setAttribute('aria-controls', lista.id);
    void lista.offsetWidth; // aplica o estado inicial antes da transição de abertura
    lista.classList.add('aberta');
  }

  function montarLista() {
    const { select, lista } = aberto;
    lista.textContent = '';
    [...select.options].forEach((op, i) => {
      const li = document.createElement('li');
      li.className = 'seletor-lista__opcao';
      li.id = `${lista.id}-${i}`;
      li.dataset.indice = i;
      li.style.setProperty('--i', Math.min(i, 12));
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', String(i === select.selectedIndex));
      if (op.disabled) li.setAttribute('aria-disabled', 'true');
      const texto = document.createElement('span');
      texto.textContent = op.text;
      li.appendChild(texto);
      li.insertAdjacentHTML('beforeend', MARCA);
      lista.appendChild(li);
    });
  }

  function posicionarSeletor() {
    if (!aberto) return;
    const { botao, lista } = aberto;
    const r = botao.getBoundingClientRect();
    const vh = window.innerHeight;
    const vw = document.documentElement.clientWidth;
    if (!botao.isConnected || r.bottom < 0 || r.top > vh) return fecharSeletor();
    const largura = Math.min(Math.max(r.width, 220), vw - 16);
    lista.style.width = `${largura}px`;
    lista.style.left = `${Math.max(8, Math.min(r.left, vw - largura - 8))}px`;
    const espaco = (aberto.paraCima ? r.top : vh - r.bottom) - 14;
    lista.style.maxHeight = `${Math.max(140, Math.min(320, espaco))}px`;
    if (aberto.paraCima) { lista.style.top = 'auto'; lista.style.bottom = `${vh - r.top + 6}px`; }
    else { lista.style.bottom = 'auto'; lista.style.top = `${r.bottom + 6}px`; }
  }

  function marcarAtivo(i, rolar, centralizar) {
    const { lista, botao } = aberto;
    const itens = lista.children;
    if (!itens.length) return;
    i = Math.max(0, Math.min(i, itens.length - 1));
    aberto.ativo = i;
    [...itens].forEach((li, j) => li.classList.toggle('ativa', j === i));
    botao.setAttribute('aria-activedescendant', itens[i].id);
    if (!rolar) return;
    const li = itens[i];
    if (centralizar) lista.scrollTop = li.offsetTop - (lista.clientHeight - li.offsetHeight) / 2;
    else if (li.offsetTop < lista.scrollTop) lista.scrollTop = li.offsetTop - 6;
    else if (li.offsetTop + li.offsetHeight > lista.scrollTop + lista.clientHeight) lista.scrollTop = li.offsetTop + li.offsetHeight - lista.clientHeight + 6;
  }

  function moverAtivo(passo) {
    const itens = [...aberto.lista.children];
    let i = aberto.ativo;
    for (let n = 0; n < itens.length; n++) {
      const proximo = Math.max(0, Math.min(itens.length - 1, i + passo));
      if (proximo === i) break;
      i = proximo;
      if (!itens[i].hasAttribute('aria-disabled')) break;
    }
    marcarAtivo(i, true);
  }

  function escolherOpcao(i) {
    if (!aberto) return;
    const { select, botao } = aberto;
    fecharSeletor();
    if (i !== select.selectedIndex) {
      select.selectedIndex = i;
      select.dispatchEvent(new Event('input', { bubbles: true }));
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
    botao.focus({ preventScroll: true });
  }

  function fecharSeletor() {
    if (!aberto) return;
    const { botao, lista } = aberto;
    aberto = null;
    botao.setAttribute('aria-expanded', 'false');
    botao.removeAttribute('aria-activedescendant');
    lista.classList.remove('aberta');
    setTimeout(() => lista.remove(), 260);
  }

  function tecladoSeletor(e, botao) {
    const estaAberto = aberto && aberto.botao === botao;
    if (!estaAberto) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); abrirSeletor(botao); }
      return;
    }
    const acoes = {
      ArrowDown: () => moverAtivo(1),
      ArrowUp: () => moverAtivo(-1),
      PageDown: () => moverAtivo(8),
      PageUp: () => moverAtivo(-8),
      Home: () => marcarAtivo(0, true),
      End: () => marcarAtivo(aberto.lista.children.length - 1, true),
      Enter: () => escolherOpcao(aberto.ativo),
      Escape: () => { e.stopPropagation(); fecharSeletor(); }
    };
    if (e.key === ' ' && !digitado) acoes[' '] = acoes.Enter;
    if (e.key === 'Tab') return fecharSeletor();
    if (acoes[e.key]) { e.preventDefault(); return acoes[e.key](); }
    if (e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return;
    // Digitar busca a opção: "enf" vai para "Técnico em Enfermagem".
    e.preventDefault();
    clearTimeout(digitadoTimer);
    digitado += normalizar(e.key);
    digitadoTimer = setTimeout(() => { digitado = ''; }, 700);
    const textos = [...aberto.select.options].map(o => normalizar(o.text));
    let i = textos.findIndex(t => t.startsWith(digitado));
    if (i === -1) i = textos.findIndex(t => t.includes(' ' + digitado));
    if (i !== -1) marcarAtivo(i, true);
  }

  document.addEventListener('pointerdown', e => {
    if (aberto && !aberto.lista.contains(e.target) && !aberto.botao.contains(e.target)) fecharSeletor();
  }, true);
  document.addEventListener('scroll', e => { if (aberto && e.target !== aberto.lista) posicionarSeletor(); }, true);
  window.addEventListener('resize', posicionarSeletor);

  const aprimorarEm = raiz => {
    if (raiz.matches && raiz.matches(SELETORES)) aprimorarSelect(raiz);
    raiz.querySelectorAll(SELETORES).forEach(aprimorarSelect);
  };
  aprimorarEm(document);
  // O quiz e algumas listas são montados depois do carregamento.
  new MutationObserver(mudancas => mudancas.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1) aprimorarEm(n); })))
    .observe(document.body, { childList: true, subtree: true });

  document.querySelectorAll('[data-ano]').forEach(el => { el.textContent = new Date().getFullYear(); });
})();
