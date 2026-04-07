interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  size?: 'full' | 'compact';
  overlayOpacity?: string;
}

export default function Hero({
  title,
  subtitle,
  cta,
  secondaryCta,
  backgroundImage,
  size = 'compact',
  overlayOpacity,
}: HeroProps) {
  const heightClass = size === 'full' ? 'min-h-[85vh] lg:min-h-[90vh]' : 'min-h-[60vh] lg:min-h-[65vh]';
  const finalOverlay = overlayOpacity || 'bg-navy/80';
  
  return (
    <section
      className={`relative ${heightClass} flex items-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20`}
    >
      <div className="absolute inset-0">
        {backgroundImage && (
          <>
            <img 
              src={backgroundImage} 
              alt={title}
              className="w-full h-full object-cover grayscale brightness-75 contrast-[1.1]"
            />
            <div className={`absolute inset-0 ${finalOverlay} mix-blend-multiply opacity-100`} />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
          </>
        )}
        {!backgroundImage && <div className="absolute inset-0 bg-navy" />}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 lg:w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
      <div className="absolute left-6 lg:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze/30 to-transparent hidden lg:block" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block h-1 w-16 lg:w-20 bg-bronze mb-6 lg:mb-10 animate-pulse" />
          <h1 className="text-white mb-6 lg:mb-10">
            {title.split(' ').map((word, i) => (
              <span 
                key={i} 
                className={`inline-block mr-[0.25em] last:mr-0 ${i % 2 === 1 ? 'text-bronze italic' : ''}`}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 lg:mb-14 leading-relaxed max-w-2xl font-light">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-8">
            {cta && (
              <a
                href={cta.href}
                target={cta.href.startsWith('http') ? '_blank' : undefined}
                rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-10 lg:px-12 py-4 rounded-none font-bold text-white transition-all bg-bronze hover:bg-bronze-light shadow-xl text-center uppercase tracking-widest text-[10px] lg:text-xs"
              >
                {cta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="px-10 lg:px-12 py-4 rounded-none font-bold text-white border border-white/30 backdrop-blur-sm transition-all hover:bg-white hover:text-navy hover:border-white text-center uppercase tracking-widest text-[10px] lg:text-xs"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {size === 'full' && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Descobrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-bronze to-transparent" />
        </div>
      )}

      {/* Animated subtle shapes */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-bronze/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full bg-navy-light/40 blur-[80px] pointer-events-none" />
    </section>
  );
}
