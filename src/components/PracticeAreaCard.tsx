interface PracticeAreaCardProps {
  title: string;
  description: string;
  slug: string;
  index?: number;
}

export default function PracticeAreaCard({
  title,
  description,
  slug,
  index = 0,
}: PracticeAreaCardProps) {
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <a
      href={`/area/${slug}`}
      className="group relative p-8 h-full flex flex-col transition-all duration-500 bg-white border-b border-gray-100 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 hover:bg-navy"
    >
      <div className="flex justify-between items-start mb-12">
        <span className="text-bronze font-serif text-2xl group-hover:text-white/50 transition-colors duration-500">
          {formattedIndex}
        </span>
        <div className="w-10 h-px bg-bronze/30 group-hover:w-16 group-hover:bg-bronze transition-all duration-700" />
      </div>

      <h3 className="text-2xl font-serif mb-4 text-navy group-hover:text-white transition-colors duration-500 leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-500 mb-8 line-clamp-3 text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-auto flex items-center text-xs uppercase tracking-widest font-bold text-bronze group-hover:text-white transition-colors duration-500">
        <span>Explorar Detalhes</span>
        <svg className="w-4 h-4 ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      {/* Subtle bottom line for mobile */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-bronze group-hover:w-full transition-all duration-500" />
    </a>
  );
}
