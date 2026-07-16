import { Post, PostCategory } from './posts';

const FEED_URL = 'https://blog.buligonadvogados.adv.br/feed/';
const REVALIDATE_SECONDS = 3600;

function extractCdata(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([^<]*))<\\/${tag}>`, 'i'));
  if (!match) return '';
  return (match[1] ?? match[2] ?? '').trim();
}

function extractAttr(xml: string, tag: string, attr: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*\\s${attr}=["']([^"']+)["'][^>]*>`, 'i'));
  return match ? match[1] : '';
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();
}

function estimateReadingTime(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function slugFromUrl(url: string): string {
  return url.replace(/\/$/, '').split('/').pop() ?? url;
}

function mapCategory(wpCategory: string): PostCategory {
  const cat = wpCategory.toLowerCase();
  if (cat.includes('eleitoral')) return 'direito-eleitoral';
  if (cat.includes('licitaç') || cat.includes('licitac')) return 'licitacoes';
  if (cat.includes('improbidade')) return 'improbidade';
  if (cat.includes('tribunal') || cat.includes('contas')) return 'tribunais-contas';
  if (cat.includes('empresa')) return 'direito-empresarial';
  if (cat.includes('público') || cat.includes('publico') || cat.includes('administrativo')) return 'direito-publico';
  return 'institucional';
}

function parseItem(itemXml: string, index: number): Post {
  const title = stripHtml(extractCdata(itemXml, 'title'));
  const link = extractCdata(itemXml, 'link') || itemXml.match(/<link>([^<]+)<\/link>/)?.[1]?.trim() || '';
  const pubDate = extractCdata(itemXml, 'pubDate');
  const descriptionHtml = extractCdata(itemXml, 'description');
  const contentHtml = extractCdata(itemXml, 'content:encoded') || descriptionHtml;

  const excerpt = stripHtml(descriptionHtml).slice(0, 300).trim();

  // Featured image: try media:content, then enclosure, then first img in content
  let coverImage: string | undefined;
  const mediaContent = extractAttr(itemXml, 'media:content', 'url');
  const enclosure = extractAttr(itemXml, 'enclosure', 'url');
  const imgInContent = contentHtml.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  coverImage = mediaContent || enclosure || imgInContent || undefined;

  const categoryMatch = itemXml.match(/<category(?:[^>]*)>(?:<!\[CDATA\[)?([^\]<]+)(?:\]\]>)?<\/category>/i);
  const wpCategory = categoryMatch ? categoryMatch[1].trim() : '';

  const publishedAt = pubDate ? new Date(pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

  return {
    id: String(index + 1),
    slug: slugFromUrl(link),
    title,
    excerpt,
    content: contentHtml,
    coverImage,
    author: { name: 'Buligon Advogados' },
    category: mapCategory(wpCategory),
    tags: wpCategory ? [wpCategory] : [],
    publishedAt,
    readingTime: estimateReadingTime(stripHtml(contentHtml) || excerpt),
    featured: index === 0,
    status: 'published',
    url: link,
  };
}

export async function getRssPosts(limit = 3): Promise<Post[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { 'User-Agent': 'Buligon-Site/1.0' },
    });

    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);

    const xml = await res.text();
    const items = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) ?? [];

    return items.slice(0, limit).map((item, i) => parseItem(item, i));
  } catch (err) {
    console.error('Failed to fetch RSS feed:', err);
    return [];
  }
}
