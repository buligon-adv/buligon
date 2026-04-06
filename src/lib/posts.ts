/**
 * Estrutura de dados para posts do blog
 * Preparado para integração com CMS (Sanity, Strapi, etc.)
 */

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  category: PostCategory;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: number; // em minutos
  featured?: boolean;
  status: 'draft' | 'published' | 'scheduled';
}

export type PostCategory = 
  | 'direito-publico'
  | 'direito-empresarial'
  | 'direito-eleitoral'
  | 'tribunais-contas'
  | 'improbidade'
  | 'licitacoes'
  | 'institucional';

export const categoryLabels: Record<PostCategory, string> = {
  'direito-publico': 'Direito Público',
  'direito-empresarial': 'Direito Empresarial',
  'direito-eleitoral': 'Direito Eleitoral',
  'tribunais-contas': 'Tribunais de Contas',
  'improbidade': 'Improbidade Administrativa',
  'licitacoes': 'Licitações',
  'institucional': 'Institucional',
};

export const categoryColors: Record<PostCategory, string> = {
  'direito-publico': 'bg-blue-100 text-blue-800',
  'direito-empresarial': 'bg-emerald-100 text-emerald-800',
  'direito-eleitoral': 'bg-purple-100 text-purple-800',
  'tribunais-contas': 'bg-amber-100 text-amber-800',
  'improbidade': 'bg-red-100 text-red-800',
  'licitacoes': 'bg-cyan-100 text-cyan-800',
  'institucional': 'bg-gray-100 text-gray-800',
};

// Posts de exemplo - serão substituídos por dados do CMS
export const posts: Post[] = [
  {
    id: '1',
    slug: 'nova-lei-licitacoes-principais-mudancas',
    title: 'Nova Lei de Licitações: as principais mudanças que você precisa conhecer',
    excerpt: 'A Lei nº 14.133/2021 trouxe mudanças significativas para o processo licitatório. Entenda os principais pontos e como se adequar às novas regras.',
    content: `
## Introdução

A Nova Lei de Licitações e Contratos Administrativos (Lei nº 14.133/2021) representa uma das maiores reformas no sistema de contratações públicas brasileiro desde a Lei 8.666/1993.

## Principais Mudanças

### 1. Modalidades de Licitação

A nova lei simplificou as modalidades, consolidando-as em:
- **Pregão** (eletrônico como regra)
- **Concorrência**
- **Concurso**
- **Leilão**
- **Diálogo Competitivo** (nova modalidade)

### 2. Critérios de Julgamento

Os critérios foram ampliados para incluir:
- Menor preço
- Maior desconto
- Melhor técnica ou conteúdo artístico
- Técnica e preço
- Maior lance (leilão)
- Maior retorno econômico

### 3. Compliance e Integridade

A nova lei dá maior ênfase a programas de integridade, especialmente para contratos de grande vulto.

## Como se Preparar

É fundamental que as empresas revisem seus processos internos e busquem assessoria jurídica especializada para garantir conformidade com as novas regras.

## Conclusão

A transição para a nova lei requer planejamento e conhecimento técnico. O Buligon Advogados está preparado para auxiliar sua empresa nesse processo.
    `,
    coverImage: '/blog/licitacoes.jpg',
    author: {
      name: 'Equipe Buligon',
      role: 'Direito Administrativo',
    },
    category: 'licitacoes',
    tags: ['licitações', 'lei 14133', 'contratos públicos', 'compliance'],
    publishedAt: '2024-03-15',
    readingTime: 8,
    featured: true,
    status: 'published',
  },
  {
    id: '2',
    slug: 'defesa-agentes-publicos-tribunais-contas',
    title: 'Defesa de Agentes Públicos perante os Tribunais de Contas',
    excerpt: 'Estratégias e pontos de atenção na defesa de gestores e servidores em processos nos Tribunais de Contas.',
    content: `
## A Importância da Defesa Técnica

Os processos nos Tribunais de Contas podem resultar em consequências severas para os agentes públicos, incluindo multas, ressarcimento ao erário e até inabilitação para cargos públicos.

## Principais Tipos de Processos

### Tomada de Contas Especial

Instaurada quando há dano ao erário ou irregularidades graves na gestão de recursos públicos.

### Representação

Pode ser apresentada por qualquer cidadão, servidor ou órgão público para denunciar irregularidades.

### Auditoria

Fiscalização programada que avalia a legalidade, legitimidade e economicidade dos atos de gestão.

## Estratégias de Defesa

1. **Análise documental completa**
2. **Identificação de nulidades processuais**
3. **Demonstração de boa-fé**
4. **Comprovação de delegação de competências**
5. **Excludentes de responsabilidade**

## Conclusão

A defesa em processos nos Tribunais de Contas exige conhecimento técnico específico e experiência prática. Nossa equipe possui ampla atuação nessa área.
    `,
    author: {
      name: 'Equipe Buligon',
      role: 'Direito Público',
    },
    category: 'tribunais-contas',
    tags: ['tribunais de contas', 'agentes públicos', 'defesa', 'TCU', 'TCE'],
    publishedAt: '2024-02-28',
    readingTime: 6,
    featured: false,
    status: 'published',
  },
  {
    id: '3',
    slug: 'compliance-eleitoral-eleicoes-2024',
    title: 'Compliance Eleitoral: preparação para as Eleições',
    excerpt: 'O que candidatos e partidos precisam saber sobre compliance eleitoral e como evitar problemas na prestação de contas.',
    content: `
## O que é Compliance Eleitoral?

Compliance eleitoral é o conjunto de práticas e procedimentos adotados por candidatos, partidos e coligações para garantir conformidade com a legislação eleitoral.

## Principais Pontos de Atenção

### 1. Prestação de Contas

A prestação de contas de campanha deve ser realizada de forma detalhada e transparente, dentro dos prazos estabelecidos pela Justiça Eleitoral.

### 2. Financiamento de Campanha

Conhecer as fontes permitidas e vedadas de financiamento é essencial para evitar irregularidades.

### 3. Propaganda Eleitoral

As regras de propaganda são rigorosas e seu descumprimento pode gerar multas e até cassação do registro.

## Benefícios do Compliance

- Redução de riscos de impugnação
- Maior transparência
- Proteção do mandato

## Nossa Atuação

Oferecemos assessoria completa em direito eleitoral, desde a pré-campanha até a diplomação.
    `,
    author: {
      name: 'Equipe Buligon',
      role: 'Direito Eleitoral',
    },
    category: 'direito-eleitoral',
    tags: ['direito eleitoral', 'compliance', 'eleições', 'prestação de contas'],
    publishedAt: '2024-01-20',
    readingTime: 5,
    featured: true,
    status: 'published',
  },
];

// Funções auxiliares
export function getAllPosts(): Post[] {
  return posts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter(post => post.featured);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug && post.status === 'published');
}

export function getPostsByCategory(category: PostCategory): Post[] {
  return getAllPosts().filter(post => post.category === category);
}

export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  return getAllPosts()
    .filter(post => post.id !== currentPost.id)
    .filter(post => post.category === currentPost.category || post.tags.some(tag => currentPost.tags.includes(tag)))
    .slice(0, limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
