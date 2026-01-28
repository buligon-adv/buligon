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
}

export default function Hero({
  title,
  subtitle,
  cta,
  secondaryCta,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className={`relative min-h-[90vh] flex items-center overflow-hidden ${!backgroundImage ? 'bg-navy' : ''}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(12, 31, 64, 0.85), rgba(12, 31, 64, 0.7)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
      <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze/30 to-transparent hidden lg:block" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block h-1 w-20 bg-bronze mb-8 animate-pulse" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-8 leading-[1.2] tracking-normal">
            {title.split(' ').map((word, i) => (
              <span 
                key={i} 
                className={`inline-block mr-[0.25em] last:mr-0 ${i % 2 === 1 ? 'text-bronze italic' : ''}`}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-light">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            {cta && (
              <a
                href={cta.href}
                target={cta.href.startsWith('http') ? '_blank' : undefined}
                rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-10 py-4 rounded-sm font-semibold text-white transition-all bg-bronze hover:bg-bronze-light hover:scale-105 active:scale-95 shadow-xl text-center uppercase tracking-widest text-sm"
              >
                {cta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="px-10 py-4 rounded-sm font-semibold text-white border border-white/30 backdrop-blur-sm transition-all hover:bg-white hover:text-navy hover:border-white text-center uppercase tracking-widest text-sm"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Descobrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-bronze to-transparent" />
      </div>

      {/* Animated subtle shapes */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-bronze/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full bg-navy-light/40 blur-[80px] pointer-events-none" />
    </section>
  );
}
