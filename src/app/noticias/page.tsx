import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import { siteConfig } from '@/lib/site';
import { generateMetadata } from '@/lib/seo';
import { getAllPosts, getFeaturedPosts, categoryLabels, formatDate } from '@/lib/posts';

export const metadata: Metadata = generateMetadata({
  title: 'Notícias e Artigos',
  description: 'Acompanhe as últimas notícias e atualizações jurídicas do Buligon Advogados.',
});

export default function NoticiasPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const regularPosts = allPosts.filter(post => !post.featured);

  return (
    <>
      <Hero
        title="Notícias e Artigos"
        subtitle="Atualizações jurídicas e análises especializadas"
      />

      {/* Posts em Destaque */}
      {featuredPosts.length > 0 && (
        <Section className="!py-16">
          <div className="mb-10">
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Destaques</span>
            <h2 className="text-3xl font-semibold text-navy">Artigos em Destaque</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post, idx) => (
              <Link
                key={post.id}
                href={`/noticias/${post.slug}`}
                className={`group relative overflow-hidden ${idx === 0 ? 'lg:row-span-2' : ''}`}
              >
                <div className={`relative ${idx === 0 ? 'aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]' : 'aspect-[16/9]'} bg-navy`}>
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="inline-block px-3 py-1 bg-bronze text-white text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                      {categoryLabels[post.category]}
                    </span>
                    <h3 className={`text-white font-semibold mb-3 group-hover:text-bronze transition-colors ${idx === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <span>{post.readingTime} min de leitura</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Todos os Artigos */}
      <Section backgroundColor="bg-gray-50">
        <div className="mb-10">
          <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Blog</span>
          <h2 className="text-3xl font-semibold text-navy">Todos os Artigos</h2>
        </div>

        {allPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <Link
                key={post.id}
                href={`/noticias/${post.slug}`}
                className="group bg-white border border-gray-100 hover:border-bronze/40 transition-all duration-300 overflow-hidden"
              >
                {/* Imagem */}
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
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

                {/* Conteúdo */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-bronze text-xs font-semibold uppercase tracking-wider">
                      {categoryLabels[post.category]}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 text-xs">{formatDate(post.publishedAt)}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-bronze transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{post.readingTime} min de leitura</span>
                    <span className="text-bronze text-sm font-semibold group-hover:underline">
                      Ler mais →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Estado vazio */
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-bronze/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-navy mb-3">
              Conteúdo em breve
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Estamos preparando artigos e análises relevantes sobre as principais atualizações do mundo jurídico.
            </p>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold uppercase tracking-wider text-sm hover:bg-navy-light transition-colors"
            >
              Falar Conosco
            </a>
          </div>
        )}
      </Section>

      {/* Newsletter ou CTA */}
      <CTA
        title="Quer receber nossas atualizações?"
        description="Entre em contato e fique por dentro das novidades jurídicas."
        ctaText="Falar no WhatsApp"
        ctaHref={siteConfig.social.whatsapp}
      />
    </>
  );
}
