/**
 * Áreas de atuação com conteúdo por slug
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
}

export const practiceAreas: PracticeArea[] = [
  {
    id: '4',
    slug: 'direito-eleitoral',
    title: 'Direito Eleitoral',
    shortDescription: 'Assessoria jurídica estratégica para candidatos, partidos e gestores públicos em todo o ciclo eleitoral.',
    fullDescription: `O Direito Eleitoral é a espinha dorsal de nossa atuação. Oferecemos suporte jurídico especializado e multidisciplinar para candidatos, partidos políticos e coligações. Nossa expertise abrange desde o registro de candidatura e consultoria preventiva em propaganda eleitoral até a defesa em ações de investigação judicial eleitoral e prestação de contas.`,
    topics: [
      'Registro de candidaturas e impugnações',
      'Consultoria estratégica em propaganda eleitoral',
      'Defesa em AIJE, AIME e Representações',
      'Assessoria em arrecadação e gastos de campanha',
      'Prestação de contas eleitorais e partidárias',
      'Suporte jurídico em convenções partidárias',
      'Recursos perante os Tribunais Regionais e TSE'
    ],
    cta: 'Falar com especialista em Direito Eleitoral',
    featured: true
  },
  {
    id: '1',
    slug: 'direito-constitucional',
    title: 'Direito Constitucional',
    shortDescription: 'Assessoria em questões constitucionais, direitos fundamentais e controle de constitucionalidade.',
    fullDescription: `Nosso escritório oferece assessoria especializada em direito constitucional, com atuação estratégica em interpretação constitucional, defesa de direitos fundamentais e representação em processos constitucionais. Contamos com experiência em demandas complexas envolvendo litígios constitucionais e consultoria preventiva.`,
    topics: [
      'Interpretação constitucional e jurisprudência',
      'Defesa de direitos fundamentais',
      'Controle de constitucionalidade de leis',
      'Mandado de segurança e mandado de injunção',
      'Arguição de descumprimento de preceito fundamental (ADPF)',
      'Assessoria em questões constitucionais estratégicas'
    ],
    cta: 'Solicitar análise constitucional',
    featured: true
  },
  {
    id: '2',
    slug: 'direito-administrativo',
    title: 'Direito Administrativo',
    shortDescription: 'Expertise em licitações, contratos administrativos, recursos administrativos e auditoria jurídica.',
    fullDescription: `Atuamos na defesa dos interesses de órgãos públicos e privados perante administração pública. Oferecemos consultoria em processos administrativos, recursos e impugnações, com ênfase em segurança jurídica e conformidade regulatória.`,
    topics: [
      'Processos administrativos e defesa técnica',
      'Recursos administrativos e hierárquicos',
      'Auditoria jurídica de procedimentos',
      'Consultoria em conformidade administrativa',
      'Defesa em órgãos de controle',
      'Análise de atos administrativos'
    ],
    cta: 'Consultar sobre sua demanda administrativa',
    featured: true
  },
  {
    id: '3',
    slug: 'direito-tributario',
    title: 'Direito Tributário',
    shortDescription: 'Especialização em planejamento tributário, contencioso fiscal e consultoria em impostos.',
    fullDescription: `Prestamos consultoria tributária estratégica para redução de carga fiscal legal e defesa em contencioso. Nossa equipe atua em auditorias fiscais, processos administrativos tributários e planejamento estruturado.`,
    topics: [
      'Planejamento tributário estratégico',
      'Auditoria fiscal e defesa técnica',
      'Processos administrativos tributários',
      'Imposto de Renda, ICMS e IPI',
      'Consultoria em benefícios fiscais',
      'Litígios tributários em todos os níveis'
    ],
    cta: 'Agendar consultoria tributária',
    featured: false
  },
  {
    id: '5',
    slug: 'direito-empresarial',
    title: 'Direito Empresarial',
    shortDescription: 'Suporte em constituição de empresas, contratos comerciais e governança corporativa.',
    fullDescription: `Atuamos em todas as fases da vida de uma empresa, desde a constituição até questões complexas de governança corporativa, fusões e aquisições, e litígios comerciais.`,
    topics: [
      'Constituição e registro de empresas',
      'Elaboração de contratos comerciais',
      'Governança corporativa e compliance',
      'Fusões e aquisições',
      'Negociações comerciais',
      'Consultoria empresarial estratégica'
    ],
    cta: 'Consultar sobre questões empresariais',
    featured: false
  },
  {
    id: '6',
    slug: 'agentes-politicos',
    title: 'Atuação para Agentes Políticos',
    shortDescription: 'Defesa especializada de mandatários e servidores públicos em processos administrativos e judiciais.',
    fullDescription: `Oferecemos consultoria completa e defesa técnica para agentes políticos em processos administrativos, investigações de órgãos de controle e litígios judiciais. Segurança jurídica e sigilo são prioridades.`,
    topics: [
      'Defesa em processos administrativos',
      'Representação em órgãos de controle',
      'Estratégia em investigações',
      'Assessoria sobre imunidades e prerrogativas',
      'Consultoria em conflitos de interesse',
      'Defesa de honra e imagem'
    ],
    cta: 'Agendar consulta confidencial',
    featured: false
  },
  {
    id: '7',
    slug: 'tribunais-de-contas',
    title: 'Tribunais de Contas',
    shortDescription: 'Atuação estratégica perante Tribunais de Contas em questões de controle e fiscalização.',
    fullDescription: `Especialização em processos perante Tribunais de Contas da União, Estaduais e Municipais. Defesa em auditorias, denúncias e processos de responsabilização com foco em conformidade.`,
    topics: [
      'Defesa em processos de contas',
      'Auditoria operacional e de conformidade',
      'Representação em processos especiais',
      'Consultoria em relatórios e pareceres',
      'Acompanhamento de denúncias',
      'Estratégia preventiva de compliance'
    ],
    cta: 'Falar sobre sua questão no Tribunal de Contas',
    featured: false
  },
  {
    id: '8',
    slug: 'improbidade-administrativa',
    title: 'Improbidade Administrativa',
    shortDescription: 'Defesa estratégica em ações de improbidade e ressarcimento ao erário.',
    fullDescription: `Atuação especializada na defesa de gestores e servidores públicos em ações de improbidade administrativa. Estratégia processual robusta e análise técnica detalhada para proteção patrimonial e moral.`,
    topics: [
      'Defesa em ações de improbidade',
      'Contestação de denúncias',
      'Recursos em procedimentos administrativos',
      'Análise de tipificação de atos',
      'Proteção patrimonial e de direitos',
      'Negociação de acordos'
    ],
    cta: 'Solicitar avaliação de defesa',
    featured: false
  },
  {
    id: '9',
    slug: 'servidores-publicos',
    title: 'Servidores Públicos',
    shortDescription: 'Consultoria em regime estatutário, remuneração, aposentadoria e direitos funcionais.',
    fullDescription: `Oferecemos assessoria completa a servidores públicos em questões estatutárias, previdenciárias, de remuneração e direitos funcionais. Defesa em processos disciplinares e consultoria preventiva.`,
    topics: [
      'Consultoria em regime estatutário',
      'Processos disciplinares e PAD',
      'Direitos previdenciários',
      'Questões de remuneração e benefícios',
      'Aposentadoria e pensão',
      'Negociação de direitos funcionais'
    ],
    cta: 'Agendar consulta sobre direitos',
    featured: false
  },
  {
    id: '10',
    slug: 'licitacoes-e-contratos',
    title: 'Licitações e Contratos',
    shortDescription: 'Expertise em procedimentos licitatórios, contratos administrativos e parcerias público-privadas.',
    fullDescription: `Acompanhamos processos licitatórios desde o planejamento até a execução contratual. Consultoria em adequação normativa, contestações de licitações e compliance contratual.`,
    topics: [
      'Planejamento de licitações',
      'Elaboração de edital e especificações técnicas',
      'Recurso em procedimentos licitatórios',
      'Contratos administrativos',
      'Parcerias público-privadas (PPP)',
      'Fiscalização e conformidade contratual'
    ],
    cta: 'Consultar sobre licitações',
    featured: false
  },
];

export function getAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find(area => area.slug === slug);
}

export function getFeaturedAreas(): PracticeArea[] {
  return practiceAreas.filter(area => area.featured);
}
