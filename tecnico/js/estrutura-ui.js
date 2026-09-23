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

  const ICONE = {
    enfermagem: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>',
    radiologia: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3m15.364-6.364L5.636 18.364m12.728 0L5.636 5.636"/></svg>',
    informatica: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"/></svg>',
    sala: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/></svg>',
    seguranca: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>',
    biblioteca: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>',
    atendimento: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>'
  };

  const DESTAQUES = [
    { icone: ICONE.enfermagem, titulo: 'Laboratórios de enfermagem', texto: 'Leitos, simuladores e materiais iguais aos de hospitais e clínicas, incluindo UTI real, para treinar cada procedimento antes do estágio.' },
    { icone: ICONE.radiologia, titulo: 'Laboratório de radiologia', texto: 'Equipamento real de raio-X para praticar o posicionamento do paciente e as normas de proteção radiológica.' },
    { icone: ICONE.informatica, titulo: 'Laboratórios de informática', texto: 'Computadores para as aulas de desenvolvimento de sistemas, computação gráfica e rotinas administrativas.' },
    { icone: ICONE.sala, titulo: 'Salas de aula amplas', texto: 'Ambientes climatizados, com projeção e espaço para turmas que aprendem na prática desde o primeiro módulo.' },
    { icone: ICONE.seguranca, titulo: 'Sala de segurança do trabalho', texto: 'EPIs, sinalização e equipamentos usados no dia a dia da profissão para as aulas práticas do curso.' },
    { icone: ICONE.biblioteca, titulo: 'Biblioteca e espaços de estudo', texto: 'Acervo técnico e lugares para estudar antes da aula, revisar a matéria e se preparar para as provas.' },
    { icone: ICONE.atendimento, titulo: 'Atendimento presencial', texto: 'Equipe na recepção de cada unidade para matrícula, financeiro, estágio e tudo o que o aluno precisar.' }
  ];

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
      <button type="button" class="galeria-modal__fechar" aria-label="Fechar galeria">✕</button>
      <div class="galeria-modal__rolagem">
        <div class="container">
          <header class="galeria-modal__cabecalho">
            <span class="eyebrow">Estrutura</span>
            <h2 class="titulo">Um espaço feito para <em>aprender fazendo</em></h2>
            <p class="subtitulo">Três unidades na Grande BH com laboratórios equipados, salas amplas e tudo o que o aluno precisa para praticar de verdade desde o primeiro módulo.</p>
          </header>

          <div class="numeros galeria-modal__numeros">
            <div class="numero"><strong>1996</strong><span>Ano de fundação</span></div>
            <div class="numero"><strong>+20 mil</strong><span>Alunos formados</span></div>
            <div class="numero"><strong>4 em 5</strong><span>Alunos empregados após o curso</span></div>
            <div class="numero"><strong>3</strong><span>Unidades na Grande BH</span></div>
          </div>

          <div class="diferenciais galeria-modal__destaques">${DESTAQUES.map(d => `
            <div class="diferencial">
              <div class="diferencial__icone">${d.icone}</div>
              <div><h3>${d.titulo}</h3><p>${d.texto}</p></div>
            </div>`).join('')}
          </div>

          <div class="galeria-modal__separador">
            <span class="eyebrow">As fotos</span>
            <h3 class="galeria-modal__subtitulo">Conheça cada unidade por dentro</h3>
            <p class="galeria-modal__conta"></p>
            <div class="abas galeria-modal__filtros" role="tablist">
              <button type="button" class="aba ativa" data-unidade="" role="tab">Todas</button>
              ${Object.entries(NOMES).map(([k, n]) => `<button type="button" class="aba" data-unidade="${k}" role="tab">${n}</button>`).join('')}
            </div>
          </div>
          <div class="galeria-modal__endereco" hidden></div>
          <div class="galeria-modal__grade"></div>

          <div class="galeria-modal__chamada">
            <div>
              <h3>Venha conhecer a Conhecer de perto</h3>
              <p>Agende uma visita, conheça os laboratórios e fale com a nossa equipe sobre o curso que combina com você.</p>
            </div>
            <div class="galeria-modal__chamada-acoes">
              <a href="#" class="btn btn--primario" data-quiz data-quiz-modalidade="tecnico" data-quiz-origem="galeria-estrutura">Agendar uma visita</a>
              <a href="cursos.html" class="btn btn--contorno">Ver todos os cursos</a>
            </div>
          </div>
        </div>
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
    montarEndereco();
    modal.querySelector('.galeria-modal__grade').innerHTML = listaVisivel.map((f, i) => `
      <button type="button" class="galeria-modal__item" data-indice="${i}" aria-label="Abrir foto: ${escHtml(descricao(f))}">
        <img src="${f.mini}" alt="" loading="lazy" />
        <span>${escHtml(f.legenda)}${f.unidade ? `<small>${escHtml(NOMES[f.unidade])}</small>` : ''}</span>
      </button>`).join('');
  }

  // ao filtrar por unidade, mostra o endereço dela com atalho para visita e rota
  function montarEndereco() {
    const caixa = modal.querySelector('.galeria-modal__endereco');
    const unidade = typeof unidadesConhecer === 'undefined' ? null : unidadesConhecer.find(u => u.key === filtro);
    caixa.hidden = !unidade;
    if (!unidade) return;
    const q = encodeURIComponent(unidade.endereco);
    caixa.innerHTML = `
      <div>
        <strong>Unidade ${escHtml(unidade.nome)}</strong>
        <span>${escHtml(unidade.endereco)}</span>
      </div>
      <div class="galeria-modal__endereco-acoes">
        <a href="#" class="btn btn--primario btn--pequeno" data-quiz data-quiz-modalidade="tecnico" data-quiz-origem="galeria-visita-${unidade.key}">Agendar visita</a>
        <a href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener noreferrer" class="btn btn--contorno btn--pequeno">Como chegar</a>
      </div>`;
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
