/**
 * Áreas de atuação com conteúdo por slug
 * Estruturado em 3 categorias principais
 */

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  topics: string[];
  cta: string;
  featured?: boolean;
  category: 'empresas' | 'agentes-publicos' | 'pessoal';
}

export interface AreaCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon?: string;
}

export const areaCategories: AreaCategory[] = [
  {
    id: 'empresas',
    slug: 'empresas',
    title: 'Atendimento às Empresas',
    description: 'Assessoria jurídica completa para empresas, com atuação estratégica, próxima e orientada à realidade de cada negócio, abrangendo as áreas cível e tributária, com ênfase na recuperação de ativos, obrigações contratuais, licitações e contratos públicos, atuação perante Tribunais de Contas, além de defesa em ações civis públicas e de improbidade administrativa.',
  },
  {
    id: 'agentes-publicos',
    slug: 'agentes-publicos',
    title: 'Agentes Públicos e Políticos',
    description: 'Em um ambiente de controle rigoroso e constante exposição, oferecemos suporte jurídico estratégico e personalizado, com foco na defesa de gestores e servidores em ações civis públicas e de improbidade administrativa, além de atuação completa perante os Tribunais de Contas.',
  },
  {
    id: 'pessoal',
    slug: 'pessoal',
    title: 'Soluções Pessoais e Patrimoniais',
    description: 'Atuação jurídica direcionada à pessoa física, com foco na proteção patrimonial e na segurança das relações privadas. Oferecemos suporte em inventários e planejamento sucessório, elaboração e revisão de contratos, regularização de bens, além de atuação em cobranças, execuções e questões obrigacionais.',
  },
];

