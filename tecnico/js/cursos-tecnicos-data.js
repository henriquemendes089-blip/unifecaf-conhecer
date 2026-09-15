/* Cursos técnicos — Conhecer Escola Técnica
   Textos: "INFORMAÇÕES DOS CURSOS PARA O SITE.docx" (Samuel).
   Unidades por curso, imagens e Cuidador de Idosos: site conhecerescola.com.br. */

const unidadesConhecer = [
  { key: 'bh', nome: 'Belo Horizonte', bairro: 'Centro', endereco: 'Rua dos Caetés, 123 - Centro, Belo Horizonte - MG, 30120-080' },
  { key: 'sl', nome: 'Santa Luzia', bairro: 'São Benedito', endereco: 'R. Ataláia, 37 - São Benedito, Santa Luzia - MG, 33120-570' },
  { key: 'rn', nome: 'Ribeirão das Neves', bairro: 'Veneza', endereco: 'Av. Dionísio Gomes, 159 - Veneza, Ribeirão das Neves - MG, 33820-565' }
];

const portaisAluno = [
  { nome: 'Unidade 1 – Belo Horizonte', url: 'http://portal.sponteeducacional.net.br/conhecer' },
  { nome: 'Unidade 2 – Belo Horizonte', url: 'http://portal.sponteeducacional.net.br/tecconhecer' },
  { nome: 'Unidade 3 – Santa Luzia', url: 'http://portal.sponteeducacional.net.br/conhecersl' },
  { nome: 'Unidade 4 – Ribeirão das Neves', url: 'http://portal.sponteeducacional.net.br/conhecerdasneves' }
];

const areasTecnicas = [
  { key: 'saude',      label: 'Saúde',             icon: '🏥' },
  { key: 'gestao',     label: 'Gestão e Negócios', icon: '📊' },
  { key: 'tecnologia', label: 'Tecnologia',        icon: '💻' },
  { key: 'seguranca',  label: 'Segurança',         icon: '🦺' }
];

