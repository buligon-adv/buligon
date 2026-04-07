import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import { siteConfig } from '@/lib/site';
import { practiceAreas, areaCategories, getAreasByCategory } from '@/lib/areas';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Áreas de Atuação',
  description: 'Conheça as áreas de atuação do Buligon Advogados - atendimento a empresas, agentes públicos e políticos, e soluções pessoais e patrimoniais.',
});

export default function AreasPage() {
  const empresasAreas = getAreasByCategory('empresas');
  const agentesAreas = getAreasByCategory('agentes-publicos');
  const pessoalAreas = getAreasByCategory('pessoal');

  const categoryData = [
    { category: areaCategories[0], areas: empresasAreas },
    { category: areaCategories[1], areas: agentesAreas },
    { category: areaCategories[2], areas: pessoalAreas },
  ];

  return (
    <>
      <Hero
        title="Áreas de Atuação"
        subtitle="Expertise consolidada em soluções jurídicas estratégicas"
        backgroundImage="/Banner%2003%20Buligon.jpg"
        overlayOpacity="bg-navy/60"
      />

      {/* Navegação Rápida Sticky */}
      <div className="sticky top-24 z-30 bg-white border-b border-gray-200 hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-center items-center h-16">
            <div className="flex bg-gray-50 p-1 border border-gray-100">
              {[
                { id: 'empresas', label: 'Empresas' },
                { id: 'agentes-publicos', label: 'Gestão Pública' },
                { id: 'pessoal', label: 'Pessoa Física' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-12 py-3 text-[14px] uppercase tracking-[0.25em] font-bold text-navy/60 hover:text-navy hover:bg-white transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Introdução com Design Elevado */}
      <Section className="!py-20 lg:!py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center md:items-start text-center md:text-left">
            <div className="flex-shrink-0 w-24 h-24 bg-bronze/5 flex items-center justify-center relative">
              <div className="absolute inset-0 border border-bronze/20 scale-110 -rotate-3" />
              <div className="absolute inset-0 border border-navy/10 scale-95 rotate-6" />
              <svg className="w-10 h-10 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="space-y-8 flex-grow">
              <div className="space-y-2">
                <span className="text-bronze uppercase tracking-[0.4em] text-[10px] font-bold block">Excelência Consolidada</span>
                <h2 className="text-3xl sm:text-4xl font-sans font-semibold text-navy leading-tight">
                  Atuação <span className="italic text-bronze">singular</span> para demandas complexas
                </h2>
              </div>
              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed font-light italic border-l-4 border-bronze pl-8 py-2">
                "Conduzimos cada caso com precisão técnica, antecipando riscos e mitigando responsabilizações, sempre voltados à proteção e à preservação da credibilidade dos nossos clientes."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Categorias */}
      {categoryData.map(({ category, areas }, idx) => (
        <Section 
          key={category.id} 
          id={category.id}
          backgroundColor={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
          className={idx === 0 ? '!pt-8 sm:!pt-12' : ''}
        >
          <div className="mb-16 lg:mb-20">
            <span className="text-bronze uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block animate-fadeInUp">
              {idx === 0 ? 'Soluções Corporativas' : idx === 1 ? 'Gestão Pública' : 'Vida Privada'}
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-navy leading-tight max-w-2xl">
                {idx === 0 ? (
                  <>Atendimento às <span className="italic text-bronze">Empresas</span></>
                ) : idx === 1 ? (
                  <>Agentes Públicos e <span className="italic text-bronze">Políticos</span></>
                ) : (
                  <>Soluções Pessoais e <span className="italic text-bronze">Patrimoniais</span></>
                )}
              </h2>
              <p className="text-gray-500 max-w-xl leading-relaxed text-lg border-l-2 border-bronze/20 pl-6">
                {category.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, areaIdx) => (
              <Link
                key={area.id}
                href={`/area/${area.slug}`}
                className="group relative bg-white border border-gray-100 hover:border-bronze transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Background Decorativo Sutil */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50/50 rounded-bl-full -mr-12 -mt-12 group-hover:bg-bronze/5 transition-all duration-700" />
                
                {/* Conteúdo */}
                <div className="relative p-10 flex-grow flex flex-col items-start text-left">
                  {/* Número decorativo */}
                  <span className="text-sm font-sans font-bold text-bronze/20 mb-6 group-hover:text-bronze/40 transition-colors">
                    {String(areaIdx + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Linha decorativa */}
                  <div className="w-8 h-1 bg-bronze mb-8 group-hover:w-16 transition-all duration-500" />
                  
                  <h3 className="text-2xl font-semibold mb-6 text-navy group-hover:text-bronze transition-colors duration-300 leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-10 line-clamp-4">
                    {area.shortDescription}
                  </p>
                  
                  {/* CTA */}
                  <div className="mt-auto flex items-center gap-3 text-bronze text-[10px] font-bold uppercase tracking-widest transition-all group-hover:gap-5">
                    <span>Explorar Detalhes</span>
                    <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Barra inferior animada */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-bronze group-hover:w-full transition-all duration-700" />
              </Link>
            ))}
          </div>
        </Section>
      ))}

      {/* Nossa Abordagem */}
      <Section backgroundColor="bg-navy" className="text-white relative overflow-hidden">
        {/* Elemento Decorativo de Fundo */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-bronze/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block w-12 h-1 bg-bronze mb-10 mx-auto" />
          <h2 className="text-4xl sm:text-5xl font-sans font-semibold mb-10 text-white leading-tight">
            Excelência em cada <span className="italic text-bronze">estratégia jurídica</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-bronze/30 pl-8 transition-all hover:border-bronze">
              Cada caso exige uma análise aprofundada e uma estratégia personalizada. Por isso, combinamos expertise técnica com atenção às especificidades de cada cliente, antecipando riscos e mitigando responsabilizações antes que se tornem problemas.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-bronze/30 pl-8 transition-all hover:border-bronze">
              Nosso compromisso é oferecer orientação clara, transparente e focada nos melhores resultados, priorizando sempre a preservação da credibilidade e o sucesso de nossos parceiros de negócio e agentes públicos.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        title="Precisa de orientação especializada?"
        description="Entre em contato e saiba como podemos ajudar no seu caso."
        ctaText="Falar no WhatsApp"
        ctaHref={siteConfig.social.whatsapp}
      />
    </>
  );
}
