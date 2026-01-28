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
      className={`relative py-20 px-4 sm:py-32 sm:px-6 lg:px-8 min-h-[400px] flex items-center justify-center ${!backgroundImage ? 'bg-navy' : ''}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(12, 31, 64, 0.8), rgba(12, 31, 64, 0.8)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {cta && (
            <a
              href={cta.href}
              target={cta.href.startsWith('http') ? '_blank' : undefined}
              rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="px-8 py-3 rounded-lg font-semibold text-navy transition-all hover:shadow-lg inline-block bg-bronze"
            >
              {cta.label}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="px-8 py-3 rounded-lg font-semibold text-white border-2 border-white transition-colors hover:bg-white hover:text-navy inline-block"
            >
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