const cursosTecnicosData = {

  /* ─── SAÚDE ─────────────────────────────────────────────── */

  "enfermagem": {
    slug: "enfermagem", nome: "Técnico em Enfermagem", areaKey: "saude", area: "Saúde",
    unidades: ["bh", "sl", "rn"], destaque: true, foto: "img/cursos/recorte-enfermagem.webp",
    descricao: "O Curso Técnico em Enfermagem tem por objetivo formar profissionais de saúde capazes de prestar assistência em diferentes contextos de saúde, sob a supervisão de enfermeiros e outros profissionais, visando a promoção, prevenção, recuperação e reabilitação da saúde.",
    perfilProfissional: [
      "Realizar, sob a supervisão do Enfermeiro, cuidados integrais de enfermagem a indivíduos, família e grupos sociais vulneráveis ou não.",
      "Atuar na promoção, prevenção, recuperação e reabilitação dos processos saúde-doença em todo o ciclo vital.",
      "Participar do planejamento e execução das ações de saúde junto à equipe multidisciplinar, considerando as normas de biossegurança, envolvendo curativos, administração de medicamentos e vacinas, nebulizações, banho de leito, cuidados pós-morte, mensuração antropométrica e verificação de sinais vitais.",
      "Preparar o paciente para os procedimentos de saúde.",
      "Colaborar com o Enfermeiro em ações de comissões de certificação de serviços de saúde, tais como núcleo de segurança do paciente, serviço de controle de infecção hospitalar, gestão da qualidade dos serviços prestados à população, gestão de riscos, comissões de ética de enfermagem, transplantes, óbitos e outros."
    ],
    campoDeAtuacao: [
      "Ambulatórios", "Centros de Atenção Psicossocial", "Centros de Diagnóstico por Imagem e Análises Clínicas",
      "Clínicas", "Consultórios", "Consultórios na Rua", "Cuidado Domiciliar", "Hospitais",
      "Indústria e Comércio em Serviços de Segurança do Trabalho", "Instituições de Longa Permanência",
      "Organizações Militares", "Serviços de Urgências Móveis", "Unidades Básicas de Saúde",
      "Unidades de Pronto Atendimento"
    ]
  },

  "radiologia": {
    slug: "radiologia", nome: "Técnico em Radiologia", areaKey: "saude", area: "Saúde",
    unidades: ["bh", "sl", "rn"], destaque: true, foto: "img/cursos/recorte-radiologia.webp",
    descricao: "O objetivo principal do Curso Técnico em Radiologia é formar profissionais capacitados para operar equipamentos de diagnóstico por imagem, como raio-X, tomografia e mamografia. O curso ensina a preparar e posicionar o paciente corretamente, além de aplicar normas rígidas de segurança e proteção contra radiação no ambiente de saúde.",
    competenciasPrevias: "Não há",
    perfilProfissional: [
      "Aplicar, sob a supervisão de profissionais de nível superior, técnicas de proteção radiológica e de biossegurança.",
      { texto: "Realizar exames de radiodiagnóstico, considerando todo o processo de execução das técnicas para aquisição de imagens radiológicas, que compreende:",
        itens: [
          "Acolher e recepcionar o paciente.",
          "Proceder à revisão da anamnese.",
          "Orientar e preparar o paciente para o exame.",
          "Posicionar o paciente e o equipamento.",
          "Realizar a exposição.",
          "Processar e avaliar o padrão técnico da imagem."
        ] },
      "Supervisionar as aplicações de técnicas em radiologia, em seus respectivos setores.",
      "Utilizar radiação e outras formas de energia na realização de procedimentos para obtenção de imagens diagnósticas, tais como: radiologia convencional e digital, mamografia, densitometria, hemodinâmica, tomografia computadorizada, ressonância magnética, radiologia forense, radiologia veterinária, dentre outras."
    ],
    campoDeAtuacao: [
      "Hospitais", "Clínicas", "Serviços de diagnóstico médico, forense, veterinário e odontológico",
      "Unidades Básicas de Saúde", "Unidades de Apoio Diagnóstico"
    ]
  },

  "analises-clinicas": {
    slug: "analises-clinicas", nome: "Técnico em Análises Clínicas", areaKey: "saude", area: "Saúde",
    unidades: ["bh"], destaque: true, foto: "img/cursos/recorte-analises-clinicas.webp",
    descricao: "O objetivo do Curso Técnico em Análises Clínicas é formar profissionais qualificados e habilitados para atuar no apoio ao diagnóstico médico, realizando a coleta, o processamento e a análise de amostras biológicas (como sangue, urina e fezes) em laboratórios, hospitais e clínicas. A formação capacita o estudante a executar procedimentos técnicos padronizados, operar equipamentos tecnológicos avançados e aplicar rigorosamente as normas de biossegurança e controle de qualidade.",
    perfilProfissional: [
      "Executar, sob a supervisão do profissional responsável de nível superior, processos operacionais necessários ao diagnóstico laboratorial que compreendem a fase pré-analítica e analítica nos setores da parasitologia, microbiologia, imunologia, hematologia, bioquímica, biologia molecular, hormônios, toxicologia e líquidos corporais.",
      "Operar aparato tecnológico de laboratório de saúde e equipamentos analíticos e de suporte às atividades laboratoriais.",
      "Participar de campanhas educativas e incentivar as atividades comunitárias de atenção primária, promovendo a integração entre a equipe de saúde e a comunidade.",
      "Recepcionar e cadastrar clientes e exames; realizar processos de coleta, recepção, preparação e análise das amostras, colaborando ainda na investigação e implantação de novas tecnologias biomédicas.",
      "Trabalhar de acordo com as normas de biossegurança e qualidade, e aplicar as técnicas adequadas no descarte de resíduos de serviços de saúde, protegendo os indivíduos e o meio ambiente."
    ],
    campoDeAtuacao: [
      "Laboratórios de Análises Clínicas e de Diagnósticos Médicos", "Hospitais", "Clínicas",
      "Unidades Básicas de Saúde (UBS)", "Unidades de Pronto Atendimento (UPAs)", "Hemocentros",
      "Laboratórios Veterinários", "Laboratórios de Toxicologia", "Laboratórios de Pesquisas Biomédicas",
      "Laboratórios de Ensino", "Laboratórios de Controle de Qualidade em Saúde",
      "Laboratórios de Microbiologia de Alimentos"
    ]
  },

  "cuidador-de-idosos": {
    slug: "cuidador-de-idosos", nome: "Cuidador de Idosos", tipo: "Profissionalizante", areaKey: "saude", area: "Saúde",
    unidades: ["bh", "sl", "rn"], destaque: true, foto: "img/cursos/recorte-cuidador-de-idosos.webp",
    descricao: "No curso de Cuidador de Idosos você será capacitado a zelar pela integridade física, psicológica e pelo bem-estar do idoso de forma humanizada e com as mais recentes técnicas. Você vai conhecer procedimentos de primeiros socorros, do cuidado na alimentação, do uso de equipamentos para manuseio do paciente, dentre muitos outros conhecimentos. Com toda essa informação e preparo, você vai rapidamente se colocar no mercado.",
    perfilProfissional: [
      "Zelar pela integridade física e psicológica e pelo bem-estar do idoso, de forma humanizada.",
      "Aplicar procedimentos de primeiros socorros.",
      "Cuidar da alimentação do idoso.",
      "Utilizar equipamentos para o manuseio do paciente."
    ],
    campoDeAtuacao: []
  },

  /* ─── GESTÃO E NEGÓCIOS ─────────────────────────────────── */

  "administracao": {
    slug: "administracao", nome: "Técnico em Administração", areaKey: "gestao", area: "Gestão e Negócios",
    unidades: ["sl"], destaque: true, foto: "img/cursos/recorte-administracao.webp",
    descricao: "O Curso Técnico em Administração tem por objetivo formar profissionais com conhecimentos e habilidades para atuar em diferentes áreas administrativas de empresas e organizações, tanto públicas quanto privadas. O objetivo é capacitar os técnicos em administração para desempenhar funções operacionais e de suporte administrativo, contribuindo para o bom funcionamento das empresas.",
    perfilProfissional: [
      "Executar operações administrativas de planejamento, pesquisas, análise e assessoria no que tange à gestão de pessoal, de materiais e produção, de serviços, gestão financeira, orçamentária e mercadológica.",
      "Utilizar sistemas de informação e aplicar conceitos e modelos de gestão em funções administrativas, sejam operacionais, de coordenação, de chefia intermediária ou de direção superior, sob orientação.",
      "Elaborar orçamentos, fluxos de caixa e demais demonstrativos financeiros.",
      "Elaborar e expedir relatórios e documentos diversos.",
      "Auxiliar na elaboração de pareceres e laudos para tomada de decisões."
    ],
    campoDeAtuacao: [
      "Indústrias e/ou Prestadores de Serviços", "Organizações do Terceiro Setor"
    ]
  },

  "contabilidade": {
    slug: "contabilidade", foto: "img/cursos/recorte-contabilidade.webp", nome: "Técnico em Contabilidade", areaKey: "gestao", area: "Gestão e Negócios",
    descricao: "O objetivo principal do Curso Técnico em Contabilidade é capacitar estudantes de nível médio com habilidades práticas e teóricas para executar rotinas financeiras, fiscais e trabalhistas, registrando operações mercantis e auxiliando na gestão do patrimônio das empresas com foco em uma rápida inserção no mercado de trabalho.",
    perfilProfissional: [
      "Executar processos administrativos e contábeis.",
      "Classificar documentos contábeis, fiscais e não fiscais.",
      "Calcular tributos federais, estaduais e municipais.",
      "Prestar atendimento à fiscalização e apresentar documentos, livros e relatórios contábeis.",
      "Elaborar planos de determinação das taxas de depreciação e exaustão dos bens materiais e de amortização dos valores imateriais.",
      "Ordenar os fatos contábeis por débito e crédito.",
      "Apurar haveres, direitos e obrigações legais."
    ],
    campoDeAtuacao: [
      "Empresas de Prestação de Serviços", "Empresas de Consultorias e/ou de Auditorias"
    ]
  },

  "comercio": {
    slug: "comercio", foto: "img/cursos/recorte-comercio.webp", nome: "Técnico em Comércio", areaKey: "gestao", area: "Gestão e Negócios",
    descricao: "O objetivo principal do Curso Técnico em Comércio é formar profissionais capacitados para aplicar métodos de comercialização de bens e serviços, gerenciar rotinas de vendas, controlar estoques, organizar a logística e atuar de forma ética no mercado de varejo e atacado, seja em lojas físicas ou virtuais.",
    competenciasPrevias: "Não há",
    perfilProfissional: [
      "Aplicar métodos de comercialização de bens e serviços em loja física ou virtual.",
      "Efetuar controle quantitativo e qualitativo de produtos, preços e tributos.",
      "Coordenar e controlar a armazenagem em estabelecimento comercial.",
      "Elaborar planilha de custos.",
      "Identificar demanda e comunicar previsões a fornecedores.",
      "Ofertar serviços correlatos aos produtos comercializados.",
      "Operacionalizar planos de marketing e de comunicação.",
      "Executar atividades voltadas à logística, a recursos humanos e à comercialização."
    ],
    campoDeAtuacao: [
      "Comércios em Geral, físicos e/ou eletrônicos", "Empresas de Telemarketing", "Empreendedor da Área de Vendas"
    ]
  },

  "condominio": {
    slug: "condominio", foto: "img/cursos/recorte-condominio.webp", nome: "Técnico em Condomínio", areaKey: "gestao", area: "Gestão e Negócios",
    descricao: "O objetivo principal do curso Técnico em Condomínio é formar profissionais qualificados para realizar a gestão eficiente, administração e operação de condomínios residenciais e comerciais. O curso capacita o aluno a otimizar recursos, controlar rotinas financeiras, gerenciar equipes e garantir o cumprimento de normas legais e de segurança.",
    perfilProfissional: [
      "Executar atividades administrativas voltadas a recursos humanos, financeiros e de gestão de suprimentos e materiais, de acordo com convenção condominial.",
      "Supervisionar a conservação e manutenção predial.",
      "Conduzir reuniões e assembleias de condomínios.",
      "Elaborar atas e relatórios de prestação de contas.",
      "Promover a integração dos condôminos."
    ],
    campoDeAtuacao: [
      "Empresas Administradoras de Condomínio", "Condomínios com Administração Própria"
    ]
  },

  "vendas": {
    slug: "vendas", foto: "img/cursos/recorte-vendas.webp", nome: "Técnico em Vendas", areaKey: "gestao", area: "Gestão e Negócios",
    descricao: "O objetivo principal do Curso Técnico em Vendas é preparar e qualificar pessoas para planejar, executar e controlar ações comerciais, desenvolver estratégias de marketing, negociar com ética e gerenciar o relacionamento com clientes, garantindo alta empregabilidade no comércio, na indústria ou no próprio negócio.",
    perfilProfissional: [
      "Identificar produtos e serviços da empresa e canais de venda adequados às respectivas especificidades.",
      "Caracterizar os perfis de clientes.",
      "Coletar informações sobre a concorrência e o mercado em geral.",
      "Planejar e promover a venda de produtos e serviços.",
      "Organizar o ambiente de venda.",
      "Fidelizar clientes promovendo serviços de apoio e atendimento pós-venda.",
      "Organizar e gerenciar arquivos com informações de clientes.",
      "Realizar prospecção de novos clientes."
    ],
    campoDeAtuacao: [
      "Indústrias e/ou Comércios em Geral", "Comércio Físico e/ou Eletrônico", "Empresas de Telemarketing",
      "Empreendedor da Área de Vendas"
    ]
  },

  "transacoes-imobiliarias": {
    slug: "transacoes-imobiliarias", foto: "img/cursos/recorte-transacoes-imobiliarias.webp", nome: "Técnico em Transações Imobiliárias", areaKey: "gestao", area: "Gestão e Negócios",
    descricao: "O objetivo principal do Curso Técnico em Transações Imobiliárias (TTI) é formar profissionais capacitados para planejar, operar e executar a intermediação na compra, venda, locação, permuta e administração de bens imóveis.",
    perfilProfissional: [
      "Executar atividades de intermediação na compra, venda, permuta e locação de imóveis, sejam terrenos ou edificações.",
      "Realizar captação, vistoria e demonstração de imóveis.",
      "Prestar assessoria na identificação de oportunidades de negócios, no processo de transferências, estruturações e registros imobiliários.",
      "Orientar quanto ao financiamento imobiliário.",
      "Avaliar imóveis para determinar valor de mercado."
    ],
    campoDeAtuacao: [
      "Empresas do setor imobiliário (construção civil, urbanizadoras, loteadoras e incorporadoras)",
      "Agências financeiras", "Empresas prestadoras de serviços imobiliários", "Bancos"
    ]
  },

  "logistica": {
    slug: "logistica", foto: "img/cursos/recorte-logistica.webp", nome: "Técnico em Logística", areaKey: "gestao", area: "Gestão e Negócios",
    descricao: "O principal objetivo do Curso Técnico em Logística é capacitar profissionais para planejar, organizar, executar e controlar os fluxos de materiais, serviços e informações ao longo da cadeia de suprimentos.",
    perfilProfissional: [
      "Auxiliar no planejamento, operacionalização e controle da cadeia produtiva e seu fluxo logístico.",
      "Executar procedimentos relacionados a suprimentos, produção, recebimento, armazenagem e distribuição de produtos, fazendo uso das tecnologias de informação e comunicação.",
      "Identificar agentes da cadeia de suprimentos.",
      "Elaborar relatórios operacionais para tomada de decisões."
    ],
    campoDeAtuacao: [
      "Indústrias e/ou Comércios em Geral", "Transportadoras", "Centros de Distribuição", "Armazéns Gerais"
    ]
  },

  /* ─── TECNOLOGIA ────────────────────────────────────────── */

  "desenvolvimento-de-sistemas": {
    slug: "desenvolvimento-de-sistemas", foto: "img/cursos/recorte-desenvolvimento-de-sistemas.webp", nome: "Técnico em Desenvolvimento de Sistemas", areaKey: "tecnologia", area: "Tecnologia",
    descricao: "O objetivo principal do Curso Técnico em Desenvolvimento de Sistemas é capacitar profissionais de nível médio para planejar, criar, testar, implantar e manter softwares, sites e aplicativos. O curso prepara o aluno de forma prática para resolver problemas reais e otimizar processos em empresas de vários setores.",
    perfilProfissional: [
      "Desenvolver sistemas computacionais utilizando ambiente de desenvolvimento.",
      "Dimensionar requisitos e funcionalidades do sistema.",
      "Realizar testes funcionais de programas de computador e aplicativos.",
      "Manter registros para análise e refinamento de resultados.",
      "Executar manutenção de programas de computador e suporte técnico.",
      "Realizar modelagem de aplicações computacionais.",
      "Codificar aplicações e rotinas utilizando linguagens de programação específicas.",
      "Executar alterações e manutenções em aplicações e rotinas de acordo com as definições estabelecidas.",
      "Prestar apoio técnico na elaboração da documentação de sistemas.",
      "Realizar prospecções, testes e avaliações de ferramentas e produtos de desenvolvimento de sistemas."
    ],
    campoDeAtuacao: [
      "Empresas de desenvolvimento de sistemas",
      "Departamentos de desenvolvimento de sistemas em organizações governamentais e não governamentais",
      "Empresas de consultoria em sistemas", "Empresas de soluções em análise de dados", "Profissional autônomo"
    ]
  },

  "computacao-grafica": {
    slug: "computacao-grafica", foto: "img/cursos/recorte-computacao-grafica.webp", nome: "Técnico em Computação Gráfica", areaKey: "tecnologia", area: "Tecnologia",
    descricao: "O objetivo principal do Curso Técnico em Computação Gráfica é capacitar profissionais para criar, editar e produzir conteúdos visuais, projetos 2D e 3D, animações e materiais de áudio e vídeo digital, unindo criatividade e domínio de softwares tecnológicos para atender às demandas do mercado de trabalho.",
    perfilProfissional: [
      "Elaborar e implementar projetos de programação visual e layout para mídia digital e/ou impressa.",
      "Realizar a modelagem e edição de imagens, áudios e vídeos.",
      "Estruturar aplicações web e multimídia.",
      "Aplicar técnicas de desenho e pintura digital.",
      "Realizar a programação de objetos gráficos 2D e 3D.",
      "Realizar tratamento de imagens estáticas e em movimento que compõem estruturas de navegação em mídias digitais.",
      "Executar desenho técnico para elaboração de projetos, plantas e maquetes digitais."
    ],
    campoDeAtuacao: [
      "Agências de publicidade e propaganda", "Canais de YouTube", "Emissoras de TV e estúdios de design",
      "Produtoras e estúdios de animação", "Escritórios de arquitetura e engenharia",
      "Departamentos de comunicação e marketing de empresas", "Marketing de influência",
      "Editoras de jornais, livros e revistas digitais", "Portais e websites",
      "Empresas de pós-produção de audiovisual", "Produtoras e estúdios de cinema e TV",
      "Empresas de comunicação e propaganda"
    ]
  },

  /* Estavam no site como "em breve" e não constam no documento — confirmar com o Samuel */
  "informatica":           { slug: "informatica", foto: "img/cursos/recorte-informatica.webp",           nome: "Técnico em Informática",           areaKey: "tecnologia", area: "Tecnologia", emBreve: true },
  "jogos-digitais":        { slug: "jogos-digitais", foto: "img/cursos/recorte-jogos-digitais.webp",        nome: "Técnico em Jogos Digitais",        areaKey: "tecnologia", area: "Tecnologia", emBreve: true },
  "redes-de-computadores": { slug: "redes-de-computadores", foto: "img/cursos/recorte-redes-de-computadores.webp", nome: "Técnico em Redes de Computadores", areaKey: "tecnologia", area: "Tecnologia", emBreve: true },

  /* ─── SEGURANÇA ─────────────────────────────────────────── */

  "seguranca-do-trabalho": {
    slug: "seguranca-do-trabalho", nome: "Técnico em Segurança do Trabalho", areaKey: "seguranca", area: "Segurança",
    unidades: ["bh", "sl", "rn"], destaque: true, foto: "img/cursos/recorte-seguranca-do-trabalho.webp",
    descricao: "O objetivo principal do Curso Técnico em Segurança do Trabalho é formar profissionais capazes de atuar na prevenção de acidentes e doenças ocupacionais, promovendo a saúde e a qualidade de vida dos trabalhadores em diferentes ambientes de trabalho. Isso envolve a identificação e avaliação de riscos, a implementação de medidas preventivas, a conscientização dos trabalhadores sobre os riscos e a utilização de equipamentos de proteção individual (EPIs).",
    perfilProfissional: [
      "Elaborar e implementar políticas de saúde no trabalho, identificando variáveis de controle e ações educativas para prevenção e manutenção da qualidade de vida do trabalhador.",
      "Desenvolver ações educativas na área de saúde e segurança do trabalho.",
      "Investigar, analisar e recomendar medidas de prevenção e controle de acidentes.",
      "Realizar estudo da relação entre ocupações dos espaços físicos com as condições necessárias.",
      "Promover a saúde e proteger a integridade do trabalhador em seu local de atuação.",
      "Analisar os métodos e os processos laborais.",
      "Identificar fatores de risco de acidentes do trabalho, de doenças profissionais e de trabalho e de presença de agentes ambientais agressivos ao trabalhador.",
      "Realizar procedimentos de orientação sobre medidas de eliminação e neutralização de riscos.",
      "Elaborar procedimentos de acordo com a natureza da empresa.",
      "Promover programas, eventos e capacitações de prevenção de riscos ambientais.",
      "Divulgar normas e procedimentos de segurança e higiene ocupacional.",
      "Indicar, solicitar e inspecionar equipamentos de proteção coletiva e individual contra incêndio.",
      "Levantar e utilizar dados estatísticos de doenças e acidentes de trabalho para ajustes das ações prevencionistas.",
      "Produzir relatórios referentes à segurança e à saúde do trabalhador."
    ],
    campoDeAtuacao: [
      "Organizações privadas e públicas dos mais diversos ramos de atividades", "Indústrias", "Hospitais",
      "Comércios", "Construção civil", "Portos", "Aeroportos", "Centrais de logística", "Instituições de ensino",
      "Unidades de fabricação e representação de equipamentos de segurança",
      "Empresas e consultorias para capacitações em segurança do trabalho"
    ]
  }
};
