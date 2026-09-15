/* Quiz de captação de lead + links entre os 3 sites (principal, técnico e graduação).
   Edite só tecnico/js/lead-quiz.js e rode `node _interno/sincronizar.js` para copiar aos outros sites.
   Usa os dados carregados antes dele: cursos-tecnicos-data.js e/ou graduacoes-data.js.
   Cada página pode definir window.LEAD_QUIZ_CONFIG = { modalidades: [...] }. */
(function () {
  'use strict';

  // Endereço deste arquivo: serve para achar a raiz do projeto nas prévias (localhost e GitHub Pages).
  const ENDERECO_SCRIPT = document.currentScript ? document.currentScript.src : '';

  const CONFIG = {
    whatsapp: {
      tecnico:   '553132229330',
      graduacao: '5531971936023'
    },
    // URL de entrada de leads do Brota Flow. Vazio = não envia (o CRM ainda não expõe essa rota).
    brotaFlowEndpoint: '',
    sheetsEndpoint: 'https://script.google.com/macros/s/AKfycbz4PYVCeN61cpFIwVr9UwCxlIU3mcKy4JzBaqAh9Lyvd-gvYJFFPTw9QfK9g0hwI2Ah/exec',
    sites: {
      principal: 'https://conhecerescola.com.br/',
      tecnico:   'https://tecnico.conhecerescola.com.br/',
      graduacao: 'https://graduacao.conhecerescola.com.br/'
    },
    // Fora dos domínios oficiais (prévia local ou link do GitHub Pages) os 3 sites são pastas do mesmo projeto.
    sitesPrevia: { principal: '', tecnico: 'tecnico/', graduacao: 'graduacao/' }
  };

  const MODALIDADES = {
    tecnico:        { label: 'Curso Técnico',            detalhe: 'Presencial · Conhecer Escola Técnica', icon: '⚙️', interesse: 'Curso Técnico', nome: 'Técnico' },
    ead:            { label: 'Graduação EAD',            detalhe: '100% online · UniFECAF',                icon: '💻', interesse: 'Graduação',     nome: 'EAD' },
    semipresencial: { label: 'Graduação Semipresencial', detalhe: 'Online + encontros no polo · UniFECAF', icon: '🏫', interesse: 'Graduação',     nome: 'Semipresencial' }
  };

  const PAGINA = Object.assign({ modalidades: Object.keys(MODALIDADES) }, window.LEAD_QUIZ_CONFIG);
  PAGINA.modalidades = PAGINA.modalidades.filter(m => MODALIDADES[m]);

  const ICONES_AREA = {
    saude: '🏥', gestao: '📊', 'gestao-negocios': '📊', tecnologia: '💻', seguranca: '🦺',
    'ciencias-sociais': '🏛️', engenharia: '🏗️', educacao: '📚'
  };

  const NAO_DECIDI = 'Ainda não decidi';
  const NAO_SEI = 'Ainda não sei';

  const temTecnicos = () => typeof cursosTecnicosData !== 'undefined';
  const temGraduacoes = () => typeof graduacoesData !== 'undefined';

  function areasDe(modalidade) {
    if (modalidade === 'tecnico') {
      if (!temTecnicos()) return [];
      return areasTecnicas
        .map(a => ({
          key: a.key, label: a.label, icon: a.icon,
          cursos: Object.values(cursosTecnicosData).filter(c => c.areaKey === a.key && !c.emBreve).map(c => c.nome)
        }))
        .filter(a => a.cursos.length);
    }
    if (!temGraduacoes()) return [];
    return areasGraduacao
      .map(a => ({
        key: a.key, label: a.label, icon: ICONES_AREA[a.key] || '🎓',
        cursos: graduacoesData.filter(c => c.modalidade === modalidade && c.areaKey === a.key).map(c => c.nome)
      }))
      .filter(a => a.cursos.length);
  }

  function unidadesPara(nomeCurso) {
    const todas = typeof unidadesConhecer !== 'undefined'
      ? unidadesConhecer
      : [{ key: 'bh', nome: 'Belo Horizonte' }, { key: 'sl', nome: 'Santa Luzia' }, { key: 'rn', nome: 'Ribeirão das Neves' }];
    const curso = temTecnicos() && Object.values(cursosTecnicosData).find(c => c.nome === nomeCurso);
    if (!curso || !curso.unidades) return todas;
    return todas.filter(u => curso.unidades.includes(u.key));
  }

  /* ── Origem do visitante (UTM / referrer) ─────────────────── */
  const ORIGEM_KEY = 'conhecer_origem';
  const PARAMS_RASTREIO = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];

  function lerOrigem() {
    let salva = null;
    try { salva = JSON.parse(sessionStorage.getItem(ORIGEM_KEY)); } catch (e) {}
    const params = new URLSearchParams(location.search);
    const novos = {};
    PARAMS_RASTREIO.forEach(k => { if (params.get(k)) novos[k] = params.get(k); });
    if (salva && !Object.keys(novos).length) return salva;

    const ref = document.referrer;
    const origem = Object.assign(novos, {
      referrer: ref && !ref.startsWith(location.origin) ? ref : '',
      landing_page: location.href
    });
    try { sessionStorage.setItem(ORIGEM_KEY, JSON.stringify(origem)); } catch (e) {}
    return origem;
  }
  const origem = lerOrigem();

  /* ── Utilitários ──────────────────────────────────────────── */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function mascaraTelefone(valor) {
    const d = valor.replace(/\D/g, '').slice(0, 11);
    if (!d) return '';
    if (d.length <= 2)  return '(' + d;
    if (d.length <= 6)  return '(' + d.slice(0, 2) + ') ' + d.slice(2);
    if (d.length <= 10) return '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6);
    return '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
  }

  function telefoneValido(valor) {
    const d = valor.replace(/\D/g, '');
    return (d.length === 10 || d.length === 11) && Number(d.slice(0, 2)) >= 11;
  }

  function evento(nome, params) {
    if (typeof window.gtag === 'function') window.gtag('event', nome, params);
    else (window.dataLayer = window.dataLayer || []).push(Object.assign({ event: nome }, params));
  }

  function registrarLead(lead) {
    const corpo = JSON.stringify(lead);
    [CONFIG.brotaFlowEndpoint, CONFIG.sheetsEndpoint].filter(Boolean).forEach(url => {
      fetch(url, {
        method: 'POST', mode: 'no-cors', keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: corpo
      }).catch(() => {});
    });
    evento('generate_lead', { modalidade: lead.modalidade, curso: lead.curso, cta: lead.cta });
  }

  function abrirWhatsApp(url) {
    const janela = window.open(url, '_blank');
    if (janela) janela.opener = null;
    else location.href = url;
  }

  const ICON_WPP = '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

  /* ── Motor do quiz ────────────────────────────────────────── */
  function criarQuiz(root) {
    let ctx = {};
    let dados = {};
    let passo = 0;
    let largura = 0;
    let interagiu = false;
    let avancando = false;
    let whatsappUrl = '';

    const primeiroNome = () => dados.nome.split(' ')[0];

    function sequencia() {
      if (whatsappUrl) return ['sucesso'];
      const s = ['nome', 'whatsapp'];
      if (!ctx.modalidade) s.push('modalidade');
      if (!ctx.curso) s.push('area', 'curso');
      s.push('ensinoMedio');
      if (dados.modalidade === 'tecnico') s.push('unidade');
      s.push('final');
      return s;
    }

    function opcao(valor, texto, icon, detalhe, selecionado) {
      return `<button type="button" class="lq-opt${selecionado ? ' is-selected' : ''}" data-valor="${esc(valor)}">
        <span class="lq-opt-icon" aria-hidden="true">${icon}</span>
        <span><span class="lq-opt-text">${esc(texto)}</span>${detalhe ? `<span class="lq-opt-detail">${esc(detalhe)}</span>` : ''}</span>
      </button>`;
    }

    function botaoContinuar(texto) {
      return `<button type="button" class="lq-btn" data-acao="continuar">${texto || 'Continuar'}
        <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
      </button>`;
    }

    const PASSOS = {
      nome: () => `
        <h2 class="lq-title">Olá! Como podemos te chamar?</h2>
        <p class="lq-sub">Assim personalizamos o seu atendimento.</p>
        <input class="lq-input" type="text" name="nome" autocomplete="name" placeholder="Seu nome" value="${esc(dados.nome)}" />
        <p class="lq-erro" hidden>Digite seu nome para continuar.</p>
        ${botaoContinuar()}`,

      whatsapp: () => `
        <h2 class="lq-title">Prazer, ${esc(primeiroNome())}! Qual é o seu WhatsApp?</h2>
        <p class="lq-sub">É por lá que nossa equipe vai falar com você.</p>
        <input class="lq-input" type="tel" name="whatsapp" inputmode="numeric" autocomplete="tel-national" placeholder="(31) 99999-9999" value="${esc(dados.whatsapp)}" />
        <p class="lq-erro" hidden>Informe um número com DDD, ex.: (31) 99999-9999.</p>
        ${botaoContinuar()}
        <p class="lq-note">🔒 Usamos seu número apenas para o atendimento sobre os cursos.</p>`,

      modalidade: () => `
        <h2 class="lq-title">O que você quer estudar?</h2>
        <p class="lq-sub">Escolha o caminho que combina com a sua rotina.</p>
        <div class="lq-options">
          ${PAGINA.modalidades.map(k => opcao(k, MODALIDADES[k].label, MODALIDADES[k].icon, MODALIDADES[k].detalhe, dados.modalidade === k)).join('')}
        </div>`,

      area: () => `
        <h2 class="lq-title">Qual área chama mais a sua atenção?</h2>
        <p class="lq-sub">${esc(MODALIDADES[dados.modalidade].label)}</p>
        <div class="lq-options">
          ${areasDe(dados.modalidade).map(a => opcao(a.key, a.label, a.icon, '', dados.areaKey === a.key)).join('')}
        </div>`,

      curso: () => {
        const area = areasDe(dados.modalidade).find(a => a.key === dados.areaKey);
        const cursos = (area ? area.cursos : []).concat(NAO_DECIDI);
        return `
          <h2 class="lq-title">Qual curso você tem interesse?</h2>
          <p class="lq-sub">${esc(area ? area.label : '')}</p>
          <select class="lq-select" name="curso">
            <option value="">Selecione um curso</option>
            ${cursos.map(c => `<option${dados.curso === c ? ' selected' : ''}>${esc(c)}</option>`).join('')}
          </select>
          <p class="lq-erro" hidden>Selecione um curso (ou "${NAO_DECIDI}").</p>
          ${botaoContinuar()}`;
      },

      ensinoMedio: () => `
        <h2 class="lq-title">Você já concluiu o Ensino Médio?</h2>
        <p class="lq-sub">Isso nos ajuda a indicar o melhor caminho.</p>
        <div class="lq-options">
          ${opcao('Já concluí o Ensino Médio', 'Sim, já concluí', '✅', '', dados.ensinoMedio === 'Já concluí o Ensino Médio')}
          ${opcao('Estou cursando o Ensino Médio', 'Estou cursando', '📚', '', dados.ensinoMedio === 'Estou cursando o Ensino Médio')}
          ${opcao('Ainda não concluí o Ensino Médio', 'Ainda não concluí', '📝', '', dados.ensinoMedio === 'Ainda não concluí o Ensino Médio')}
        </div>`,

      unidade: () => {
        const unidades = unidadesPara(dados.curso);
        return `
        <h2 class="lq-title">Qual unidade fica melhor para você?</h2>
        <p class="lq-sub">${unidades.length < 3 ? 'Unidades onde este curso é oferecido.' : 'A Conhecer está em três cidades da Grande BH.'}</p>
        <div class="lq-options">
          ${unidades.map(u => opcao(u.nome, u.nome, '📍', u.bairro || '', dados.unidade === u.nome)).join('')}
          ${opcao(NAO_SEI, NAO_SEI, '🤔', '', dados.unidade === NAO_SEI)}
        </div>`;
      },

      final: () => {
        const m = MODALIDADES[dados.modalidade];
        const linhas = [['Curso', dados.curso], ['Modalidade', m.label]];
        if (dados.unidade) linhas.push(['Unidade', dados.unidade]);
        linhas.push(['WhatsApp', dados.whatsapp]);
        return `
          <h2 class="lq-title">Tudo pronto, ${esc(primeiroNome())}!</h2>
          <p class="lq-sub">Toque no botão para falar com a equipe ${dados.modalidade === 'tecnico' ? 'da Conhecer' : 'da UniFECAF'}. Suas respostas já vão na mensagem.</p>
          <dl class="lq-resumo">
            ${linhas.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}
          </dl>
          <button type="button" class="lq-btn lq-btn--wpp" data-acao="enviar">${ICON_WPP} Falar no WhatsApp</button>
          <p class="lq-note">Ao continuar, você concorda em receber contato da nossa equipe pelo WhatsApp.</p>`;
      },

      sucesso: () => `
        <h2 class="lq-title">Recebemos seu contato! 🎉</h2>
        <p class="lq-sub">Abrimos o WhatsApp com a sua mensagem pronta. Se ele não abriu, toque no botão abaixo.</p>
        <button type="button" class="lq-btn lq-btn--wpp" data-acao="reabrir">${ICON_WPP} Abrir o WhatsApp</button>
        <button type="button" class="lq-back" data-acao="recomecar">Enviar outra resposta</button>`
    };

    function render() {
      const seq = sequencia();
      const id = seq[passo];
      const alvo = Math.round(((passo + 1) / seq.length) * 100);
      const rotulo = id === 'sucesso' ? 'Enviado' : id === 'final' ? 'Última etapa' : `Pergunta ${passo + 1}`;

      root.innerHTML = `
        <div class="lq-progress"><div class="lq-progress-fill" style="width:${largura}%"></div></div>
        <div class="lq-body" data-passo="${id}">
          <p class="lq-label">${rotulo}</p>
          ${PASSOS[id]()}
          ${passo > 0 && id !== 'sucesso' ? '<button type="button" class="lq-back" data-acao="voltar">← Voltar</button>' : ''}
        </div>`;

      requestAnimationFrame(() => {
        const fill = root.querySelector('.lq-progress-fill');
        if (fill) fill.style.width = alvo + '%';
      });
      largura = alvo;

      if (interagiu) {
        const foco = root.querySelector('.lq-input, .lq-select, .lq-opt, .lq-btn');
        if (foco) foco.focus({ preventScroll: true });
      }
    }

    function avancar() {
      interagiu = true;
      passo = Math.min(passo + 1, sequencia().length - 1);
      render();
    }

    function erro(msg) {
      const campo = root.querySelector('.lq-input, .lq-select');
      const aviso = root.querySelector('.lq-erro');
      if (campo) { campo.classList.add('is-error'); campo.focus(); }
      if (aviso) aviso.hidden = false;
      if (msg && aviso) aviso.textContent = msg;
    }

    function continuar() {
      const id = sequencia()[passo];
      if (id === 'nome') {
        const v = root.querySelector('.lq-input').value.trim().replace(/\s+/g, ' ');
        if (v.length < 2) return erro();
        dados.nome = v;
      } else if (id === 'whatsapp') {
        const v = root.querySelector('.lq-input').value;
        if (!telefoneValido(v)) return erro();
        dados.whatsapp = mascaraTelefone(v);
      } else if (id === 'curso') {
        const v = root.querySelector('.lq-select').value;
        if (!v) return erro();
        dados.curso = v;
      }
      avancar();
    }

    function escolher(valor) {
      if (avancando) return;
      const id = sequencia()[passo];
      if (id === 'modalidade') {
        if (dados.modalidade !== valor) { dados.areaKey = ''; dados.area = ''; dados.curso = ''; dados.unidade = ''; }
        dados.modalidade = valor;
      } else if (id === 'area') {
        const area = areasDe(dados.modalidade).find(a => a.key === valor);
        if (dados.areaKey !== valor) dados.curso = '';
        dados.areaKey = valor;
        dados.area = area ? area.label : '';
      } else if (id === 'ensinoMedio') {
        dados.ensinoMedio = valor;
      } else if (id === 'unidade') {
        dados.unidade = valor;
      }
      root.querySelectorAll('.lq-opt').forEach(o => o.classList.toggle('is-selected', o.dataset.valor === valor));
      avancando = true;
      setTimeout(() => { avancando = false; avancar(); }, 220);
    }

    function montarLead() {
      const m = MODALIDADES[dados.modalidade];
      const servico = dados.modalidade === 'tecnico' ? 'tecnico' : 'graduacao';
      const digitos = dados.whatsapp.replace(/\D/g, '');
      return Object.assign({
        nome: dados.nome,
        whatsapp: dados.whatsapp,
        whatsapp_e164: '55' + digitos,
        email: '',
        interesse: m.interesse,
        modalidade: m.nome,
        area: dados.area,
        curso: dados.curso,
        ensino_medio: dados.ensinoMedio,
        unidade: dados.unidade,
        servico: servico === 'tecnico' ? 'Conhecer Escola Técnica' : 'UniFECAF',
        whatsapp_destino: CONFIG.whatsapp[servico],
        cta: ctx.cta || '',
        pagina: location.pathname + location.search,
        enviado_em: new Date().toISOString()
      }, origem);
    }

    function mensagem(lead) {
      const m = MODALIDADES[dados.modalidade];
      const interesse = lead.curso === NAO_DECIDI
        ? `Tenho interesse em ${m.label}${lead.area ? ' na área de ' + lead.area : ''}, mas ainda não decidi o curso.`
        : `Tenho interesse em ${lead.curso} (${m.label}).`;
      const linhas = [`Olá! Me chamo ${lead.nome} e vim pelo site.`, interesse];
      if (lead.unidade && lead.unidade !== NAO_SEI) linhas.push(`Unidade de preferência: ${lead.unidade}.`);
      linhas.push(`${lead.ensino_medio}.`, 'Pode me ajudar?');
      return linhas.join('\n');
    }

    function enviar() {
      const lead = montarLead();
      registrarLead(lead);
      whatsappUrl = `https://wa.me/${lead.whatsapp_destino}?text=${encodeURIComponent(mensagem(lead))}`;
      abrirWhatsApp(whatsappUrl);
      passo = 0;
      render();
    }

    function voltar() {
      interagiu = true;
      passo = Math.max(passo - 1, 0);
      render();
    }

    root.addEventListener('click', e => {
      const opt = e.target.closest('.lq-opt');
      if (opt) return escolher(opt.dataset.valor);
      const acao = e.target.closest('[data-acao]');
      if (!acao) return;
      const tipo = acao.dataset.acao;
      if (tipo === 'continuar') continuar();
      else if (tipo === 'voltar') voltar();
      else if (tipo === 'enviar') enviar();
      else if (tipo === 'reabrir') abrirWhatsApp(whatsappUrl);
      else if (tipo === 'recomecar') { reiniciar(ctx); interagiu = true; render(); }
    });

    root.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target.matches('.lq-input')) { e.preventDefault(); continuar(); }
    });

    root.addEventListener('input', e => {
      if (e.target.name === 'whatsapp') e.target.value = mascaraTelefone(e.target.value);
      e.target.classList.remove('is-error');
      const aviso = root.querySelector('.lq-erro');
      if (aviso) aviso.hidden = true;
    });

    root.addEventListener('change', e => {
      if (e.target.matches('.lq-select')) e.target.classList.remove('is-error');
    });

    function reiniciar(contexto) {
      ctx = Object.assign({}, contexto);
      if (!PAGINA.modalidades.includes(ctx.modalidade)) { ctx.modalidade = ''; ctx.curso = ''; }
      if (!ctx.modalidade && PAGINA.modalidades.length === 1) ctx.modalidade = PAGINA.modalidades[0];
      dados = {
        nome: dados.nome || '', whatsapp: dados.whatsapp || '',
        modalidade: ctx.modalidade, areaKey: '', area: ctx.curso ? (ctx.area || '') : '', curso: ctx.curso || '',
        ensinoMedio: '', unidade: ''
      };
      passo = 0;
      largura = 0;
      whatsappUrl = '';
    }

    return {
      iniciar(contexto, comFoco) {
        reiniciar(contexto);
        interagiu = !!comFoco;
        render();
      }
    };
  }

  /* ── Estilos ──────────────────────────────────────────────── */
  const estilo = document.createElement('style');
  estilo.textContent = `
    .lq-root, .lq-overlay { --lq-c:var(--quiz-cor, #2db85a); --lq-c-escura:var(--quiz-cor-escura, #1e9045); --lq-c-texto:var(--quiz-cor-texto, #fff);
      --lq-tinta:var(--quiz-tinta, #0d1b3e); --lq-fonte-titulo:var(--quiz-fonte-titulo, 'Sora', sans-serif); --lq-fonte:var(--quiz-fonte, 'Instrument Sans', sans-serif); }
    .lq-overlay { display:none; position:fixed; inset:0; z-index:99999; background:rgba(7,15,34,.82);
      backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); align-items:center; justify-content:center; padding:20px; }
    .lq-overlay.open { display:flex; }
    .lq-modal { position:relative; width:100%; max-width:460px; max-height:calc(100vh - 40px); overflow-y:auto;
      background:#fff; border-radius:24px; box-shadow:0 40px 100px rgba(0,0,0,.5); animation:lqIn .4s cubic-bezier(.34,1.56,.64,1) both; }
    @keyframes lqIn { from { opacity:0; transform:translateY(48px) scale(.94); } to { opacity:1; transform:none; } }
    .lq-close { position:absolute; top:14px; right:14px; z-index:2; width:36px; height:36px; border:none; border-radius:50%;
      background:#f0f3f8; color:#666; font-size:1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; }
    .lq-close:hover { background:#dde3ef; color:#333; }
    .lq-root { font-family:var(--lq-fonte); color:var(--lq-tinta); text-align:left; }
    .lq-root--inline { max-width:560px; margin:0 auto; background:#fff; border-radius:20px; overflow:hidden;
      box-shadow:0 0 0 1.5px color-mix(in srgb, var(--lq-c) 50%, transparent), 0 20px 60px rgba(0,0,0,.25); }
    .lq-progress { height:4px; background:#e8edf5; }
    .lq-progress-fill { height:100%; background:var(--lq-c); border-radius:0 4px 4px 0;
      transition:width .5s cubic-bezier(.34,1.56,.64,1); }
    .lq-body { padding:36px 36px 30px; animation:lqStep .3s ease both; }
    @keyframes lqStep { from { opacity:0; transform:translateX(16px); } to { opacity:1; transform:none; } }
    .lq-label { font-family:var(--lq-fonte-titulo); font-size:.7rem; font-weight:700; letter-spacing:.1em;
      text-transform:uppercase; color:var(--lq-c); margin:0 0 10px; }
    .lq-title { font-family:var(--lq-fonte-titulo); font-size:1.3rem; font-weight:800; line-height:1.3;
      color:var(--lq-tinta); margin:0 40px 6px 0; }
    .lq-sub { font-size:.88rem; color:#6b7280; margin:0 0 22px; }
    .lq-input, .lq-select { display:block; width:100%; box-sizing:border-box; margin:0 0 16px; padding:14px 16px;
      border:2px solid #dde3ef; border-radius:12px; background:#fff; color:var(--lq-tinta);
      font-family:inherit; font-size:1rem; outline:none; transition:border-color .2s; }
    .lq-select { appearance:none; -webkit-appearance:none; padding-right:42px; cursor:pointer;
      background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 14px center; }
    .lq-input:focus, .lq-select:focus { border-color:var(--lq-c); }
    .lq-input.is-error, .lq-select.is-error { border-color:#e53e3e; animation:lqShake .3s ease; }
    @keyframes lqShake { 25% { transform:translateX(-6px); } 75% { transform:translateX(6px); } }
    .lq-erro { margin:-8px 0 14px; font-size:.8rem; color:#e53e3e; }
    .lq-options { display:flex; flex-direction:column; gap:10px; }
    .lq-opt { display:flex; align-items:center; gap:14px; width:100%; padding:12px 16px; border:2px solid #dde3ef;
      border-radius:12px; background:#fff; color:var(--lq-tinta); font-family:inherit; font-size:.95rem; text-align:left;
      cursor:pointer; transition:border-color .2s, background .2s, transform .15s; }
    .lq-opt:hover, .lq-opt:focus-visible { border-color:var(--lq-c); background:color-mix(in srgb, var(--lq-c) 8%, #fff); transform:translateX(4px); outline:none; }
    .lq-opt.is-selected { border-color:var(--lq-c); background:color-mix(in srgb, var(--lq-c) 8%, #fff); }
    .lq-opt-icon { flex-shrink:0; width:38px; height:38px; border-radius:10px; background:#f0f3f8;
      display:flex; align-items:center; justify-content:center; font-size:1.1rem; }
    .lq-opt.is-selected .lq-opt-icon { background:color-mix(in srgb, var(--lq-c) 15%, #fff); }
    .lq-opt-text { display:block; font-weight:500; }
    .lq-opt-detail { display:block; margin-top:2px; font-size:.78rem; color:#888; }
    .lq-btn { display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:15px 24px; border:none;
      border-radius:12px; background:var(--lq-c); color:var(--lq-c-texto); font-family:var(--lq-fonte-titulo);
      font-size:1rem; font-weight:700; cursor:pointer; transition:background .2s, transform .15s; }
    .lq-btn:hover { background:var(--lq-c-escura); transform:translateY(-1px); }
    .lq-btn--wpp { background:#25D366; color:#fff; box-shadow:0 6px 20px rgba(37,211,102,.35); }
    .lq-btn--wpp:hover { background:#1eb858; }
    .lq-back { display:block; width:100%; margin-top:6px; padding:12px 0 0; border:none; background:none; color:#999;
      font-family:inherit; font-size:.83rem; text-align:center; cursor:pointer; }
    .lq-back:hover { color:var(--lq-tinta); }
    .lq-note { margin:14px 0 0; font-size:.74rem; color:#9ca3af; text-align:center; }
    .lq-resumo { margin:0 0 20px; padding:14px 16px; border-radius:12px; background:#f5f7fb; }
    .lq-resumo div { display:flex; justify-content:space-between; gap:12px; padding:6px 0; font-size:.88rem; }
    .lq-resumo div + div { border-top:1px solid #e8edf5; }
    .lq-resumo dt { color:#6b7280; }
    .lq-resumo dd { margin:0; font-weight:500; text-align:right; }
    @media (max-width:480px) {
      .lq-body { padding:28px 22px 24px; }
      .lq-title { font-size:1.15rem; }
    }
  `;
  document.head.appendChild(estilo);

  /* ── Modal ────────────────────────────────────────────────── */
  let overlay = null;
  let quizModal = null;

  function fechar() {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function abrir(contexto) {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'lq-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', 'Fale com a gente');
      overlay.innerHTML = '<div class="lq-modal"><button type="button" class="lq-close" aria-label="Fechar">✕</button><div class="lq-root"></div></div>';
      document.body.appendChild(overlay);
      quizModal = criarQuiz(overlay.querySelector('.lq-root'));
      overlay.querySelector('.lq-close').addEventListener('click', fechar);
      overlay.addEventListener('click', e => { if (e.target === overlay) fechar(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') fechar(); });
    }
    quizModal.iniciar(contexto, true);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    evento('quiz_open', { cta: contexto.cta || '' });
  }

  document.querySelectorAll('[data-lead-quiz-inline]').forEach(el => {
    el.classList.add('lq-root', 'lq-root--inline');
    criarQuiz(el).iniciar({ cta: el.dataset.leadQuizInline || 'quiz-inline' }, false);
  });

  // Todo link de WhatsApp do site passa pelo quiz: o número certo depende da resposta.
  document.addEventListener('click', e => {
    const gatilho = e.target.closest('[data-quiz], a[href*="wa.me/"], a[href*="api.whatsapp.com"]');
    if (!gatilho || gatilho.closest('.lq-root')) return;
    e.preventDefault();
    const d = gatilho.dataset;
    abrir({
      modalidade: d.quizModalidade || '',
      area: d.quizArea || '',
      curso: d.quizCurso || '',
      cta: d.quizOrigem || (gatilho.getAttribute('aria-label') || gatilho.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60)
    });
  });

  /* ── Links entre os sites ─────────────────────────────────── */
  const dominiosOficiais = Object.values(CONFIG.sites).map(u => new URL(u).hostname);
  const emPrevia = !dominiosOficiais.includes(location.hostname.replace(/^www\./, ''));
  const raizPrevia = ENDERECO_SCRIPT.replace(/(tecnico|graduacao|assets)\/js\/lead-quiz\.js.*$/, '') || new URL('/', location.href).href;

  function urlDoSite(a) {
    const base = emPrevia ? CONFIG.sitesPrevia[a.dataset.site] : CONFIG.sites[a.dataset.site];
    if (base === undefined) return null;
    return new URL(base + (a.dataset.caminho || ''), emPrevia ? raizPrevia : location.href);
  }

  document.querySelectorAll('a[data-site]').forEach(a => {
    const url = urlDoSite(a);
    if (url) a.href = url.href;
  });

  // sessionStorage não atravessa subdomínios: a origem do visitante viaja na URL.
  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-site]');
    const url = a && urlDoSite(a);
    if (!url) return;
    PARAMS_RASTREIO.forEach(k => { if (origem[k] && !url.searchParams.has(k)) url.searchParams.set(k, origem[k]); });
    a.href = url.href;
  }, true);

  window.LeadQuiz = { abrir };
})();
