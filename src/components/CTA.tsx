import { siteConfig } from "@/lib/site";
import Link from "next/link";

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
            className="px-12 py-5 bg-navy text-white font-bold uppercase tracking-[0.2em] text-[11px] lg:text-xs hover:bg-bronze transition-all shadow-2xl rounded-none"
          >
            {ctaText}
          </a>
          <Link
            href="/contato"
            className="text-navy text-[11px] lg:text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-bronze hover:border-navy transition-all pb-1 ml-0 sm:ml-4"
          >
            Outras formas de contato
          </Link>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-bronze/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </div>
  );
}
