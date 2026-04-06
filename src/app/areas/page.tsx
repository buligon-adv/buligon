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
      />

      {/* Introdução */}
      <Section className="!py-12 sm:!py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Com expertise consolidada e atuação singular, conduzimos cada caso com precisão técnica, antecipando riscos e mitigando responsabilizações, sempre voltados à proteção e à preservação da credibilidade dos nossos clientes.
          </p>
        </div>
      </Section>

      {/* Categorias */}
      {categoryData.map(({ category, areas }, idx) => (
        <Section key={category.id} backgroundColor={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} className={idx === 0 ? '!pt-8 sm:!pt-12' : ''}>
          <div className="mb-12">
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              {idx === 0 ? 'Empresas' : idx === 1 ? 'Setor Público' : 'Pessoa Física'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4" style={{ color: 'var(--color-navy)' }}>
              {category.title}
            </h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed">
              {category.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, areaIdx) => (
              <Link
                key={area.id}
                href={`/area/${area.slug}`}
                className="group relative bg-white border border-gray-100 hover:border-bronze/40 transition-all duration-300 overflow-hidden"
              >
                {/* Número decorativo */}
                <span className="absolute top-4 right-4 text-6xl font-semibold text-gray-50 group-hover:text-bronze/10 transition-colors duration-500 pointer-events-none">
                  {String(areaIdx + 1).padStart(2, '0')}
                </span>
                
                {/* Conteúdo */}
                <div className="relative p-8">
                  {/* Linha decorativa */}
                  <div className="w-10 h-0.5 bg-bronze mb-6 group-hover:w-16 transition-all duration-300" />
                  
                  <h3 className="text-xl font-semibold mb-4 text-navy group-hover:text-bronze transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {area.shortDescription}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-bronze text-sm font-semibold uppercase tracking-wider">
                    <span>Ver detalhes</span>
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Barra inferior animada */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bronze group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </Section>
      ))}

      {/* Nossa Abordagem */}
      <Section backgroundColor="bg-navy" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Nossa Abordagem
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Cada caso exige uma análise aprofundada e uma estratégia personalizada. Por isso, combinamos expertise técnica com atenção às especificidades de cada cliente.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Nosso compromisso é oferecer orientação clara, transparente e focada nos melhores resultados, sempre respeitando os princípios éticos da advocacia.
          </p>
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
