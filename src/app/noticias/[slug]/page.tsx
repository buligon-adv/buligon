import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import { siteConfig } from '@/lib/site';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';
import { 
  posts, 
  getPostBySlug, 
  getRelatedPosts, 
  categoryLabels, 
  formatDate 
} from '@/lib/posts';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts
    .filter(post => post.status === 'published')
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return generateSeoMetadata({
      title: 'Artigo não encontrado',
    });
  }

  return generateSeoMetadata({
    title: post.title,
    description: post.excerpt,
  });
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);

  // Função para renderizar markdown básico
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        elements.push(
          <p key={elements.length} className="text-gray-600 leading-relaxed mb-6">
            {currentParagraph.join(' ').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
          </p>
        );
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside space-y-2 mb-6 text-gray-600">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, idx) => {
      const trimmedLine = line.trim();

      // Heading 2
      if (trimmedLine.startsWith('## ')) {
        flushParagraph();
        flushList();
        elements.push(
          <h2 key={elements.length} className="text-2xl font-semibold text-navy mt-10 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
        return;
      }

      // Heading 3
      if (trimmedLine.startsWith('### ')) {
        flushParagraph();
        flushList();
        elements.push(
          <h3 key={elements.length} className="text-xl font-semibold text-navy mt-8 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
        return;
      }

      // List item
      if (trimmedLine.startsWith('- ')) {
        flushParagraph();
        inList = true;
        listItems.push(trimmedLine.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1'));
        return;
      }

      // Empty line
      if (trimmedLine === '') {
        flushParagraph();
        if (inList) flushList();
        return;
      }

      // Regular paragraph
      currentParagraph.push(trimmedLine);
    });

    flushParagraph();
    flushList();

    return elements;
  };

  return (
    <>
      {/* Hero do Artigo */}
      <section className="relative min-h-[50vh] flex items-center bg-navy overflow-hidden">
        {post.coverImage && (
          <div className="absolute inset-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
        <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze/30 to-transparent hidden lg:block" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-16 lg:py-20">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/noticias" className="hover:text-white transition-colors">Notícias</Link>
              <span>/</span>
              <span className="text-bronze">{categoryLabels[post.category]}</span>
            </nav>

            <span className="inline-block px-3 py-1 bg-bronze text-white text-xs font-semibold uppercase tracking-wider mb-6">
              {categoryLabels[post.category]}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-bronze/20 flex items-center justify-center">
                  <span className="text-bronze font-semibold text-sm">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <span className="block text-white font-medium">{post.author.name}</span>
                  {post.author.role && (
                    <span className="text-gray-500 text-xs">{post.author.role}</span>
                  )}
                </div>
              </div>
              <span>•</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>•</span>
              <span>{post.readingTime} min de leitura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do Artigo */}
      <Section className="!py-16">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </article>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <span className="text-sm text-gray-500 mr-4">Tags:</span>
              <div className="inline-flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Autor */}
          <div className="mt-12 p-8 bg-gray-50 border-l-4 border-bronze">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-navy flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-lg">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h4 className="text-navy font-semibold mb-1">{post.author.name}</h4>
                {post.author.role && (
                  <p className="text-bronze text-sm mb-3">{post.author.role}</p>
                )}
                <p className="text-gray-600 text-sm">
                  Artigo publicado pela equipe do Buligon Advogados, escritório especializado em Direito Público, Empresarial e Eleitoral.
                </p>
              </div>
            </div>
          </div>

          {/* Compartilhar */}
          <div className="mt-8 flex items-center justify-between">
            <Link
              href="/noticias"
              className="text-bronze font-semibold text-sm uppercase tracking-wider hover:underline"
            >
              ← Voltar para Notícias
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">Compartilhar:</span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + siteConfig.url + '/noticias/' + post.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-bronze hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteConfig.url + '/noticias/' + post.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-bronze hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Artigos Relacionados */}
      {relatedPosts.length > 0 && (
        <Section backgroundColor="bg-gray-50">
          <div className="mb-10">
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Continue Lendo</span>
            <h2 className="text-3xl font-semibold text-navy">Artigos Relacionados</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/noticias/${relatedPost.slug}`}
                className="group bg-white border border-gray-100 hover:border-bronze/40 transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  {relatedPost.coverImage ? (
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-navy/5">
                      <svg className="w-12 h-12 text-navy/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-bronze text-xs font-semibold uppercase tracking-wider">
                    {categoryLabels[relatedPost.category]}
                  </span>
                  <h3 className="text-lg font-semibold text-navy mt-2 mb-2 group-hover:text-bronze transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <span className="text-gray-400 text-xs">{relatedPost.readingTime} min de leitura</span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <CTA
        title="Precisa de orientação jurídica?"
        description="Entre em contato e fale com nossos especialistas."
        ctaText="Falar no WhatsApp"
        ctaHref={siteConfig.social.whatsapp}
      />
    </>
  );
}
