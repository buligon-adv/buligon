import { Post, PostCategory } from './posts';

const API_URL = 'https://blog.buligonadvogados.adv.br/wp-json/wp/v2/posts';
const REVALIDATE_SECONDS = 3600;

interface WpPost {
  id: number;
  slug: string;
  link: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url?: string }>;
    'wp:term'?: Array<Array<{ name: string }>>;
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();
}

function estimateReadingTime(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function mapCategory(name: string): PostCategory {
  const cat = name.toLowerCase();
  if (cat.includes('eleitoral')) return 'direito-eleitoral';
  if (cat.includes('licitaç') || cat.includes('licitac')) return 'licitacoes';
  if (cat.includes('improbidade')) return 'improbidade';
  if (cat.includes('tribunal') || cat.includes('contas')) return 'tribunais-contas';
  if (cat.includes('empresa')) return 'direito-empresarial';
  if (cat.includes('público') || cat.includes('publico') || cat.includes('administrativo') || cat.includes('municipal')) return 'direito-publico';
  return 'institucional';
}

function wpPostToPost(wp: WpPost, index: number): Post {
  const title = stripHtml(wp.title.rendered);
  const excerpt = stripHtml(wp.excerpt.rendered).slice(0, 300).trim();
  const contentText = stripHtml(wp.content.rendered);

  const coverImage = wp._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  const categories = wp._embedded?.['wp:term']?.[0] ?? [];
  const firstCategory = categories[0]?.name ?? '';

  return {
    id: String(wp.id),
    slug: wp.slug,
    title,
    excerpt,
    content: wp.content.rendered,
    coverImage,
    author: { name: 'Buligon Advogados' },
    category: mapCategory(firstCategory),
    tags: categories.map((c) => c.name),
    publishedAt: wp.date.split('T')[0],
    readingTime: estimateReadingTime(contentText),
    featured: index === 0,
    status: 'published',
    url: wp.link,
  };
}

export async function getRssPosts(limit = 3): Promise<Post[]> {
  try {
    const res = await fetch(`${API_URL}?per_page=${limit}&_embed=true`, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { 'User-Agent': 'Buligon-Site/1.0' },
    });

    if (!res.ok) throw new Error(`WP API fetch failed: ${res.status}`);

    const data: WpPost[] = await res.json();
    return data.map((wp, i) => wpPostToPost(wp, i));
  } catch (err) {
    console.error('Failed to fetch blog posts:', err);
    return [];
  }
}
