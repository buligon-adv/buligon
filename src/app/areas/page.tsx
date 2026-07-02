'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import { siteConfig } from '@/lib/site';
import { areaCategories, getAreasByCategory, PracticeArea } from '@/lib/areas';

// Subcomponente de Accordion Premium
function AreaAccordionItem({ area, index }: { area: PracticeArea, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`border-b border-gray-100 transition-all duration-500 ${isOpen ? 'bg-gray-50/30' : 'bg-transparent'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-8 lg:gap-16">
          <span className="text-[14px] font-sans font-medium text-bronze/40 tracking-widest hidden sm:block">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-2xl sm:text-3xl font-sans font-light text-navy group-hover:text-bronze transition-colors duration-300 tracking-tight">
            {area.title}
          </h3>
        </div>
        
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className={`absolute w-full h-[1px] bg-bronze transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
          <div className={`absolute h-full w-[1px] bg-bronze transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
        </div>
      </button>

      <div 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <div className="lg:pl-[120px] max-w-4xl">
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-gray-900 font-medium leading-relaxed mb-8">
              {area.shortDescription}
            </p>
            <div className="text-gray-600 leading-relaxed font-light whitespace-pre-line space-y-6">
              {area.fullDescription}
            </div>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="w-12 h-px bg-bronze/30" />
            <a 
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.3em] font-bold text-bronze hover:text-navy transition-colors"
            >
              Falar com especialista sobre este tema
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AreasPage() {
  const empresasAreas = getAreasByCategory('empresas');
  const agentesAreas = getAreasByCategory('agentes-publicos');
  const eleitoralAreas = getAreasByCategory('eleitoral');
  const pessoalAreas = getAreasByCategory('pessoal');

  const categoryData = [
    { category: areaCategories[0], areas: empresasAreas, label: 'Empresas' },
    { category: areaCategories[1], areas: agentesAreas, label: 'Gestão Pública' },
    { category: areaCategories[2], areas: eleitoralAreas, label: 'Eleitoral' },
    { category: areaCategories[3], areas: pessoalAreas, label: 'Vida Privada' },
  ];

  return (
    <main>
      <Hero
        title="Áreas de Atuação"
        subtitle="Expertise estratégica e dedicada em soluções jurídicas de alta complexidade"
        backgroundImage="/Banner%20Áreas%20de%20atuação%20Buligon.jpg"
        overlayOpacity="bg-navy/60"
      />

      {/* Navegação Rápida Sutil */}
      <div className="bg-white border-b border-gray-100 hidden lg:block sticky top-24 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        </div>
      </div>

      {/* Categorias e Conteúdo Editorial */}
      {categoryData.map(({ category, areas, label }, idx) => (
        <Section 
          key={category.id} 
          id={category.id}
          backgroundColor="bg-white"
          className={idx === 0 ? "!pt-8 lg:!pt-12" : "pt-8 lg:pt-12"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-10 lg:mb-14">
            <div className="lg:col-span-5">
              <span className="text-bronze uppercase tracking-[0.5em] text-[11px] font-bold mb-6 block">
                {label}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-light text-navy leading-[1.1] mb-8">
                {category.title.split(' ').map((word, i, arr) => (
                  <span key={i}>
                    {word === arr[arr.length - 1] ? (
                      <span className="italic font-serif block mt-1">{word}</span>
                    ) : (
                      word + ' '
                    )}
                  </span>
                ))}
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-end pb-2">
              <p className="text-gray-500 text-xl leading-relaxed font-light border-l border-bronze/20 pl-8 lg:pl-12">
                {category.description}
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="border-t border-gray-100">
              {areas.map((area, areaIdx) => (
                <AreaAccordionItem key={area.id} area={area} index={areaIdx} />
              ))}
            </div>
          </div>
        </Section>
      ))}


      {/* Nossa Abordagem */}
      <Section backgroundColor="bg-navy" className="text-white relative overflow-hidden">
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

      <CTA
        title="Consulta Estratégica"
        description="Analise seu caso com quem possui expertise comprovada em questões de alta complexidade."
        ctaText="Agendar Reunião"
        ctaHref={siteConfig.social.whatsapp}
      />
    </main>
  );
}
