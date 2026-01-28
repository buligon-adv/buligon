interface CTAProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function CTA({
  title,
  description,
  ctaText,
  ctaHref,
  backgroundColor = 'navy',
  textColor = 'white',
}: CTAProps) {
  const bgClass = backgroundColor === 'navy' ? 'bg-navy' : '';
  const textClasses = textColor === 'white' ? 'text-white' : 'text-navy';

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${textClasses}`}>{title}</h2>
        <p className={`text-lg mb-8 ${textColor === 'white' ? 'text-gray-100' : 'text-gray-700'}`}>
          {description}
        </p>
        <a
          href={ctaHref}
          target={ctaHref.startsWith('http') ? '_blank' : undefined}
          rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`inline-block px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg ${textColor === 'white' ? 'bg-bronze text-navy' : 'bg-white text-navy'}`}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
