import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import { siteConfig } from '@/lib/site';
import { practiceAreas, getAreaBySlug } from '@/lib/areas';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return generateSeoMetadata({
      title: 'Área não encontrada',
    });
  }

  return generateSeoMetadata({
    title: area.title,
    description: area.shortDescription,
  });
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <Hero
        title={area.title}
        subtitle={area.shortDescription}
      />

      {/* Conteúdo */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 uppercase tracking-wider" style={{ color: 'var(--color-navy)' }}>
              Sobre esta área
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
              {area.fullDescription}
            </p>

            <h3 className="text-xl font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-navy)' }}>
              O que fazemos
            </h3>
            <ul className="space-y-3">
              {area.topics.map((topic, index) => (
                <li key={index} className="flex gap-3">
                  <span
                    className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: 'var(--color-bronze)' }}
                  />
                  <span className="text-gray-700">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
                Fale com um especialista
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Agende uma consulta para discutir sua situação com nossa equipe especializada em {area.title.toLowerCase()}.
              </p>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-lg font-semibold text-white text-center transition-all hover:shadow-lg"
                style={{ backgroundColor: 'var(--color-navy)' }}
              >
                {area.cta}
              </a>
              <p className="text-gray-500 text-xs mt-4 text-center">
                Resposta em até 24 horas
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Outras áreas */}
      <Section backgroundColor="bg-gray-50">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
          Outras áreas de atuação
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {practiceAreas
            .filter((a) => a.slug !== area.slug)
            .slice(0, 5)
            .map((otherArea) => (
              <a
                key={otherArea.id}
                href={`/area/${otherArea.slug}`}
                className="p-4 rounded-lg border border-gray-200 hover:border-bronze transition-colors bg-white text-center"
              >
                <span className="text-sm font-medium" style={{ color: 'var(--color-navy)' }}>
                  {otherArea.title}
                </span>
              </a>
            ))}
        </div>
      </Section>

      {/* CTA */}
      <CTA
        title="Precisa de orientação nesta área?"
        description="Entre em contato e agende uma consulta com nossos especialistas."
        ctaText="Falar no WhatsApp"
        ctaHref={siteConfig.social.whatsapp}
      />
    </>
  );
}
