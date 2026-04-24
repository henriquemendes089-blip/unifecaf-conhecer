// Dados dos cursos — UniFECAF Conhecer
// Atualizado em 2026
const cursosData = {

  /* ═══════════════════════════════════════
     EAD — CIÊNCIAS SOCIAIS
  ═══════════════════════════════════════ */
  "gestao-publica-ead": {
    slug: "gestao-publica", modalidade: "EAD", nome: "Gestão Pública",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Ciências Sociais",
    descricao: "O curso de Gestão Pública forma profissionais capacitados para atuar na administração de órgãos e instituições públicas, com foco em eficiência, transparência e impacto social. Ao longo da formação, o estudante aprende a planejar políticas, gerenciar orçamentos e coordenar projetos que afetam diretamente a vida da população.\n\nA grade curricular abrange direito administrativo, gestão orçamentária, políticas públicas, análise de dados e ética no serviço público. O profissional desenvolvido no curso é capaz de tomar decisões embasadas, otimizar recursos e contribuir para uma gestão mais moderna e responsável.",
    perfilProfissional: "Ideal para quem tem interesse em política, administração e no funcionamento do setor público. O curso atrai perfis analíticos, com senso de responsabilidade social e vontade de contribuir para a melhoria dos serviços prestados à população. Não é necessário ter experiência prévia na área pública.",
    mercadoDeTrabalho: "O setor público brasileiro emprega milhões de profissionais em níveis municipal, estadual e federal. Gestores públicos atuam em secretarias, autarquias, fundações públicas, empresas estatais e ONGs que executam políticas governamentais. A área também abre portas para concursos públicos de nível superior.",
    areaDeAtuacao: ["Planejamento estratégico governamental", "Gestão orçamentária e finanças públicas", "Elaboração e monitoramento de políticas públicas", "Relações governamentais e institucionais", "Programas sociais e desenvolvimento local"]
  },

  "gestao-de-seguranca-privada-ead": {
    slug: "gestao-de-seguranca-privada", modalidade: "EAD", nome: "Gestão de Segurança Privada",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Ciências Sociais",
    descricao: "O curso de Gestão de Segurança Privada prepara profissionais para liderar operações de proteção patrimonial e pessoal, com visão tática, capacidade de análise de riscos e habilidade para coordenar equipes em ambientes que demandam controle e planejamento cuidadoso.\n\nA formação abrange segurança eletrônica, legislação aplicada ao setor, gestão de crises, análise de vulnerabilidades e compliance em segurança privada. O egresso está apto a estruturar planos de proteção, gerenciar contingências e garantir a integridade de pessoas e patrimônio.",
    perfilProfissional: "Voltado para quem tem perfil analítico e interesse em estratégia, gestão de riscos e coordenação operacional. Profissionais que já atuam no setor de segurança e desejam avançar para funções gerenciais encontram no curso o embasamento teórico e técnico necessário.",
    mercadoDeTrabalho: "O mercado de segurança privada no Brasil é um dos maiores do mundo, com crescimento contínuo. Gestores atuam em empresas de vigilância, condomínios, shoppings, eventos, indústrias e no segmento de segurança eletrônica. A regulamentação cada vez mais exigente amplia a valorização de profissionais com formação superior.",
    areaDeAtuacao: ["Planejamento e segurança patrimonial", "Análise e gestão de riscos", "Coordenação de equipes de segurança", "Compliance e legislação no setor privado", "Monitoramento e sistemas eletrônicos de segurança"]
  },

  "gestao-de-seguranca-publica-ead": {
    slug: "gestao-de-seguranca-publica", modalidade: "EAD", nome: "Gestão de Segurança Pública",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Ciências Sociais",
    descricao: "O curso de Gestão de Segurança Pública forma profissionais para enfrentar os desafios contemporâneos da segurança por meio de estratégia, inteligência institucional e responsabilidade social. A formação capacita para elaborar políticas, coordenar ações integradas e estruturar respostas eficazes a situações de crise.\n\nAs disciplinas abrangem criminologia, gestão de crises, direito penal e processual, análise de dados e coordenação interinstitucional. O profissional formado está preparado para atuar em diferentes instâncias do sistema de segurança pública de forma técnica e orientada por dados.",
    perfilProfissional: "Indicado para quem deseja contribuir para a melhoria das estruturas de segurança pública e tem interesse em direito, criminologia e gestão estratégica. Profissionais das forças de segurança que buscam capacitação gerencial encontram no curso uma formação complementar de alto valor.",
    mercadoDeTrabalho: "Profissionais dessa área atuam em secretarias de segurança, órgãos policiais, sistemas prisionais, defesa civil e consultorias especializadas em segurança urbana. O crescimento da demanda por gestão profissionalizada no setor público de segurança abre oportunidades em todo o território nacional.",
    areaDeAtuacao: ["Desenvolvimento de políticas públicas de segurança", "Planejamento estratégico institucional", "Gestão de recursos e projetos de segurança", "Monitoramento e avaliação de programas", "Coordenação interinstitucional e inteligência"]
  },

  "servico-social-ead": {
    slug: "servico-social", modalidade: "EAD", nome: "Serviço Social",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Ciências Sociais",
    descricao: "O curso de Serviço Social forma assistentes sociais comprometidos com a defesa de direitos, a promoção da cidadania e a redução das desigualdades sociais. A formação une teoria crítica e prática profissional para capacitar o estudante a intervir em situações de vulnerabilidade e exclusão.\n\nO currículo abrange política social, ética profissional, psicologia social, legislação social, metodologias de intervenção e pesquisa em serviço social. O assistente social formado é capaz de atuar em contextos complexos, articulando redes de proteção e desenvolvendo projetos que transformam realidades.",
    perfilProfissional: "Voltado para quem tem sensibilidade humana, compromisso com a justiça social e interesse em contribuir para a transformação de realidades vulneráveis. O perfil inclui profissionais com vocação para escuta ativa, mediação de conflitos e articulação de políticas de proteção social.",
    mercadoDeTrabalho: "O assistente social atua em hospitais, escolas, CRAS, CREAS, empresas, prefeituras, ONGs, tribunais e no sistema sociojurídico. Com a ampliação das políticas sociais e a crescente valorização da profissão, as oportunidades se estendem pelo setor público e privado em todo o Brasil.",
    areaDeAtuacao: ["Assistência social e proteção de vulneráveis", "Políticas públicas e programas sociais", "Saúde pública e hospitalar", "Educação e projetos socioculturais", "ONGs, terceiro setor e empresas"]
  },

  "design-grafico-ead": {
    slug: "design-grafico", modalidade: "EAD", nome: "Design Gráfico",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Ciências Sociais",
    descricao: "O curso de Design Gráfico forma profissionais criativos para desenvolver identidades visuais, peças digitais, projetos editoriais e interfaces que comunicam com eficiência e estética. Desde o início, o estudante desenvolve portfólio com projetos práticos e aprende os principais softwares do mercado.\n\nA formação abrange teoria das cores, tipografia, branding, design editorial, design digital, produção gráfica e ferramentas como Photoshop, Illustrator e InDesign. O designer formado sai apto a trabalhar em agências, empresas ou de forma independente.",
    perfilProfissional: "Ideal para quem tem sensibilidade visual, gosta de comunicar ideias por meio de imagem e cor e deseja construir uma carreira criativa com alta demanda no mercado. Não é necessário experiência prévia — a formação é construída do zero.",
    mercadoDeTrabalho: "O crescimento do marketing digital ampliou exponencialmente a demanda por designers. Oportunidades existem em agências de publicidade, departamentos de marketing, estúdios criativos, empresas de tecnologia e como freelancer. O profissional pode atuar localmente ou remotamente para clientes do mundo todo.",
    areaDeAtuacao: ["Branding e identidade visual", "Direção de arte e projetos criativos", "Design digital e mídias sociais", "Projetos gráficos e editoriais", "UX e UI Design"]
  },

  "marketing-ead": {
    slug: "marketing", modalidade: "EAD", nome: "Marketing",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Ciências Sociais",
    descricao: "O curso de Marketing forma profissionais para entender o comportamento do consumidor, construir estratégias de comunicação e posicionar marcas de forma relevante no mercado. A formação combina visão criativa com análise de dados para gerar resultados concretos nas organizações.\n\nO currículo inclui pesquisa de mercado, branding, publicidade, marketing digital, análise de comportamento do consumidor e planejamento de campanhas. O profissional de marketing está preparado para atuar tanto em ambientes tradicionais quanto no ecossistema digital.",
    perfilProfissional: "Indicado para quem se interessa por comportamento humano, comunicação e tendências de mercado. O curso atrai perfis criativos e analíticos que gostam de trabalhar em ambientes dinâmicos, conectando marcas a pessoas com estratégia e criatividade.",
    mercadoDeTrabalho: "Profissionais de marketing são requisitados em empresas de todos os portes, agências de publicidade, consultorias, startups e organizações do terceiro setor. A expansão do marketing digital criou uma demanda crescente que vai de analistas a gerentes e diretores de marketing.",
    areaDeAtuacao: ["Gestão e estratégia de marcas", "Pesquisa e inteligência de mercado", "Marketing digital e redes sociais", "Planejamento e criação de campanhas", "Consultoria em comunicação e marketing"]
  },

  /* ═══════════════════════════════════════
     EAD — EDUCAÇÃO
  ═══════════════════════════════════════ */
  "fisica-ead": {
    slug: "fisica", modalidade: "EAD", nome: "Física",
    duracao: "4 Anos", tipoGrau: "Licenciatura", area: "Educação",
    descricao: "A Licenciatura em Física forma professores habilitados para ensinar a disciplina na educação básica, desenvolvendo no estudante tanto o domínio dos conteúdos científicos quanto as competências pedagógicas necessárias para uma prática docente de qualidade.\n\nO curso abrange mecânica clássica, termodinâmica, eletromagnetismo, óptica, física moderna e metodologias de ensino de ciências. O licenciado em Física é capaz de tornar a ciência acessível e inspiradora para jovens estudantes, contribuindo para a formação científica da sociedade.",
    perfilProfissional: "Voltado para quem tem afinidade com ciências exatas e interesse em compartilhar conhecimento, inspirar estudantes e contribuir para a educação científica do país. O curso forma docentes comprometidos com o pensamento crítico e a curiosidade científica.",
    mercadoDeTrabalho: "Professores de Física atuam em escolas públicas e privadas da educação básica, cursos técnicos, pré-vestibulares e plataformas de ensino online. Há também oportunidades em pesquisa, extensão e projetos de divulgação científica. A carreira docente oferece estabilidade e plano de cargos em instituições públicas.",
    areaDeAtuacao: ["Docência no ensino médio e técnico", "Educação científica e divulgação", "Pesquisa em ensino de física", "Plataformas e ensino online", "Tutoria e reforço escolar"]
  },

  "matematica-ead": {
    slug: "matematica", modalidade: "EAD", nome: "Matemática",
    duracao: "4 Anos", tipoGrau: "Licenciatura", area: "Educação",
    descricao: "A Licenciatura em Matemática forma professores para ensinar a disciplina na educação básica com competência científica e sensibilidade pedagógica. O curso desenvolve raciocínio lógico, abstração e capacidade de transformar conceitos complexos em aprendizagens significativas.\n\nA grade curricular inclui cálculo diferencial e integral, álgebra linear, geometria analítica, estatística, probabilidade e didática da matemática. O profissional licenciado está preparado para tornar a matemática compreensível e relevante para alunos em diferentes fases escolares.",
    perfilProfissional: "Indicado para quem tem facilidade com raciocínio lógico e deseja transmitir esse conhecimento de forma clara e eficaz. O licenciado em Matemática tem perfil analítico, paciente e vocacionado para o ensino, com interesse genuíno no desenvolvimento dos alunos.",
    mercadoDeTrabalho: "A demanda por professores de Matemática é constante e supera a oferta de profissionais qualificados em muitas regiões do Brasil. Atuação em escolas públicas e privadas, cursinhos, plataformas digitais de educação e concursos públicos para o magistério são as principais saídas da carreira.",
    areaDeAtuacao: ["Docência no ensino fundamental e médio", "Educação especial e inclusiva", "Reforço escolar e tutoria", "Ensino técnico e profissionalizante", "Pesquisa em educação matemática"]
  },

  "pedagogia-ead": {
    slug: "pedagogia", modalidade: "EAD", nome: "Pedagogia",
    duracao: "4 Anos", tipoGrau: "Licenciatura", area: "Educação",
    descricao: "O curso de Pedagogia forma educadores para atuar desde a educação infantil até a gestão escolar, integrando fundamentos teóricos da educação a práticas pedagógicas contemporâneas. O pedagogo compreende o desenvolvimento humano em suas múltiplas dimensões e sabe como promover aprendizagens significativas.\n\nA formação abrange psicologia da educação, didática, alfabetização, gestão escolar, legislação educacional e práticas de ensino. O egresso está apto a coordenar processos educativos em diferentes contextos, dentro e fora da escola.",
    perfilProfissional: "Adequado para quem tem sensibilidade para lidar com crianças e famílias, gosta de planejar, orientar e acompanhar processos de desenvolvimento. Quem se vê contribuindo para a formação de novas gerações encontra na Pedagogia uma carreira de alto impacto social.",
    mercadoDeTrabalho: "Pedagogos atuam em escolas de educação infantil, ensino fundamental, EJA, coordenação pedagógica, gestão escolar, empresas e projetos sociais. A carreira oferece oportunidades em todo o Brasil, com estabilidade no setor público por meio de concursos do magistério.",
    areaDeAtuacao: ["Docência na educação infantil e anos iniciais", "Coordenação e orientação pedagógica", "Gestão e direção escolar", "Educação de Jovens e Adultos (EJA)", "Pedagogia empresarial e corporativa"]
  },

  /* ═══════════════════════════════════════
     EAD — ENGENHARIA
  ═══════════════════════════════════════ */
  "engenharia-civil-ead": {
    slug: "engenharia-civil", modalidade: "EAD", nome: "Engenharia Civil",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Engenharia",
    descricao: "O curso de Engenharia Civil forma profissionais para projetar, gerenciar e executar obras de edificações, infraestrutura urbana e saneamento. A formação une conhecimentos de resistência dos materiais, topografia, hidráulica, estruturas e gestão de obras em uma visão técnica e sistêmica da construção.\n\nO engenheiro civil está preparado para atuar desde a concepção do projeto até a entrega da obra, gerenciando equipes, recursos e prazos com excelência técnica. A sustentabilidade e o uso de tecnologias BIM também fazem parte do perfil do profissional contemporâneo.",
    perfilProfissional: "Voltado para quem tem interesse em construções, infraestrutura e transformação de projetos em estruturas físicas concretas. O perfil inclui raciocínio lógico, afinidade com matemática e física, e capacidade de trabalhar em equipes multidisciplinares.",
    mercadoDeTrabalho: "O mercado de Engenharia Civil é amplo e permanente, abrangendo construtoras, escritórios de projeto, prefeituras, órgãos públicos e empresas de infraestrutura. Com a crescente urbanização e necessidade de obras públicas, a demanda por engenheiros qualificados é constante.",
    areaDeAtuacao: ["Projetos estruturais e construção civil", "Gerenciamento e fiscalização de obras", "Geotecnia e fundações", "Infraestrutura viária e saneamento", "Sustentabilidade e tecnologia BIM"]
  },

  "engenharia-eletrica-ead": {
    slug: "engenharia-eletrica", modalidade: "EAD", nome: "Engenharia Elétrica",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Engenharia",
    descricao: "O curso de Engenharia Elétrica capacita profissionais para projetar, desenvolver e gerenciar sistemas que produzem, distribuem e controlam energia elétrica em ambientes industriais, comerciais e urbanos. A formação abrange circuitos elétricos, máquinas, automação, eletrônica de potência e energias renováveis.\n\nO engenheiro elétrico atua em projetos de instalações, automação industrial, sistemas de geração fotovoltaica, manutenção de plantas industriais e desenvolvimento de equipamentos eletrônicos. É uma das engenharias com maior versatilidade e demanda no mercado.",
    perfilProfissional: "Indicado para quem tem interesse em energia, sistemas tecnológicos e automação, com afinidade por análise técnica e resolução de problemas complexos. O perfil inclui raciocínio lógico forte, gosto por matemática e física e interesse em inovação tecnológica.",
    mercadoDeTrabalho: "O setor elétrico brasileiro demanda continuamente engenheiros para atuação em concessionárias, indústrias, consultoras de projetos, empresas de automação e no crescente mercado de energia solar e eólica. A transição energética abre novas frentes de trabalho para o profissional qualificado.",
    areaDeAtuacao: ["Projetos e instalações elétricas", "Automação e controle industrial", "Geração e gestão de energias renováveis", "Manutenção eletroeletrônica", "Desenvolvimento de sistemas e equipamentos"]
  },

  "engenharia-de-computacao-ead": {
    slug: "engenharia-de-computacao", modalidade: "EAD", nome: "Engenharia de Computação",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Engenharia",
    descricao: "O curso de Engenharia de Computação une fundamentos de hardware e software para formar engenheiros capazes de projetar sistemas computacionais, redes, dispositivos embarcados e soluções integradas que combinam eletrônica e programação.\n\nA formação contempla arquitetura de computadores, sistemas operacionais, redes de comunicação, desenvolvimento de software, inteligência artificial e sistemas embarcados. O engenheiro de computação é um profissional versátil, capaz de atuar tanto no nível de hardware quanto no desenvolvimento de sistemas complexos.",
    perfilProfissional: "Para quem tem interesse tanto em tecnologia de software quanto em hardware e eletrônica. O perfil ideal combina raciocínio lógico, curiosidade tecnológica e vontade de criar sistemas que integram diferentes camadas da computação moderna.",
    mercadoDeTrabalho: "Engenheiros de computação são altamente valorizados em empresas de tecnologia, telecomunicações, indústria de semicondutores, automação, defesa e pesquisa. A interseção entre hardware e software é cada vez mais essencial em produtos conectados e sistemas de IoT.",
    areaDeAtuacao: ["Sistemas embarcados e IoT", "Redes e telecomunicações", "Inteligência artificial e machine learning", "Segurança de sistemas", "Arquitetura e projeto de hardware"]
  },

  "engenharia-de-producao-ead": {
    slug: "engenharia-de-producao", modalidade: "EAD", nome: "Engenharia de Produção",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Engenharia",
    descricao: "A Engenharia de Produção integra conhecimentos de engenharia, gestão e economia para otimizar sistemas produtivos em indústrias, empresas de serviços e organizações de saúde. O engenheiro de produção é o profissional que enxerga oportunidades de melhoria em cada processo e transforma dados em decisões estratégicas.\n\nA formação abrange gestão de operações, planejamento e controle da produção, logística, qualidade, segurança do trabalho, pesquisa operacional e sustentabilidade. A versatilidade da engenharia de produção permite atuação nos mais variados setores da economia.",
    perfilProfissional: "Indicado para quem tem interesse em processos, organização e busca constante por eficiência. O perfil combina pensamento analítico, capacidade de liderança e interesse em melhorias contínuas em ambientes industriais e corporativos.",
    mercadoDeTrabalho: "O engenheiro de produção é um dos profissionais mais versáteis do mercado, atuando em indústrias, hospitais, bancos, logística, consultorias e startups. A área oferece ótima remuneração e rápido crescimento de carreira para quem busca posições gerenciais e estratégicas.",
    areaDeAtuacao: ["Otimização de processos produtivos", "Planejamento e controle da produção", "Logística e cadeia de suprimentos", "Qualidade e segurança no trabalho", "Gestão de projetos e operações"]
  },

  /* ═══════════════════════════════════════
     EAD — GESTÃO DE NEGÓCIOS
  ═══════════════════════════════════════ */
  "administracao-ead": {
    slug: "administracao", modalidade: "EAD", nome: "Administração",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Gestão de Negócios",
    descricao: "A graduação em Administração é uma das formações mais versáteis do mercado, preparando profissionais para gerenciar negócios, liderar equipes e tomar decisões estratégicas em qualquer tipo de organização. O administrador é peça fundamental tanto em grandes corporações quanto em pequenas empresas e empreendimentos próprios.\n\nO curso abrange finanças corporativas, marketing, logística, gestão de pessoas, direito empresarial, planejamento estratégico e análise de dados. A formação EAD permite que o aluno desenvolva autonomia e disciplina — competências cada vez mais valorizadas no mercado de trabalho.",
    perfilProfissional: "Voltado para quem tem perfil analítico e interesse em liderança, planejamento e gestão de negócios. O curso atrai quem gosta de resolver problemas, trabalhar com pessoas e busca alta empregabilidade em diferentes setores da economia, incluindo o empreendedorismo.",
    mercadoDeTrabalho: "O administrador pode atuar em empresas privadas, órgãos públicos, organizações do terceiro setor e como empreendedor. A versatilidade da carreira é um dos maiores atrativos, com oportunidades em finanças, marketing, RH, operações e gestão geral.",
    areaDeAtuacao: ["Gestão estratégica de empresas", "Empreendedorismo e consultoria", "Finanças e controladoria", "Logística e operações", "Marketing e desenvolvimento comercial"]
  },

  "ciencias-contabeis-ead": {
    slug: "ciencias-contabeis", modalidade: "EAD", nome: "Ciências Contábeis",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Gestão de Negócios",
    descricao: "O curso de Ciências Contábeis forma profissionais para interpretar informações financeiras e atuar de forma estratégica no planejamento tributário, na gestão de custos e na saúde econômica das organizações. Muito além dos lançamentos contábeis, o contador moderno é um parceiro estratégico dos gestores.\n\nA formação abrange contabilidade geral, matemática financeira, legislação tributária, auditoria, finanças corporativas, perícia contábil e controladoria. O bacharel em Ciências Contábeis está habilitado para o exame do CRC e para atuar em consultoria e auditoria.",
    perfilProfissional: "Ideal para quem tem facilidade com números, organização e interesse por finanças, planejamento tributário e auditoria. O perfil combina atenção aos detalhes, pensamento analítico e compromisso com a ética e a precisão das informações.",
    mercadoDeTrabalho: "Contadores são indispensáveis em qualquer organização, seja ela pública ou privada. As oportunidades vão de escritórios de contabilidade e consultorias a grandes corporações, bancos e órgãos governamentais. O mercado mantém demanda constante por profissionais qualificados e éticos.",
    areaDeAtuacao: ["Contabilidade empresarial e societária", "Auditoria interna e externa", "Consultoria fiscal e tributária", "Controladoria e planejamento financeiro", "Perícia contábil e judicial"]
  },

  "gestao-comercial-ead": {
    slug: "gestao-comercial", modalidade: "EAD", nome: "Gestão Comercial",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Gestão de Negócios",
    descricao: "O curso de Gestão Comercial forma profissionais para planejar e executar estratégias de vendas, liderar equipes comerciais e expandir resultados em mercados competitivos. A formação combina técnicas de negociação, inteligência de mercado e liderança com foco em resultados.\n\nO currículo abrange planejamento de vendas, marketing digital, comportamento do consumidor, gestão de equipes, análise de dados comerciais e estratégias de expansão. O profissional formado conecta a oferta de produtos e serviços às necessidades dos clientes com eficiência e estratégia.",
    perfilProfissional: "Para quem se interessa por vendas, negociação e estratégias comerciais. O perfil inclui comunicação assertiva, facilidade para lidar com pessoas e interesse em resultados mensuráveis. É uma excelente escolha para quem atua em vendas e deseja crescer para funções gerenciais.",
    mercadoDeTrabalho: "Gestores comerciais atuam em empresas de todos os setores, com destaque para varejo, serviços, tecnologia e indústria. A carreira oferece crescimento rápido para profissionais orientados a resultados, com possibilidade de progressão até gerência e direção comercial.",
    areaDeAtuacao: ["Planejamento e estratégia comercial", "Gestão de equipes de vendas", "Inteligência e análise de mercado", "Representação e expansão comercial", "Consultoria em vendas e negócios"]
  },

  "gestao-financeira-ead": {
    slug: "gestao-financeira", modalidade: "EAD", nome: "Gestão Financeira",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Gestão de Negócios",
    descricao: "O curso de Gestão Financeira forma profissionais para planejar, controlar e analisar recursos financeiros com visão estratégica, contribuindo para o crescimento e a sustentabilidade das organizações. A formação vai além do controle de caixa — prepara para decisões que impactam a saúde financeira do negócio.\n\nAs disciplinas incluem matemática financeira, análise de demonstrações contábeis, gestão de custos, mercado financeiro, planejamento orçamentário e avaliação de investimentos. O gestor financeiro é um parceiro essencial na tomada de decisões corporativas.",
    perfilProfissional: "Indicado para quem tem afinidade com números, planejamento e interesse por finanças corporativas, investimentos e gestão de recursos. Profissionais que já atuam em áreas administrativas e desejam se especializar em finanças encontram no curso a progressão ideal.",
    mercadoDeTrabalho: "Gestores financeiros atuam em empresas de todos os portes, bancos, consultorias, cooperativas de crédito e escritórios de contabilidade. A área de finanças é uma das mais valorizadas no mercado, com remuneração competitiva e boas perspectivas de crescimento.",
    areaDeAtuacao: ["Planejamento e controle financeiro", "Análise de custos e orçamento", "Gestão de investimentos e carteiras", "Controladoria e auditoria interna", "Consultoria financeira empresarial"]
  },

  "gestao-de-recursos-humanos-ead": {
    slug: "gestao-de-recursos-humanos", modalidade: "EAD", nome: "Gestão de Recursos Humanos",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Gestão de Negócios",
    descricao: "O curso de Gestão de Recursos Humanos forma profissionais para atrair, desenvolver e reter talentos, atuando de forma estratégica na construção de culturas organizacionais saudáveis e produtivas. O RH moderno vai muito além do operacional — é uma área que transforma o capital humano em vantagem competitiva.\n\nO currículo abrange recrutamento e seleção, treinamento e desenvolvimento, gestão de desempenho, remuneração e benefícios, legislação trabalhista e comportamento organizacional. O profissional formado é capaz de implementar políticas de RH alinhadas aos objetivos estratégicos da empresa.",
    perfilProfissional: "Para quem tem facilidade para lidar com pessoas e interesse em desenvolvimento humano, liderança e cultura organizacional. O perfil inclui empatia, comunicação e visão estratégica de como as pessoas contribuem para os resultados das organizações.",
    mercadoDeTrabalho: "Profissionais de RH são demandados em empresas de todos os setores e portes. A digitalização dos processos amplia a necessidade de gestores que usem dados e tecnologia para decisões estratégicas. A área oferece desde posições operacionais até funções de Business Partner e Direção de Pessoas.",
    areaDeAtuacao: ["Recrutamento, seleção e employer branding", "Treinamento e desenvolvimento de pessoas", "Gestão de desempenho e clima organizacional", "Departamento pessoal e legislação trabalhista", "Consultoria e Business Partner de RH"]
  },

  "logistica-ead": {
    slug: "logistica", modalidade: "EAD", nome: "Logística",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Gestão de Negócios",
    descricao: "O curso de Logística forma especialistas em otimização de cadeias de suprimento, gestão de estoques, planejamento de transportes e operações de distribuição. O profissional de logística garante que os produtos cheguem ao destino certo, no prazo e com eficiência máxima.\n\nA formação inclui transporte e armazenagem, planejamento logístico, gestão de estoques, logística internacional, tecnologia aplicada à cadeia de suprimentos e operações em e-commerce. A área combina raciocínio analítico com visão operacional.",
    perfilProfissional: "Indicado para quem é organizado, gosta de planejar e resolver problemas operacionais com eficiência. O perfil inclui atenção aos detalhes, raciocínio analítico e interesse em processos, fluxos e otimização de operações.",
    mercadoDeTrabalho: "A logística é o coração das operações de qualquer empresa que movimenta produtos. Com o boom do e-commerce e a globalização das cadeias de suprimentos, a área está em expansão constante. Oportunidades existem em distribuidoras, indústrias, varejistas, operadores logísticos e empresas de transporte.",
    areaDeAtuacao: ["Gestão de estoques e armazenagem", "Planejamento e controle de transporte", "Supply chain e cadeia de suprimentos", "Operações de e-commerce e marketplace", "Logística internacional e comércio exterior"]
  },

  "marketing-digital-ead": {
    slug: "marketing-digital", modalidade: "EAD", nome: "Marketing Digital",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Gestão de Negócios",
    descricao: "O curso de Marketing Digital forma profissionais para criar e executar estratégias no ambiente online, gerenciando presença em redes sociais, campanhas de mídia paga, SEO, produção de conteúdo e análise de dados de performance. É uma das áreas com maior crescimento de demanda no mercado atual.\n\nA grade curricular contempla marketing de conteúdo, tráfego pago (Google Ads, Meta Ads), SEO, e-mail marketing, analytics, automação de marketing e estratégias de conversão. O profissional formado é capaz de construir e escalar a presença digital de marcas e negócios.",
    perfilProfissional: "Para quem gosta de comunicação, redes sociais e ambientes criativos e dinâmicos. O perfil combina criatividade com análise de dados — quem consegue unir essas duas habilidades tem grande vantagem competitiva no mercado digital.",
    mercadoDeTrabalho: "A demanda por especialistas em marketing digital supera a oferta de profissionais qualificados. Oportunidades existem em agências digitais, empresas de todos os segmentos, startups e como prestador de serviços independente. O trabalho remoto é amplamente praticado na área.",
    areaDeAtuacao: ["Gestão de redes sociais e comunidades", "Tráfego pago e performance digital", "SEO e marketing de conteúdo", "Análise de métricas e business intelligence", "Estratégia digital e growth marketing"]
  },

  "processos-gerenciais-ead": {
    slug: "processos-gerenciais", modalidade: "EAD", nome: "Processos Gerenciais",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Gestão de Negócios",
    descricao: "O curso de Processos Gerenciais desenvolve profissionais com visão sistêmica das organizações, capacitando-os para planejar, organizar e controlar processos empresariais com foco em eficiência e melhoria contínua. É uma formação gerencial sólida em tempo reduzido.\n\nO currículo abrange gestão de processos, planejamento estratégico, gestão financeira básica, liderança, análise de dados, marketing e comportamento organizacional. O profissional formado tem perfil versátil, podendo atuar em diferentes funções dentro de uma empresa.",
    perfilProfissional: "Ideal para quem busca uma formação gerencial ampla e deseja assumir funções de liderança ou empreender. O perfil combina interesse em negócios, capacidade analítica e vontade de otimizar processos e resultados organizacionais.",
    mercadoDeTrabalho: "Profissionais de processos gerenciais atuam como analistas, supervisores e gerentes em empresas dos mais variados setores. A formação abre portas tanto para quem busca o primeiro emprego quanto para quem já trabalha e deseja crescer para posições de maior responsabilidade.",
    areaDeAtuacao: ["Gestão e análise de processos organizacionais", "Planejamento estratégico e operacional", "Finanças e controladoria básica", "Gestão de pessoas e liderança", "Empreendedorismo e gestão de negócios próprios"]
  },

  /* ═══════════════════════════════════════
     EAD — ARQUITETURA
  ═══════════════════════════════════════ */
  "arquitetura-e-urbanismo-ead": {
    slug: "arquitetura-e-urbanismo", modalidade: "EAD", nome: "Arquitetura e Urbanismo",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Arquitetura",
    descricao: "O curso de Arquitetura e Urbanismo forma profissionais para criar espaços que combinam funcionalidade, estética e sustentabilidade — de residências e edifícios a intervenções urbanas de grande escala. O arquiteto une arte e técnica para transformar ideias em projetos que mudam a forma como as pessoas habitam e vivem.\n\nA formação abrange projetos arquitetônicos, urbanismo, tecnologia das construções, história da arquitetura, sustentabilidade, softwares de projeto (CAD, BIM) e gestão de obras. O bacharel está habilitado para registro no CAU e exercício pleno da profissão.",
    perfilProfissional: "Para quem tem sensibilidade criativa, interesse por espaços, cidades e pela relação entre forma e função. O arquiteto combina visão artística com rigor técnico e é capaz de gerenciar projetos da concepção à execução.",
    mercadoDeTrabalho: "Arquitetos atuam em escritórios próprios, construtoras, incorporadoras, prefeituras e empresas de interiores. O mercado brasileiro de construção civil e o crescimento das cidades sustentam a demanda por profissionais qualificados, especialmente com expertise em sustentabilidade e projetos digitais.",
    areaDeAtuacao: ["Projetos arquitetônicos residenciais e comerciais", "Arquitetura de interiores e design de ambientes", "Planejamento urbano e paisagismo", "Gestão e coordenação de obras", "Projetos sustentáveis e certificações ambientais"]
  },

  "design-de-interiores-ead": {
    slug: "design-de-interiores", modalidade: "EAD", nome: "Design de Interiores",
    duracao: "2 Anos", tipoGrau: "Tecnólogo", area: "Arquitetura",
    descricao: "O curso de Design de Interiores capacita profissionais para criar ambientes que equilibram funcionalidade, estética e identidade. O designer de interiores transforma espaços residenciais, comerciais e corporativos em experiências que melhoram a qualidade de vida das pessoas.\n\nA formação inclui desenho técnico, iluminação, ergonomia, história do design, materiais e revestimentos, sustentabilidade, softwares de modelagem 3D e projetos práticos para diferentes tipos de ambientes. O curso habilita para exercício imediato da profissão.",
    perfilProfissional: "Ideal para quem tem sensibilidade estética, atenção aos detalhes e vontade de transformar espaços em experiências únicas. O designer de interiores combina criatividade com conhecimento técnico para atender às necessidades e gostos de cada cliente.",
    mercadoDeTrabalho: "Com a valorização do bem-estar nos espaços de vida e trabalho, o mercado de design de interiores está em crescimento. Profissionais atuam de forma autônoma, em estúdios de design, construtoras, incorporadoras e lojas de móveis e decoração.",
    areaDeAtuacao: ["Projetos residenciais e comerciais", "Consultoria em decoração e ambientação", "Projetos de iluminação", "Mobiliário e marcenaria planejada", "Gestão e acompanhamento de reformas"]
  },

  /* ═══════════════════════════════════════
     EAD — SAÚDE
  ═══════════════════════════════════════ */
  "biomedicina-ead": {
    slug: "biomedicina", modalidade: "EAD", nome: "Biomedicina",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O curso de Biomedicina une ciência, tecnologia e saúde para formar profissionais dedicados ao diagnóstico laboratorial, pesquisa científica e promoção da saúde. O biomédico contribui diretamente para a prevenção e diagnóstico de doenças, atuando com precisão em análises clínicas e estudos biomédicos.\n\nA formação abrange bioquímica, microbiologia, imunologia, biologia molecular, análises clínicas, toxicologia e biotecnologia. O egresso está habilitado para registro no CFBM e para atuar em laboratórios, clínicas e centros de pesquisa.",
    perfilProfissional: "Voltado para quem se interessa por ciência, saúde e investigação de doenças. O biomédico tem perfil investigativo, gosto por laboratório e comprometimento com a precisão e responsabilidade que a área de saúde exige.",
    mercadoDeTrabalho: "O mercado de biomedicina é amplo e cresce com o avanço da medicina diagnóstica e preventiva. Biomédicos atuam em laboratórios clínicos, hospitais, clínicas de estética, empresas de biotecnologia, hemocentros e centros de pesquisa públicos e privados.",
    areaDeAtuacao: ["Análises clínicas e diagnóstico laboratorial", "Imagem diagnóstica laboratorial", "Pesquisa científica e biotecnologia", "Estética e procedimentos biomédicos", "Perícia criminal e toxicologia forense"]
  },

  "educacao-fisica-bacharelado-ead": {
    slug: "educacao-fisica-bacharelado", modalidade: "EAD", nome: "Educação Física - Bacharelado",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O Bacharelado em Educação Física forma profissionais para atuar com saúde, performance esportiva e bem-estar em academias, clubes, centros de reabilitação e empresas. O bacharel prescreve exercícios, acompanha atletas e desenvolve programas de atividade física para diferentes públicos.\n\nA formação abrange anatomia, fisiologia do exercício, biomecânica, treinamento esportivo, avaliação física, nutrição esportiva e gestão de academias. O egresso está habilitado para registro no CREF e atuação em contextos de saúde e performance.",
    perfilProfissional: "Para quem gosta de movimento, esporte e de promover saúde e qualidade de vida. O bacharel em Educação Física combina conhecimento técnico-científico com habilidade para motivar e acompanhar pessoas em suas jornadas de desenvolvimento físico.",
    mercadoDeTrabalho: "Com o crescente interesse da população pela saúde preventiva e pelo esporte, o mercado para bacharéis em Educação Física está em expansão. Oportunidades existem em academias, clubes esportivos, hotéis, empresas de bem-estar corporativo e como personal trainer.",
    areaDeAtuacao: ["Personal training e treinamento individualizado", "Treinamento esportivo e alto rendimento", "Academias, clubes e centros fitness", "Reabilitação física e grupos especiais", "Programas de bem-estar corporativo"]
  },

  "educacao-fisica-licenciatura-ead": {
    slug: "educacao-fisica-licenciatura", modalidade: "EAD", nome: "Educação Física - Licenciatura",
    duracao: "4 Anos", tipoGrau: "Licenciatura", area: "Saúde",
    descricao: "A Licenciatura em Educação Física forma professores para atuar na educação básica, desenvolvendo alunos de maneira integral por meio do movimento, do esporte e da cultura corporal. O professor de Educação Física vai além das aulas de esporte — promove saúde, inclusão e desenvolvimento social.\n\nA formação abrange fundamentos pedagógicos, didática, desenvolvimento motor, esportes coletivos e individuais, dança, atividades rítmicas, educação especial e estágio supervisionado. O licenciado está habilitado para concursos do magistério e atuação em escolas públicas e privadas.",
    perfilProfissional: "Para quem tem aptidão para ensinar, comunicar-se com grupos e promover o desenvolvimento físico e social de crianças e adolescentes. O perfil combina amor pelo movimento com vocação pedagógica e compromisso com a formação integral dos alunos.",
    mercadoDeTrabalho: "Professores de Educação Física atuam em escolas da educação básica, redes públicas e privadas, em todo o Brasil. A carreira docente oferece estabilidade por meio de concursos públicos e oportunidades em projetos esportivos, escolinhas e programas sociais.",
    areaDeAtuacao: ["Docência na educação básica", "Coordenação de projetos esportivos escolares", "Educação física adaptada e inclusiva", "Promoção da saúde no ambiente escolar", "Programas sociais e esportivos comunitários"]
  },

  "estetica-e-cosmetica-ead": {
    slug: "estetica-e-cosmetica", modalidade: "EAD", nome: "Estética e Cosmética",
    duracao: "2,5 Anos", tipoGrau: "Tecnólogo", area: "Saúde",
    descricao: "O curso de Estética e Cosmética forma profissionais para atuar com saúde, beleza e bem-estar de forma técnica, científica e ética. O esteticista compreende a anatomia, a cosmetologia e os procedimentos estéticos para oferecer tratamentos seguros e eficazes aos clientes.\n\nA formação contempla anatomia e fisiologia, dermatologia básica, cosmetologia, procedimentos faciais e corporais, tricologia, eletroterapia e gestão de negócios em estética. O egresso está preparado para atuar em clínicas, spas, salões e para empreender no setor.",
    perfilProfissional: "Ideal para quem se interessa por beleza, bem-estar e pela ciência por trás dos procedimentos estéticos. O perfil combina sensibilidade estética, habilidade manual e vontade de impactar positivamente a autoestima e a saúde das pessoas.",
    mercadoDeTrabalho: "O setor de beleza e estética é um dos que mais cresce no Brasil, com clínicas estéticas, spas, salões, hotéis e centros de saúde em expansão. A demanda por profissionais qualificados e com formação superior é crescente, especialmente para procedimentos mais avançados.",
    areaDeAtuacao: ["Estética facial e corporal avançada", "Tratamentos capilares e tricologia", "Consultoria e atendimento estético", "Estética pré e pós-cirúrgica", "Gestão de clínicas e negócios em beleza"]
  },

  "farmacia-ead": {
    slug: "farmacia", modalidade: "EAD", nome: "Farmácia",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O curso de Farmácia forma profissionais para atuar em todas as etapas relacionadas a medicamentos, cosméticos e produtos para a saúde — da pesquisa e desenvolvimento ao cuidado direto com o paciente. O farmacêutico é um especialista em saúde com papel fundamental na promoção do uso racional de medicamentos.\n\nA formação abrange química farmacêutica, farmacologia, microbiologia, análises clínicas, farmácia clínica, controle de qualidade e assuntos regulatórios. O egresso está habilitado para registro no CFF e para atuação em farmácias, laboratórios e indústria.",
    perfilProfissional: "Para quem tem interesse em saúde, química e biologia, com atenção aos detalhes e comprometimento com a segurança do paciente. O farmacêutico combina conhecimento científico com habilidade para o cuidado humanizado.",
    mercadoDeTrabalho: "O farmacêutico encontra oportunidades em farmácias comunitárias e hospitalares, laboratórios de análises clínicas, indústria farmacêutica, cosmetologia, pesquisa, controle de qualidade e vigilância sanitária. A profissão tem alta empregabilidade e diferentes possibilidades de especialização.",
    areaDeAtuacao: ["Farmácia clínica e hospitalar", "Análises clínicas e diagnóstico", "Indústria farmacêutica e biotecnologia", "Controle de qualidade e regulatório", "Pesquisa e desenvolvimento de medicamentos"]
  },

  "fisioterapia-ead": {
    slug: "fisioterapia", modalidade: "EAD", nome: "Fisioterapia",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O curso de Fisioterapia forma profissionais para prevenir, avaliar e tratar disfunções do movimento humano, utilizando técnicas terapêuticas baseadas em evidências científicas. O fisioterapeuta promove a recuperação funcional e a qualidade de vida de pacientes em todas as fases da vida.\n\nA formação abrange anatomia, fisiologia, biomecânica, neurologia, ortopedia, fisioterapia cardiorrespiratória, técnicas manuais, eletroterapia e estágio supervisionado. O egresso está habilitado para o CREFITO e para atuação em clínicas, hospitais e atendimento domiciliar.",
    perfilProfissional: "Indicado para quem gosta da área de saúde, tem empatia e deseja ajudar pessoas a recuperar movimentos, autonomia e bem-estar. O fisioterapeuta combina conhecimento técnico científico com habilidade manual e cuidado humanizado.",
    mercadoDeTrabalho: "O fisioterapeuta atua em clínicas, hospitais, UTIs, centros de reabilitação, esporte de alto rendimento, saúde da mulher e atendimento domiciliar. O campo é amplo, em constante expansão e permite especialização em diversas áreas de interesse.",
    areaDeAtuacao: ["Fisioterapia ortopédica e esportiva", "Reabilitação neurológica e funcional", "Fisioterapia hospitalar e UTI", "Saúde da mulher e uroginecológica", "Terapias manuais e abordagens integrativas"]
  },

  "nutricao-ead": {
    slug: "nutricao", modalidade: "EAD", nome: "Nutrição",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O curso de Nutrição forma profissionais para promover saúde e qualidade de vida por meio da alimentação. O nutricionista avalia o estado nutricional, planeja dietas personalizadas e desenvolve estratégias alimentares baseadas em evidências para diferentes populações e necessidades.\n\nA formação contempla bioquímica nutricional, fisiologia humana, nutrição clínica, dietética, saúde coletiva, tecnologia de alimentos e nutrição esportiva. O egresso está habilitado para o CRN e para atuação em clínicas, hospitais, escolas e indústria alimentícia.",
    perfilProfissional: "Para quem se interessa por saúde, alimentação e bem-estar, com vontade de ajudar pessoas a viver melhor. O nutricionista une conhecimento científico com empatia e capacidade de traduzir ciência em orientações práticas e sustentáveis.",
    mercadoDeTrabalho: "O nutricionista encontra oportunidades em clínicas, hospitais, escolas, empresas de alimentação coletiva, academias, clubes esportivos, indústria de alimentos e como profissional liberal. O crescente interesse por alimentação saudável amplia continuamente a demanda pela profissão.",
    areaDeAtuacao: ["Nutrição clínica e terapia nutricional", "Nutrição esportiva e performance", "Alimentação coletiva e nutrição escolar", "Saúde pública e programas nutricionais", "Tecnologia e indústria de alimentos"]
  },

  "psicopedagogia-ead": {
    slug: "psicopedagogia", modalidade: "EAD", nome: "Psicopedagogia",
    duracao: "4 Anos", tipoGrau: "Licenciatura", area: "Saúde",
    descricao: "O curso de Psicopedagogia une educação, psicologia e neurociência para formar especialistas em identificar, avaliar e intervir em dificuldades de aprendizagem. O psicopedagogo trabalha para que crianças, adolescentes e adultos superem obstáculos no processo de aprender e se desenvolvam plenamente.\n\nA formação abrange desenvolvimento humano, transtornos de aprendizagem, avaliação psicopedagógica, neuropsicologia, inclusão educacional, alfabetização e estratégias de intervenção. O egresso atua em escolas, clínicas multidisciplinares e atendimentos autônomos.",
    perfilProfissional: "Voltado para quem se interessa por educação, desenvolvimento humano e processos cognitivos. O psicopedagogo tem perfil acolhedor, investigativo e comprometido com a inclusão e o sucesso escolar de cada indivíduo.",
    mercadoDeTrabalho: "A crescente atenção às dificuldades de aprendizagem, ao TDAH, à dislexia e à inclusão escolar amplia continuamente a demanda por psicopedagogos. Atuação em escolas, clínicas, ONGs, centros especializados e consultório próprio.",
    areaDeAtuacao: ["Avaliação e diagnóstico psicopedagógico", "Intervenção em dificuldades de aprendizagem", "Educação especial e inclusiva", "Orientação a professores e famílias", "Coordenação de projetos pedagógicos"]
  },

  "radiologia-ead": {
    slug: "radiologia", modalidade: "EAD", nome: "Radiologia",
    duracao: "3 Anos", tipoGrau: "Tecnólogo", area: "Saúde",
    descricao: "O curso de Radiologia forma profissionais para operar equipamentos de diagnóstico por imagem como raio-X, tomografia computadorizada, mamografia e ressonância magnética. O tecnólogo em radiologia é essencial no diagnóstico médico, operando tecnologias avançadas com rigor técnico e biossegurança.\n\nA formação abrange física das radiações, anatomia radiológica, radioproteção, técnicas de imagem, processos de digitalização e biossegurança. O egresso está habilitado para o CRTR e para atuação em hospitais, clínicas e laboratórios de imagem.",
    perfilProfissional: "Para quem gosta de saúde e tecnologia, tem precisão técnica e interesse em diagnóstico por imagem. O tecnólogo em radiologia combina conhecimento científico com responsabilidade no manuseio de equipamentos de alta tecnologia.",
    mercadoDeTrabalho: "O mercado de radiologia cresce com o avanço da medicina diagnóstica. Oportunidades em hospitais, clínicas de imagem, consultórios médicos e odontológicos, medicina veterinária e radiologia industrial garantem ampla empregabilidade para o profissional qualificado.",
    areaDeAtuacao: ["Radiologia hospitalar e diagnóstica", "Tomografia e ressonância magnética", "Radiologia odontológica", "Radiologia veterinária e industrial", "Radioproteção e dosimetria"]
  },

  "terapia-ocupacional-ead": {
    slug: "terapia-ocupacional", modalidade: "EAD", nome: "Terapia Ocupacional",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O curso de Terapia Ocupacional forma profissionais para ajudar pessoas a conquistar autonomia e qualidade de vida por meio das atividades cotidianas. O terapeuta ocupacional intervém quando barreiras físicas, cognitivas, emocionais ou sociais impedem a plena participação do indivíduo na vida diária.\n\nA formação abrange fundamentos da terapia ocupacional, saúde mental, reabilitação física, terapia infantil, gerontologia, ergonomia e práticas clínicas supervisionadas. O egresso está habilitado para o COFFITO e para atuação em contextos de saúde, educação e assistência social.",
    perfilProfissional: "Indicado para quem tem empatia, criatividade e desejo de ajudar pessoas a superar limitações e reconquistar independência. O terapeuta ocupacional combina escuta sensível com intervenções práticas e personalizadas.",
    mercadoDeTrabalho: "O terapeuta ocupacional atua em hospitais, clínicas de reabilitação, escolas inclusivas, centros de saúde mental, empresas e atendimento domiciliar. Com o envelhecimento da população e a crescente atenção à saúde mental, a demanda pela profissão está em ascensão.",
    areaDeAtuacao: ["Reabilitação física e funcional", "Saúde mental e inclusão psicossocial", "Terapia ocupacional infantil e escolar", "Saúde do trabalhador e ergonomia", "Gerontologia e cuidados com idosos"]
  },

  /* ═══════════════════════════════════════
     EAD — TECNOLOGIA
  ═══════════════════════════════════════ */
  "analise-e-desenvolvimento-de-sistemas-ead": {
    slug: "analise-e-desenvolvimento-de-sistemas", modalidade: "EAD", nome: "Análise e Desenvolvimento de Sistemas",
    duracao: "2,5 Anos", tipoGrau: "Tecnólogo", area: "Tecnologia",
    descricao: "O curso de Análise e Desenvolvimento de Sistemas forma desenvolvedores para criar, manter e evoluir sistemas web, mobile e corporativos. Desde o primeiro semestre, o aluno programa, cria bancos de dados e trabalha com metodologias ágeis, saindo com portfólio prático e pronto para o mercado.\n\nA grade inclui programação em linguagens modernas, estruturas de dados, banco de dados relacional e não relacional, desenvolvimento web e mobile, engenharia de software e gestão de projetos ágeis. O tecnólogo em ADS é um dos profissionais mais demandados no mercado de tecnologia.",
    perfilProfissional: "Para quem tem interesse em programação, lógica e construção de soluções digitais. O perfil inclui raciocínio analítico, curiosidade tecnológica e prazer em resolver problemas por meio do código. Não é necessário experiência prévia em programação.",
    mercadoDeTrabalho: "A área de tecnologia tem uma das maiores taxas de empregabilidade do mercado, com demanda que supera a oferta de profissionais. Empresas de software, fintechs, startups, bancos, e-commerces e consultorias contratam desenvolvedores de ADS em todos os níveis.",
    areaDeAtuacao: ["Desenvolvimento de sistemas web e mobile", "Análise e modelagem de sistemas", "Banco de dados e arquitetura de dados", "Gestão de projetos ágeis (Scrum/Kanban)", "Testes e qualidade de software"]
  },

  "ciencia-de-dados-ead": {
    slug: "ciencia-de-dados", modalidade: "EAD", nome: "Ciência de Dados",
    duracao: "2,5 Anos", tipoGrau: "Tecnólogo", area: "Tecnologia",
    descricao: "O curso de Ciência de Dados forma profissionais para extrair valor de grandes volumes de informação, utilizando programação, estatística e machine learning para orientar decisões estratégicas nas organizações. O cientista de dados é um dos profissionais mais valorizados e bem remunerados da economia digital.\n\nA formação abrange Python, R, estatística descritiva e inferencial, visualização de dados, machine learning, big data, inteligência artificial e análise de negócios. O egresso é capaz de construir modelos preditivos e comunicar insights para diferentes públicos.",
    perfilProfissional: "Indicado para quem tem interesse em análise, estatística e raciocínio lógico aplicado a problemas complexos. O cientista de dados combina habilidade técnica com curiosidade investigativa e capacidade de transformar dados em histórias e decisões.",
    mercadoDeTrabalho: "A escassez de cientistas de dados qualificados resulta em salários entre os mais altos do mercado de tecnologia. Todas as grandes empresas, startups, bancos, varejistas e organizações de saúde demandam profissionais capazes de trabalhar com dados em escala.",
    areaDeAtuacao: ["Ciência de dados e machine learning", "Business intelligence e análise de dados", "Engenharia e arquitetura de dados", "Inteligência artificial aplicada a negócios", "Análise preditiva e modelagem estatística"]
  },

  "computacao-em-nuvem-ead": {
    slug: "computacao-em-nuvem", modalidade: "EAD", nome: "Computação em Nuvem",
    duracao: "2,5 Anos", tipoGrau: "Tecnólogo", area: "Tecnologia",
    descricao: "O curso de Computação em Nuvem forma especialistas em plataformas cloud como AWS, Azure e Google Cloud, capacitando-os para projetar, implementar e gerenciar infraestruturas digitais escaláveis, seguras e eficientes. A nuvem se tornou a base da transformação digital nas organizações.\n\nA formação abrange fundamentos de cloud computing, redes, segurança em nuvem, DevOps, automação de infraestrutura, conteinerização (Docker, Kubernetes) e gestão de ambientes distribuídos. O egresso pode obter certificações das principais plataformas do mercado.",
    perfilProfissional: "Para quem tem interesse em infraestrutura de TI, automação e tecnologias em nuvem. O perfil combina raciocínio técnico com visão de operações e interesse em manter sistemas críticos funcionando com disponibilidade e segurança.",
    mercadoDeTrabalho: "A migração das empresas para a nuvem cria demanda crescente e constante por profissionais especializados. Oportunidades em empresas de tecnologia, consultorias cloud, startups e como freelancer em projetos de migração e arquitetura cloud.",
    areaDeAtuacao: ["Arquitetura e design de soluções cloud", "DevOps e automação de infraestrutura", "Segurança e conformidade em nuvem", "Gerenciamento de plataformas cloud (AWS/Azure/GCP)", "Desenvolvimento cloud-native e microsserviços"]
  },

  "defesa-cibernetica-ead": {
    slug: "defesa-cibernetica", modalidade: "EAD", nome: "Defesa Cibernética",
    duracao: "2,5 Anos", tipoGrau: "Tecnólogo", area: "Tecnologia",
    descricao: "O curso de Defesa Cibernética forma profissionais para identificar vulnerabilidades, prevenir ataques e proteger sistemas e dados em ambientes digitais cada vez mais complexos e ameaçados. A cibersegurança é uma das áreas com maior crescimento e escassez de talentos no mercado global.\n\nA formação abrange segurança de redes, criptografia, ethical hacking, análise de malware, computação forense, resposta a incidentes e governança de segurança da informação. O profissional formado atua na linha de frente da proteção digital das organizações.",
    perfilProfissional: "Voltado para quem gosta de tecnologia e desafios intelectuais, tem perfil investigativo e curiosidade para entender como ataques acontecem e como preveni-los. A área atrai quem pensa como um adversário para defender melhor os sistemas.",
    mercadoDeTrabalho: "A segurança cibernética é uma das profissões mais demandadas e bem pagas do mundo. Empresas de todos os setores, governos e forças armadas buscam especialistas em proteção digital. O trabalho remoto é amplamente praticado e o mercado internacional está acessível.",
    areaDeAtuacao: ["Segurança cibernética e proteção de redes", "Ethical hacking e pentest", "Computação forense e investigação digital", "Governança e gestão de vulnerabilidades", "Resposta a incidentes e análise de malware"]
  },

  "gestao-da-tecnologia-da-informacao-ead": {
    slug: "gestao-da-tecnologia-da-informacao", modalidade: "EAD", nome: "Gestão da Tecnologia da Informação",
    duracao: "2,5 Anos", tipoGrau: "Tecnólogo", area: "Tecnologia",
    descricao: "O curso de Gestão da Tecnologia da Informação forma profissionais para liderar projetos e equipes de TI com visão estratégica de negócios. O gestor de TI integra o conhecimento técnico à capacidade gerencial para garantir que a tecnologia sirva aos objetivos da organização.\n\nA formação abrange governança de TI, gestão de projetos (PMP/Scrum), segurança da informação, infraestrutura de redes, análise de dados, business intelligence e gestão de contratos de TI. O egresso está preparado para cargos de liderança em departamentos de tecnologia.",
    perfilProfissional: "Para quem se interessa por tecnologia e gestão ao mesmo tempo — o perfil ideal combina conhecimento técnico de TI com habilidades de liderança, comunicação e pensamento estratégico. Profissionais que já atuam em TI e desejam assumir posições gerenciais encontram no curso a preparação necessária.",
    mercadoDeTrabalho: "O mercado de TI demanda cada vez mais gestores que entendam tanto de tecnologia quanto de negócios. Oportunidades em empresas de todos os setores, consultorias de TI, fintechs e startups, com faixas salariais entre as mais altas da área de gestão.",
    areaDeAtuacao: ["Governança e estratégia de TI", "Gestão de projetos tecnológicos", "Infraestrutura, redes e segurança da informação", "Business intelligence e gestão de dados", "Consultoria e auditoria em TI"]
  },

  /* ═══════════════════════════════════════
     EAD — EXTRAS (lista do usuário)
  ═══════════════════════════════════════ */
  "creator-digital-influencer-ead": {
    slug: "creator-digital-influencer", modalidade: "EAD", nome: "Creator & Digital Influencer",
    duracao: "1,5 Anos", tipoGrau: "Tecnólogo", area: "Ciências Sociais",
    descricao: "Formação pioneira para quem deseja transformar presença digital em carreira e negócio sustentável. O curso capacita criadores de conteúdo a dominar produção audiovisual, estratégia nas redes sociais, construção de audiência e modelos de monetização da economia criativa.\n\nO currículo inclui criação de conteúdo estratégico, branding pessoal, produção de vídeo e foto, algoritmos das plataformas, comunidades digitais, parcerias com marcas e empreendedorismo para criadores. A economia criativa movimenta bilhões anualmente e ainda tem muito espaço para profissionais qualificados.",
    perfilProfissional: "Para quem já cria ou quer criar conteúdo digital de forma profissional, com visão de negócio. O curso atrai comunicadores, artistas, empreendedores digitais e profissionais de marketing que desejam construir ou fortalecer sua presença online.",
    mercadoDeTrabalho: "A economia criativa digital cresce exponencialmente no Brasil e no mundo. Criadores profissionais atuam por meio de parcerias com marcas, produtos digitais, assinaturas de conteúdo, mentorias e serviços de consultoria de conteúdo para empresas.",
    areaDeAtuacao: ["Criação de conteúdo para redes sociais", "Produção audiovisual digital", "Branding pessoal e posicionamento", "Monetização e parcerias com marcas", "Consultoria e estratégia de conteúdo"]
  },

  "inteligencia-artificial-e-automacao-ead": {
    slug: "inteligencia-artificial-e-automacao", modalidade: "EAD", nome: "Inteligência Artificial e Automação Digital",
    duracao: "1,5 Anos", tipoGrau: "Tecnólogo", area: "Tecnologia",
    descricao: "Formação inovadora para criar soluções digitais com inteligência artificial e ferramentas no-code/low-code, sem necessidade de programação avançada. O curso prepara profissionais para automatizar processos, construir aplicações e usar IA de forma estratégica nas organizações.\n\nO currículo abrange engenharia de prompts, ferramentas de IA generativa, automação com plataformas visuais, desenvolvimento no-code, integração de sistemas via API e design de fluxos inteligentes. A demanda por esse perfil profissional cresce rapidamente com a adoção da IA nas empresas.",
    perfilProfissional: "Para quem quer trabalhar com tecnologia e IA sem precisar ser programador. O perfil inclui pensamento lógico, curiosidade por novas ferramentas digitais e interesse em resolver problemas de negócio com automação e inteligência artificial.",
    mercadoDeTrabalho: "O mercado de IA e automação é um dos que mais crescem no Brasil, com demanda por profissionais que consigam implementar soluções práticas rapidamente. Oportunidades em consultorias, empresas de tecnologia, startups e como prestador de serviços autônomo.",
    areaDeAtuacao: ["Automação de processos e fluxos digitais", "Engenharia de prompts e IA generativa", "Desenvolvimento no-code e low-code", "Integração de sistemas e APIs", "Gestão de produtos digitais com IA"]
  },

  /* ═══════════════════════════════════════
     SEMIPRESENCIAL — ARQUITETURA
  ═══════════════════════════════════════ */
  "arquitetura-e-urbanismo-semipresencial": {
    slug: "arquitetura-e-urbanismo", modalidade: "Semipresencial", nome: "Arquitetura e Urbanismo",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Arquitetura",
    descricao: "O curso de Arquitetura e Urbanismo Semipresencial forma arquitetos e urbanistas qualificados para criar espaços físicos inovadores, funcionais e sustentáveis. O modelo combina aulas teóricas online com encontros presenciais mensais focados em práticas de projeto, softwares especializados e vivências essenciais da profissão.\n\nO currículo abrange projetos arquitetônicos, urbanismo, tecnologia das construções, história da arquitetura, paisagismo, sustentabilidade e ferramentas como AutoCAD e BIM. Os encontros presenciais garantem o contato com professores, ateliês de projeto e o desenvolvimento das habilidades práticas exigidas pelo mercado.",
    perfilProfissional: "Para quem tem olhar criativo, interesse por espaços e pela relação entre forma, função e impacto humano. O arquiteto é um profissional que combina arte e técnica, gerenciando projetos desde a concepção até a entrega final das obras.",
    mercadoDeTrabalho: "Arquitetos atuam em escritórios próprios, construtoras, incorporadoras, prefeituras e empresas de interiores. O mercado de construção civil sustenta demanda constante, especialmente para profissionais com domínio de BIM e projetos sustentáveis.",
    areaDeAtuacao: ["Projetos arquitetônicos e residenciais", "Arquitetura de interiores", "Planejamento urbano e paisagismo", "Gestão e coordenação de obras", "Projetos sustentáveis e bioclimáticos"]
  },

  /* ═══════════════════════════════════════
     SEMIPRESENCIAL — SAÚDE
  ═══════════════════════════════════════ */
  "biomedicina-semipresencial": {
    slug: "biomedicina", modalidade: "Semipresencial", nome: "Biomedicina",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O curso de Biomedicina Semipresencial une teoria científica online com práticas laboratoriais presenciais obrigatórias, formando profissionais de alto nível para diagnóstico, pesquisa e promoção da saúde. O formato é reconhecido pelo MEC e garante o rigor técnico exigido pela profissão.\n\nA formação abrange bioquímica, microbiologia, imunologia, biologia molecular, análises clínicas e biotecnologia, com atividades práticas em laboratórios modernos nos encontros presenciais. O egresso está habilitado para o CFBM.",
    perfilProfissional: "Para quem tem interesse em ciências da saúde, laboratórios e investigação de doenças. O biomédico tem perfil científico, rigoroso e comprometido com a precisão diagnóstica e o bem-estar da população.",
    mercadoDeTrabalho: "Biomédicos encontram oportunidades em laboratórios clínicos, hospitais, empresas de biotecnologia, clínicas de estética, hemocentros e centros de pesquisa. O avanço da medicina diagnóstica e preventiva amplia continuamente as possibilidades de atuação.",
    areaDeAtuacao: ["Análises clínicas e diagnóstico laboratorial", "Pesquisa e biotecnologia", "Estética e procedimentos biomédicos", "Perícia e toxicologia forense", "Controle de qualidade em saúde"]
  },

  "educacao-fisica-bacharelado-semipresencial": {
    slug: "educacao-fisica-bacharelado", modalidade: "Semipresencial", nome: "Educação Física - Bacharelado",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O Bacharelado em Educação Física Semipresencial prepara profissionais para trabalhar com saúde, performance esportiva e bem-estar, aliando flexibilidade nas aulas teóricas online a encontros presenciais práticos fundamentais para a formação. O bacharel prescreve exercícios, acompanha atletas e atua em diferentes contextos de atividade física.\n\nA formação contempla anatomia, fisiologia do exercício, biomecânica, treinamento esportivo, avaliação física, nutrição esportiva e gestão. Os encontros presenciais asseguram as práticas corporais e esportivas essenciais à profissão.",
    perfilProfissional: "Para quem gosta de movimento, esporte e deseja promover saúde e bem-estar. O bacharel combina base científica com habilidade prática para motivar e acompanhar pessoas em suas jornadas de desenvolvimento físico.",
    mercadoDeTrabalho: "Com o crescente interesse pela saúde preventiva e pelo esporte, o mercado para bacharéis em Educação Física está em expansão. Oportunidades em academias, clubes, hotéis, empresas e como personal trainer autônomo.",
    areaDeAtuacao: ["Personal training e prescrição de exercícios", "Treinamento esportivo e alto rendimento", "Academias e centros de saúde", "Reabilitação física e grupos especiais", "Programas corporativos de bem-estar"]
  },

  "educacao-fisica-licenciatura-semipresencial": {
    slug: "educacao-fisica-licenciatura", modalidade: "Semipresencial", nome: "Educação Física - Licenciatura",
    duracao: "4 Anos", tipoGrau: "Licenciatura", area: "Saúde",
    descricao: "A Licenciatura em Educação Física Semipresencial forma professores para inspirar e desenvolver alunos por meio do movimento na escola básica. O modelo une aulas teóricas online com encontros presenciais práticos, garantindo a formação pedagógica e corporal necessária para a docência.\n\nA formação abrange didática, desenvolvimento motor, esportes, dança, atividades rítmicas, educação especial e estágio supervisionado. O licenciado está habilitado para concursos do magistério e para atuar em escolas de toda a rede básica.",
    perfilProfissional: "Para quem tem vocação para ensinar, ama o movimento e deseja contribuir para o desenvolvimento integral de crianças e adolescentes. O professor de Educação Física promove saúde, inclusão e valores por meio da prática corporal.",
    mercadoDeTrabalho: "Professores de Educação Física têm demanda constante em escolas públicas e privadas. A estabilidade da carreira docente e os concursos públicos são atrativos importantes, junto com oportunidades em projetos esportivos e programas sociais.",
    areaDeAtuacao: ["Docência na educação básica", "Coordenação de projetos esportivos escolares", "Educação física adaptada e inclusiva", "Promoção da saúde na escola", "Programas esportivos comunitários"]
  },

  "estetica-e-cosmetica-semipresencial": {
    slug: "estetica-e-cosmetica", modalidade: "Semipresencial", nome: "Estética e Cosmética",
    duracao: "2,5 Anos", tipoGrau: "Tecnólogo", area: "Saúde",
    descricao: "O curso de Estética e Cosmética Semipresencial forma profissionais para atuar com saúde, beleza e bem-estar de forma técnica e científica. O modelo combina conteúdo teórico online com práticas presenciais obrigatórias em laboratório, garantindo o domínio dos procedimentos exigidos pelo mercado.\n\nA formação contempla anatomia, cosmetologia, procedimentos faciais, corporais e capilares, eletroterapia, biossegurança e gestão de negócios estéticos. O egresso está preparado para atender com qualidade e para empreender no setor.",
    perfilProfissional: "Ideal para quem se interessa por beleza e bem-estar e quer compreender a ciência por trás dos tratamentos estéticos. Combina sensibilidade estética com habilidade técnica e visão empreendedora.",
    mercadoDeTrabalho: "O setor de estética e beleza é um dos que mais cresce no Brasil. Clínicas estéticas, spas, salões, hotéis, centros de saúde e consultórios multidisciplinares estão em expansão, com alta demanda por profissionais com formação técnica superior.",
    areaDeAtuacao: ["Estética facial e corporal avançada", "Tricologia e tratamentos capilares", "Consultoria e atendimento estético personalizado", "Estética pós-cirúrgica e preventiva", "Gestão de clínicas e negócios estéticos"]
  },

  "farmacia-semipresencial": {
    slug: "farmacia", modalidade: "Semipresencial", nome: "Farmácia",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O curso de Farmácia Semipresencial capacita profissionais para atuar em todas as etapas relacionadas a medicamentos, cosméticos e produtos de saúde. O modelo combina a flexibilidade das aulas teóricas online com práticas laboratoriais presenciais rigorosas, cumprindo integralmente os requisitos do MEC para a profissão farmacêutica.\n\nA formação abrange química farmacêutica, farmacologia, análises clínicas, farmácia clínica, controle de qualidade, cosmetologia e assuntos regulatórios, com estágios supervisionados presenciais. O egresso está habilitado para o CFF.",
    perfilProfissional: "Para quem tem interesse em saúde, química e biologia, com atenção aos detalhes e comprometimento com a segurança do paciente. O farmacêutico combina rigor científico com cuidado humanizado na atenção à saúde.",
    mercadoDeTrabalho: "O farmacêutico tem alta empregabilidade em farmácias, hospitais, laboratórios, indústria farmacêutica, cosmetologia e vigilância sanitária. A profissão oferece múltiplas possibilidades de especialização e crescimento de carreira.",
    areaDeAtuacao: ["Farmácia clínica e hospitalar", "Análises clínicas e diagnóstico", "Indústria farmacêutica e biotecnologia", "Controle de qualidade e regulatório", "Cosmetologia e dermofarmácia"]
  },

  "fisioterapia-semipresencial": {
    slug: "fisioterapia", modalidade: "Semipresencial", nome: "Fisioterapia",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O curso de Fisioterapia Semipresencial forma profissionais para prevenir, avaliar e tratar disfunções do movimento, unindo a flexibilidade das aulas teóricas online a práticas clínicas e laboratoriais presenciais indispensáveis à formação. O fisioterapeuta promove a recuperação funcional e a qualidade de vida dos pacientes.\n\nA formação contempla anatomia, fisiologia, biomecânica, neurologia, ortopedia, técnicas manuais, eletroterapia e estágio supervisionado em clínicas e hospitais conveniados. O egresso está habilitado para o CREFITO.",
    perfilProfissional: "Para quem gosta da área de saúde, tem empatia e deseja ajudar pessoas a recuperar movimentos e autonomia. O fisioterapeuta une conhecimento técnico-científico com habilidade manual e cuidado com o próximo.",
    mercadoDeTrabalho: "O campo da fisioterapia é amplo e em expansão, com oportunidades em clínicas, hospitais, UTIs, esporte de alto rendimento, saúde da mulher e atendimento domiciliar. A área permite diversas especializações ao longo da carreira.",
    areaDeAtuacao: ["Fisioterapia ortopédica e esportiva", "Reabilitação neurológica e funcional", "Fisioterapia hospitalar e UTI", "Saúde da mulher e pélvica", "Terapias manuais e integrativas"]
  },

  "nutricao-semipresencial": {
    slug: "nutricao", modalidade: "Semipresencial", nome: "Nutrição",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O curso de Nutrição Semipresencial forma nutricionistas para promover saúde e qualidade de vida por meio da alimentação, combinando aulas teóricas online com práticas presenciais em laboratórios e estágios supervisionados. O formato garante a formação científica e prática necessária para a atuação profissional plena.\n\nA formação abrange bioquímica nutricional, dietética, nutrição clínica, saúde pública, tecnologia de alimentos e nutrição esportiva, com atividades práticas obrigatórias nos polos presenciais. O egresso está habilitado para o CRN.",
    perfilProfissional: "Para quem se interessa por saúde, alimentação e bem-estar e deseja ajudar pessoas a viver melhor. O nutricionista une conhecimento científico com empatia para traduzir ciência em orientações práticas e sustentáveis.",
    mercadoDeTrabalho: "O mercado de nutrição está em crescimento constante, impulsionado pelo interesse por alimentação saudável. Oportunidades em clínicas, hospitais, academias, escolas, indústria de alimentos e consultório próprio em todo o Brasil.",
    areaDeAtuacao: ["Nutrição clínica e terapia nutricional", "Nutrição esportiva e estética", "Alimentação coletiva e nutrição escolar", "Saúde pública e programas governamentais", "Tecnologia e pesquisa em alimentos"]
  },

  "psicopedagogia-semipresencial": {
    slug: "psicopedagogia", modalidade: "Semipresencial", nome: "Psicopedagogia",
    duracao: "4 Anos", tipoGrau: "Licenciatura", area: "Educação",
    descricao: "O curso de Psicopedagogia Semipresencial une educação, psicologia e neurociência para formar especialistas em aprendizagem, combinando aulas online com encontros presenciais para práticas e vivências que enriquecem a formação. O psicopedagogo atua na prevenção e intervenção de dificuldades que impedem o pleno desenvolvimento escolar.\n\nA formação abrange desenvolvimento cognitivo, transtornos de aprendizagem, avaliação psicopedagógica, neuropsicologia educacional, inclusão e estratégias de intervenção individualizadas. O egresso atua em escolas, clínicas e atendimento autônomo.",
    perfilProfissional: "Para quem se interessa por educação, desenvolvimento humano e processos cognitivos, e deseja fazer diferença na vida de crianças, adolescentes e adultos com dificuldades de aprendizagem.",
    mercadoDeTrabalho: "A crescente atenção à inclusão escolar e aos transtornos de aprendizagem como TDAH, dislexia e dificuldades de leitura amplia continuamente a demanda por psicopedagogos. Atuação em escolas, clínicas multidisciplinares, ONGs e consultório próprio.",
    areaDeAtuacao: ["Avaliação e intervenção psicopedagógica", "Apoio a dificuldades e transtornos de aprendizagem", "Educação especial e inclusiva", "Orientação a docentes e famílias", "Coordenação de projetos pedagógicos"]
  },

  "radiologia-semipresencial": {
    slug: "radiologia", modalidade: "Semipresencial", nome: "Radiologia",
    duracao: "3 Anos", tipoGrau: "Tecnólogo", area: "Saúde",
    descricao: "O curso de Radiologia Semipresencial forma tecnólogos para operar equipamentos de diagnóstico por imagem como raio-X, tomografia, mamografia e ressonância magnética, aliando teoria online a práticas presenciais obrigatórias com equipamentos reais. A formação segue rigorosamente as diretrizes do MEC para a área da saúde.\n\nAs disciplinas incluem física das radiações, anatomia radiológica, técnicas de imagem, radioproteção, processamento digital e estágio supervisionado em ambientes hospitalares. O egresso está habilitado para o CRTR.",
    perfilProfissional: "Para quem gosta de tecnologia e saúde, tem precisão técnica e interesse em diagnóstico por imagem. O tecnólogo em radiologia combina rigor científico com responsabilidade no uso de tecnologias de alta complexidade.",
    mercadoDeTrabalho: "O mercado de radiologia cresce com o avanço da medicina diagnóstica. Hospitalares, clínicas de imagem, consultórios médicos e odontológicos, medicina veterinária e radiologia industrial absorvem profissionais qualificados.",
    areaDeAtuacao: ["Radiologia hospitalar e diagnóstica", "Tomografia computadorizada e RM", "Radiologia odontológica", "Radioproteção e dosimetria", "Mamografia e ultrassonografia"]
  },

  "terapia-ocupacional-semipresencial": {
    slug: "terapia-ocupacional", modalidade: "Semipresencial", nome: "Terapia Ocupacional",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Saúde",
    descricao: "O curso de Terapia Ocupacional Semipresencial forma profissionais para ajudar pessoas a conquistar autonomia e qualidade de vida por meio das atividades cotidianas. O modelo combina aulas teóricas online com práticas clínicas presenciais e estágios supervisionados indispensáveis à formação.\n\nA grade curricular contempla fundamentos da TO, saúde mental, reabilitação física, gerontologia, terapia infantil, ergonomia e práticas em contextos hospitalares, escolares e comunitários. O egresso está habilitado para o COFFITO.",
    perfilProfissional: "Para quem tem empatia e criatividade para ajudar pessoas a superar limitações físicas, cognitivas ou sociais. O terapeuta ocupacional desenvolve intervenções personalizadas para que cada paciente possa participar plenamente da vida.",
    mercadoDeTrabalho: "O campo da terapia ocupacional cresce com o envelhecimento da população e a crescente atenção à saúde mental. Hospitais, clínicas, escolas inclusivas, empresas e atendimento domiciliar são os principais espaços de atuação.",
    areaDeAtuacao: ["Reabilitação física e funcional", "Saúde mental e inclusão psicossocial", "Terapia ocupacional infantil", "Saúde do trabalhador e ergonomia", "Gerontologia e cuidados com idosos"]
  },

  /* ═══════════════════════════════════════
     SEMIPRESENCIAL — ENGENHARIA
  ═══════════════════════════════════════ */
  "engenharia-civil-semipresencial": {
    slug: "engenharia-civil", modalidade: "Semipresencial", nome: "Engenharia Civil",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Engenharia",
    descricao: "O curso de Engenharia Civil Semipresencial combina aulas teóricas online com encontros presenciais focados em laboratórios, práticas técnicas e projetos aplicados. O engenheiro formado é capaz de projetar, gerenciar e executar obras civis de toda natureza, com domínio técnico e visão sustentável.\n\nA formação abrange resistência dos materiais, topografia, hidráulica, concreto armado, geotecnia, gestão de obras e projetos. Os encontros presenciais incluem laboratórios de materiais, visitas técnicas e desenvolvimento de projetos integradores.",
    perfilProfissional: "Para quem tem interesse em construções, infraestrutura e transformar projetos em estruturas físicas. O perfil inclui raciocínio lógico, afinidade com matemática e física e capacidade de liderança em ambientes técnicos.",
    mercadoDeTrabalho: "Construtoras, escritórios de engenharia, prefeituras, órgãos públicos e empresas de infraestrutura demandam continuamente engenheiros civis. Com a urbanização e os programas habitacionais, a área mantém crescimento constante.",
    areaDeAtuacao: ["Projetos estruturais e fundações", "Gerenciamento e fiscalização de obras", "Infraestrutura viária e saneamento", "Projetos hidráulicos e ambientais", "Gestão e tecnologia em construção civil"]
  },

  "engenharia-de-producao-semipresencial": {
    slug: "engenharia-de-producao", modalidade: "Semipresencial", nome: "Engenharia de Produção",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Engenharia",
    descricao: "O curso de Engenharia de Produção Semipresencial integra teoria online e práticas presenciais para formar engenheiros capazes de otimizar sistemas produtivos em indústrias, empresas de serviços e organizações diversas. A engenharia de produção é a ciência da eficiência e da melhoria contínua.\n\nA formação abrange gestão de operações, planejamento da produção, logística, qualidade, segurança do trabalho, pesquisa operacional e sustentabilidade, com atividades práticas nos encontros presenciais.",
    perfilProfissional: "Para quem tem interesse em processos, análise e busca constante por eficiência. O engenheiro de produção combina pensamento analítico com liderança e visão sistêmica das organizações.",
    mercadoDeTrabalho: "Um dos engenheiros mais versáteis do mercado, o engenheiro de produção atua em indústrias, hospitais, logística, consultorias e startups. A área oferece excelente remuneração e rápido crescimento para posições estratégicas.",
    areaDeAtuacao: ["Gestão e otimização de processos", "Planejamento e controle da produção", "Logística e cadeia de suprimentos", "Qualidade e segurança no trabalho", "Gestão industrial e de projetos"]
  },

  "engenharia-eletrica-semipresencial": {
    slug: "engenharia-eletrica", modalidade: "Semipresencial", nome: "Engenharia Elétrica",
    duracao: "5 Anos", tipoGrau: "Bacharelado", area: "Engenharia",
    descricao: "O curso de Engenharia Elétrica Semipresencial combina teoria online com encontros presenciais em laboratórios de circuitos, máquinas e sistemas elétricos. A formação prepara engenheiros para projetar, desenvolver e gerenciar sistemas elétricos em ambientes industriais, comerciais e residenciais.\n\nO currículo abrange circuitos elétricos, eletrônica, máquinas elétricas, automação, instalações elétricas, geração de energia e proteção de sistemas. Os laboratórios presenciais complementam a teoria com experimentação prática essencial.",
    perfilProfissional: "Para quem tem interesse em energia, tecnologia e automação, com afinidade por análise técnica e resolução de problemas complexos. O engenheiro elétrico atua em uma das áreas mais estratégicas e bem remuneradas da engenharia.",
    mercadoDeTrabalho: "A transição energética e a automação industrial criam demanda crescente por engenheiros elétricos qualificados. Concessionárias, indústrias, construtoras, empresas de energia renovável e consultorias são os principais empregadores.",
    areaDeAtuacao: ["Projetos e instalações elétricas", "Automação e controle industrial", "Energias renováveis e geração distribuída", "Manutenção eletroeletrônica industrial", "Sistemas de proteção e distribuição de energia"]
  },

  /* ═══════════════════════════════════════
     SEMIPRESENCIAL — EDUCAÇÃO
  ═══════════════════════════════════════ */
  "fisica-semipresencial": {
    slug: "fisica", modalidade: "Semipresencial", nome: "Física",
    duracao: "4 Anos", tipoGrau: "Licenciatura", area: "Educação",
    descricao: "A Licenciatura em Física Semipresencial forma professores de Física habilitados para a educação básica, com sólida base científica e competências pedagógicas desenvolvidas em aulas online e encontros presenciais para práticas de ensino e laboratório.\n\nO currículo abrange mecânica, termodinâmica, eletromagnetismo, óptica, física moderna e metodologias de ensino de ciências. Os encontros presenciais incluem laboratórios de física experimental e práticas de regência, complementando a formação teórica online.",
    perfilProfissional: "Para quem tem afinidade com ciências exatas e interesse genuíno em ensinar, inspirar alunos e contribuir para a formação científica da sociedade. O licenciado combina domínio do conteúdo com sensibilidade pedagógica.",
    mercadoDeTrabalho: "A demanda por professores de Física supera a oferta em todo o país. Atuação em escolas públicas e privadas, cursinhos, plataformas de ensino online e concursos do magistério garantem boa empregabilidade.",
    areaDeAtuacao: ["Docência no ensino médio e técnico", "Educação científica e STEM", "Ensino online e plataformas educacionais", "Pesquisa em ensino de física", "Tutoria e reforço escolar"]
  },

  "matematica-semipresencial": {
    slug: "matematica", modalidade: "Semipresencial", nome: "Matemática",
    duracao: "4 Anos", tipoGrau: "Licenciatura", area: "Educação",
    descricao: "A Licenciatura em Matemática Semipresencial forma professores com sólido domínio matemático e competências pedagógicas para a educação básica. O formato combina aulas teóricas online com encontros presenciais para práticas de ensino, laboratórios e estágio supervisionado.\n\nO currículo contempla cálculo, álgebra, geometria, estatística, probabilidade e didática da matemática. Os encontros presenciais desenvolvem habilidades de regência, trabalho com material concreto e aplicação de metodologias ativas no ensino.",
    perfilProfissional: "Para quem tem facilidade com raciocínio lógico e deseja transmitir esse conhecimento de forma acessível e motivadora. O licenciado tem perfil analítico, paciente e comprometido com o desenvolvimento dos alunos.",
    mercadoDeTrabalho: "Professores de Matemática têm demanda superior à oferta em todo o Brasil, especialmente na rede pública. Concursos do magistério, escolas privadas, cursinhos e plataformas de educação online são as principais saídas da carreira.",
    areaDeAtuacao: ["Docência no ensino fundamental e médio", "Educação especial e inclusiva", "Reforço escolar e tutoria online", "Ensino técnico e profissionalizante", "Pesquisa em educação matemática"]
  },

  "pedagogia-semipresencial": {
    slug: "pedagogia", modalidade: "Semipresencial", nome: "Pedagogia",
    duracao: "4 Anos", tipoGrau: "Licenciatura", area: "Educação",
    descricao: "O curso de Pedagogia Semipresencial forma educadores comprometidos com o desenvolvimento humano na educação básica, combinando aulas online com encontros presenciais em escolas parceiras e estágios supervisionados. A formação integra teoria educacional a práticas pedagógicas contemporâneas e inclusivas.\n\nO currículo abrange psicologia da educação, didática, alfabetização, gestão escolar, legislação educacional e estágio curricular supervisionado. Os mais de 500 polos de apoio presencial garantem vivências escolares reais e fundamentais à formação.",
    perfilProfissional: "Para quem tem sensibilidade humana e interesse em contribuir para a formação de crianças e jovens. O pedagogo combina planejamento, criatividade e compromisso com uma educação de qualidade para todos.",
    mercadoDeTrabalho: "Pedagogos atuam em escolas, coordenação pedagógica, gestão escolar, EJA, empresas e projetos sociais. A carreira tem estabilidade por meio de concursos do magistério e oportunidades em todo o território nacional.",
    areaDeAtuacao: ["Docência na educação infantil e anos iniciais", "Coordenação e orientação pedagógica", "Gestão e direção escolar", "Educação de Jovens e Adultos", "Pedagogia corporativa e treinamento"]
  },

  /* ═══════════════════════════════════════
     SEMIPRESENCIAL — CIÊNCIAS SOCIAIS
  ═══════════════════════════════════════ */
  "servico-social-semipresencial": {
    slug: "servico-social", modalidade: "Semipresencial", nome: "Serviço Social",
    duracao: "4 Anos", tipoGrau: "Bacharelado", area: "Ciências Sociais",
    descricao: "O curso de Serviço Social Semipresencial forma assistentes sociais comprometidos com a defesa de direitos e a promoção da cidadania. O modelo combina aulas teóricas online com estágios presenciais obrigatórios em equipamentos sociais, garantindo a formação prática indispensável à profissão.\n\nO currículo abrange política social, ética profissional, psicologia social, legislação social e metodologias de intervenção, com estágio supervisionado em CRAS, CREAS, hospitais e organizações sociais parceiras. O egresso está habilitado para o CFESS.",
    perfilProfissional: "Para quem tem compromisso com a justiça social e interesse em contribuir para a transformação de realidades vulneráveis. O assistente social tem vocação para escuta, mediação e articulação de redes de proteção.",
    mercadoDeTrabalho: "O assistente social atua em hospitais, escolas, CRAS, CREAS, empresas, prefeituras e ONGs. A profissão tem demanda constante e crescente, especialmente com a ampliação das políticas sociais nos setores público e privado.",
    areaDeAtuacao: ["Assistência social e proteção à vulnerabilidade", "Saúde pública e hospitalar", "Políticas públicas e programas sociais", "ONGs e terceiro setor", "Serviço social empresarial e corporativo"]
  }

};