export const practiceAreas: PracticeArea[] = [
  // === ATENDIMENTO ÀS EMPRESAS ===
  {
    id: 'emp-civel',
    slug: 'civel-empresarial',
    title: 'Cível Consultivo e Contencioso',
    shortDescription: 'Suporte completo em todas as esferas do direito civil, desde o planejamento de iniciativas empresariais até a superação de impasses contratuais.',
    fullDescription: `Contratos bem elaborados garantem a robustez de uma organização. Nesse contexto, oferecemos um suporte completo em todas as esferas do direito civil, desde o planejamento de iniciativas empresariais até a superação de impasses contratuais, incluindo a atuação estratégica na recuperação de ativos.

Nossa expertise abrange a minuciosa redação e revisão de contratos de natureza privada, garantindo que cada cláusula reflita os interesses dos clientes, ao mesmo tempo em que confere máxima segurança jurídica e plena conformidade com a legislação vigente.`,
    topics: [
      'Redação e revisão de contratos',
      'Recuperação de ativos',
      'Planejamento de iniciativas empresariais',
      'Resolução de impasses contratuais',
      'Consultoria preventiva',
      'Conformidade com a legislação vigente'
    ],
    cta: 'Consultar sobre questões cíveis empresariais',
    featured: true,
    category: 'empresas'
  },
  {
    id: 'emp-licitacoes',
    slug: 'licitacoes-contratos-publicos',
    title: 'Licitações e Contratos Públicos',
    shortDescription: 'Assessoria jurídica completa em processos licitatórios e contratos com o poder público para empresas que querem escalar com solidez no setor público.',
    fullDescription: `Atuar como fornecedor da administração pública pode ser simples quando há orientação adequada. Prestamos assessoria jurídica completa em processos licitatórios, contratos com o poder público e em outras questões administrativas do dia a dia.

Nossa atuação vai desde a impugnação de editais, análise prévia da documentação, recursos, defesa em processos administrativos, pleitos de reequilíbrio, dentre outros. Atuamos ao lado de empresas que querem escalar com solidez no setor público, vencer e executar contratos públicos com segurança, estratégia e conformidade.`,
    topics: [
      'Impugnação de editais',
      'Análise prévia de documentação',
      'Recursos administrativos',
      'Defesa em processos administrativos',
      'Pleitos de reequilíbrio econômico-financeiro',
      'Execução de contratos públicos',
      'Compliance em licitações'
    ],
    cta: 'Consultar sobre licitações',
    featured: true,
    category: 'empresas'
  },
  {
    id: 'emp-improbidade',
    slug: 'improbidade-empresas',
    title: 'Ações Civis Públicas / Improbidade Administrativa',
    shortDescription: 'Atuação singular em negociações de ANPC e elaboração de defesas técnicas e estratégicas em todas as instâncias judiciais.',
    fullDescription: `A complexidade e impactos decorrentes das ações civis públicas e de improbidade administrativa para as empresas e sócios, exigem domínio técnico, experiência e uma atuação singular, caso a caso.

Atuamos em negociações e mediações de Acordo de Não Persecução Cível (ANPC), bem como na elaboração de defesas técnicas e estratégicas em todas as instâncias judiciais, garantindo a segurança dos interesses de nossos clientes.`,
    topics: [
      'Acordo de Não Persecução Cível (ANPC)',
      'Defesa em ações de improbidade',
      'Ações civis públicas',
      'Recursos em todas as instâncias',
      'Negociações e mediações',
      'Proteção de sócios e administradores'
    ],
    cta: 'Solicitar avaliação de defesa',
    featured: false,
    category: 'empresas'
  },
  {
    id: 'emp-penal',
    slug: 'penal-empresarial',
    title: 'Penal Empresarial',
    shortDescription: 'Proteção estratégica do empresário diante de riscos criminais que podem surgir da rotina corporativa.',
    fullDescription: `A atuação penal empresarial é voltada à proteção estratégica do empresário diante de riscos criminais que podem surgir da rotina corporativa, especialmente quando há contratações com o Poder Público, participação em licitações e execução de contratos administrativos.

Nossa equipe alia experiência técnica e visão de negócio para atuar de forma preventiva e contenciosa, com foco em reduzir exposições, preservar a continuidade das operações e proteger a reputação de sócios e administradores.`,
    topics: [
      'Defesa em crimes empresariais',
      'Atuação preventiva',
      'Proteção em contratações públicas',
      'Preservação da continuidade operacional',
      'Proteção de reputação',
      'Consultoria em compliance criminal'
    ],
    cta: 'Consultar sobre questões penais empresariais',
    featured: false,
    category: 'empresas'
  },

  // === AGENTES PÚBLICOS E POLÍTICOS ===
  {
    id: 'pub-improbidade',
    slug: 'improbidade-agentes-publicos',
    title: 'Ações Civis Públicas / Improbidade / Ressarcimento',
    shortDescription: 'Referência na defesa de agentes públicos e políticos em Ações Civis Públicas e de Improbidade Administrativa com mais de 20 anos de atuação.',
    fullDescription: `Com uma trajetória sólida de 20 anos de atuação e um histórico comprovado de êxitos, somos referência na defesa de agentes públicos e políticos em Ações Civis Públicas e de Improbidade Administrativa.

Compreendemos profundamente os gravíssimos riscos políticos e financeiros que essas ações representam, podendo culminar em inelegibilidade, perda do cargo, suspensão de direitos políticos, ressarcimento, e multas vultosas.

Nossa equipe especializada oferece uma atuação jurídica completa, acompanhando desde inquéritos civis, negociações de Acordos de Não Persecução Cível (ANPC), até a elaboração de defesas estratégicas e recursos em todas as instâncias judiciais.`,
    topics: [
      'Defesa em ações de improbidade',
      'Inquéritos civis',
      'Acordo de Não Persecução Cível (ANPC)',
      'Ações de ressarcimento ao erário',
      'Recursos em todas as instâncias',
      'Proteção contra inelegibilidade',
      'Defesa de direitos políticos'
    ],
    cta: 'Agendar consulta confidencial',
    featured: true,
    category: 'agentes-publicos'
  },
  {
    id: 'pub-servidores',
    slug: 'servidores-publicos',
    title: 'Servidores Públicos',
    shortDescription: 'Atendimento completo e estratégico em todas as matérias que afetam a carreira do servidor público.',
    fullDescription: `Para o servidor público, seja ele federal, estadual ou municipal, a vida funcional é um universo de direitos e deveres que exigem atenção jurídica especializada.

Oferecemos atendimento completo e estratégico em todas as matérias que afetam sua carreira, desde a orientação em concursos públicos, passando pela defesa em processos administrativos disciplinares (PADs) e sindicâncias, até a revisão e garantia de seus direitos em relação a vencimentos, licenças, promoções e progressões funcionais.

Sabemos que a defesa de sua estabilidade e integridade funcional é primordial, e atuamos incisivamente para preservar seus direitos e assegurar um futuro profissional tranquilo e justo.`,
    topics: [
      'Processos Administrativos Disciplinares (PAD)',
      'Sindicâncias',
      'Orientação em concursos públicos',
      'Revisão de vencimentos',
      'Promoções e progressões funcionais',
      'Licenças e benefícios',
      'Defesa da estabilidade funcional'
    ],
    cta: 'Agendar consulta sobre direitos',
    featured: false,
    category: 'agentes-publicos'
  },
  {
    id: 'pub-tribunais',
    slug: 'tribunais-contas-gestores',
    title: 'Tribunais de Contas',
    shortDescription: 'Ampla experiência nos Tribunais de Contas com atuação técnica irretocável para agentes públicos e políticos.',
    fullDescription: `A gestão pública está sob constante monitoramento dos Tribunais de Contas, e a complexidade de suas exigências demanda uma atuação técnica irretocável.

Nossa ampla experiência nos Tribunais de Contas Municipais, Estaduais e da União, é um diferencial crucial para agentes públicos e políticos. Oferecemos suporte jurídico em processos de Prestação de Contas, representações, denúncias e tomadas de contas especiais/extraordinárias.

Estamos cientes dos significativos riscos políticos e financeiros advindos desses processos, que podem resultar em rejeição de contas, multas e outras sanções graves. Nossa assessoria jurídica especializada é fundamental para mitigar esses riscos, assegurando conformidade e defendendo seus interesses com a máxima diligência e conhecimento técnico.

Nossa equipe está preparada para antecipar cenários, construir defesas sólidas e buscar as melhores soluções.`,
    topics: [
      'Prestação de contas',
      'Representações e denúncias',
      'Tomadas de contas especiais',
      'Tomadas de contas extraordinárias',
      'Defesa contra rejeição de contas',
      'Mitigação de multas e sanções',
      'Consultoria em conformidade'
    ],
    cta: 'Falar sobre sua questão no Tribunal de Contas',
    featured: false,
    category: 'agentes-publicos'
  },
  {
    id: 'pub-eleitoral',
    slug: 'direito-eleitoral',
    title: 'Direito Eleitoral',
    shortDescription: 'Duas décadas de experiência em campanhas eleitorais com atuação próxima, estratégica e personalizada.',
    fullDescription: `O desejo de concorrer a uma eleição vai muito além de uma candidatura, é um projeto que envolve história, propósito e uma trajetória que precisa ser protegida em cada etapa.

Em um ambiente jurídico rigoroso e dinâmico, decisões equivocadas ou a ausência de orientação especializada podem comprometer não apenas o resultado das urnas, mas toda uma trajetória política. Por isso, a atuação jurídica eleitoral não é acessória — é parte essencial da estratégia.

Há duas décadas atuando em campanhas eleitorais, desenvolvemos uma atuação próxima, estratégica e personalizada, entendendo que cada cliente, cada campanha e cada cenário exigem soluções próprias, não modelos prontos.

**NA PRÉ-CAMPANHA**, organizamos o caminho com segurança, orientando cada decisão desde o início, com atuação próxima à coordenação de campanha, participação em reuniões estratégicas, antecipando riscos, evitando multas e preparando a candidatura para avançar com solidez até o momento do registro.

**DURANTE A CAMPANHA**, atuamos de forma decisiva em representações eleitorais, especialmente nas relacionadas à propaganda irregular, direito de resposta, pesquisas eleitorais, gastos de campanha (prestação de contas parciais), além do suporte jurídico em ações de maior complexidade, tais como Ações de Investigação Judicial Eleitoral (AIJE) por abuso de poder político e econômico, área em que acumulamos atuação consistente e resultados expressivos, sempre com estratégia bem definida, precisão técnica e rigor no controle dos impactos sobre a candidatura e a campanha.

**NO PÓS-CAMPANHA**, atuamos com atenção aos detalhes, no processo de prestação de contas, enfrentando questionamentos de forma técnica e segura, além de demandas como Recursos Contra a Expedição de Diploma (RCD) e Ações de Impugnação de Mandato Eletivo (AIME), sempre com abordagem técnica para resguardar o exercício do mandato.

Mais do que assessorar campanhas eleitorais, nos dedicamos a compreender o que está em jogo em cada projeto político. A partir disso, construímos caminhos seguros, sem atalhos ou improvisos.

Com método, presença e responsabilidade, atuamos para que cada decisão contribua, de forma consistente, para a solidez de sua trajetória política.`,
    topics: [
      'Assessoria em pré-campanha',
      'Registro de candidaturas',
      'Propaganda eleitoral',
      'Direito de resposta',
      'Pesquisas eleitorais',
      'Prestação de contas de campanha',
      'AIJE - Abuso de poder político e econômico',
      'AIME - Impugnação de mandato eletivo',
      'Recursos Contra Expedição de Diploma (RCD)',
      'Assessoria pós-eleição'
    ],
    cta: 'Falar com especialista em Direito Eleitoral',
    featured: true,
    category: 'agentes-publicos'
  },

  // === SOLUÇÕES PESSOAIS E PATRIMONIAIS ===
  {
    id: 'pes-civel',
    slug: 'civel-pessoal',
    title: 'Cível Consultivo e Contencioso',
    shortDescription: 'Suporte completo para pessoa física desde planejamento patrimonial e sucessório até questões contratuais do dia a dia.',
    fullDescription: `Cuidar das decisões que envolvem patrimônio, família e responsabilidades pessoais exige mais do que orientação jurídica — exige clareza, estratégia e segurança. É com esse olhar que atuamos ao lado da pessoa física, oferecendo suporte completo desde o planejamento patrimonial e sucessório (inventário, testamento e demais medidas correlatas) até a condução de questões contratuais e obrigações do dia a dia (como ações de cobrança, execuções e revisões contratuais).

Com atenção às particularidades de cada caso e aos interesses envolvidos, estruturamos soluções seguras e adequadas à realidade do cliente. Quando surgem conflitos, conduzimos as demandas judiciais com firmeza e estratégia, buscando soluções eficazes e equilibradas, com foco na preservação do patrimônio e na tranquilidade nas relações pessoais e familiares.`,
    topics: [
      'Inventário e partilha',
      'Planejamento sucessório',
      'Testamentos',
      'Elaboração e revisão de contratos',
      'Ações de cobrança',
      'Execuções',
      'Regularização de bens',
      'Proteção patrimonial'
    ],
    cta: 'Consultar sobre questões pessoais e patrimoniais',
    featured: false,
    category: 'pessoal'
  },
];

export function getAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find(area => area.slug === slug);
}

export function getFeaturedAreas(): PracticeArea[] {
  return practiceAreas.filter(area => area.featured);
}

export function getAreasByCategory(category: PracticeArea['category']): PracticeArea[] {
  return practiceAreas.filter(area => area.category === category);
}

export function getCategoryById(id: string): AreaCategory | undefined {
  return areaCategories.find(cat => cat.id === id);
}
