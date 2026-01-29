import { siteConfig } from "@/lib/site";

interface CTAProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTA({
  title = "Agende uma Consultoria Estratégica",
  description = "Nossa equipe está pronta para oferecer a melhor orientação jurídica para o seu caso. Excelência, sigilo e foco em resultados.",
  ctaText = "Falar com Especialista",
  ctaHref = siteConfig.social.whatsapp,
}: CTAProps) {
  return (
    <div className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-block p-2 bg-bronze/10 rounded-full mb-6">
          <div className="w-2 h-2 bg-bronze rounded-full animate-ping" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-sans font-semibold text-navy mb-8 leading-tight">
          Pronto para <span className="italic text-bronze">solucionar</span> sua <br />demanda jurídica?
        </h2>
        <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={ctaHref}
            target={ctaHref.startsWith('http') ? '_blank' : undefined}
            rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="px-12 py-4 bg-navy text-white font-bold uppercase tracking-widest text-[10px] hover:bg-bronze transition-all shadow-xl hover:-translate-y-1"
          >
            {ctaText}
          </a>
          <a
            href="/contato"
            className="text-navy text-[10px] uppercase tracking-widest font-bold border-b border-navy/20 hover:border-bronze transition-all pb-1"
          >
            Outras formas de contato
          </a>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-bronze/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </div>
  );
}
