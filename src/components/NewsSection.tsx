import Link from 'next/link';
import Image from 'next/image';
import { Post, categoryLabels } from '@/lib/posts';

interface NewsCardProps {
  post: Post;
}

export function NewsCard({ post }: NewsCardProps) {
  return (
    <Link 
      href={`/noticias/${post.slug}`}
      className="group flex flex-col h-full bg-white border border-gray-100 hover:border-bronze transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      <div className="relative h-56 w-full overflow-hidden">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-navy/5 flex items-center justify-center">
            <span className="text-bronze/40 font-serif italic text-4xl">B</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-navy text-white text-[10px] uppercase tracking-widest font-bold py-2 px-3">
            {categoryLabels[post.category]}
          </span>
        </div>
      </div>
      
      <div className="flex-1 p-6 sm:p-8 flex flex-col">
        <div className="flex items-center gap-3 text-bronze text-[11px] uppercase tracking-widest font-bold mb-4">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </time>
          <span className="w-1 h-1 rounded-full bg-bronze/30" />
          <span>{post.readingTime} min de leitura</span>
        </div>
        
        <h3 className="text-xl font-sans font-semibold text-navy group-hover:text-bronze transition-colors mb-4 leading-tight">
          {post.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="mt-auto flex items-center text-bronze text-[10px] uppercase tracking-widest font-bold gap-2">
          <span>Ler artigo completo</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export function NewsSection({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </div>
  );
}
