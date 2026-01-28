import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import { siteConfig } from '@/lib/site';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Sobre',
  description: 'Conheça o Buligon Advogados - escritório especializado em direito público, administrativo e tributário.',
});

const values = [
  {
    title: 'Excelência técnica',
    description: 'Priorizamos a qualidade técnica em cada parecer, petição e consultoria.',
  },
  {
    title: 'Ética e transparência',
    description: 'Atuamos com clareza e honestidade nas relações com clientes e na atuação profissional.',
  },
  {
    title: 'Foco no cliente',
    description: 'Cada cliente é único e merece uma estratégia jurídica personalizada.',
  },
  {
    title: 'Atualização constante',
    description: 'Investimos continuamente em formação e atualização jurídica.',
  },
];

const milestones = [
  {
    year: '2010',
    event: 'Fundação do escritório com foco em direito público',
  },
  {
    year: '2014',
    event: 'Expansão das áreas de atuação para direito tributário e eleitoral',
  },
  {
    year: '2018',
    event: 'Consolidação como referência em atuação perante Tribunais de Contas',
  },
  {
    year: '2022',
    event: 'Lançamento da nova identidade visual e expansão digital',
  },
];

export default function SobrePage() {
  return (
    <>
      <Hero
        title="Sobre o Escritório"
        subtitle="Tradição, expertise e comprometimento com a segurança jurídica"
      />

      {/* Nossa História */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
              Nossa História
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              O Buligon Advogados nasceu da vocação para o direito público e da paixão pelo rigor
              técnico. Ao longo de mais de uma década, consolidamos uma trajetória de seriedade
              e confiança no assessoramento de entidades públicas, gestores e empresas privadas.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Atuamos com foco em segurança jurídica e prevenção, buscando sempre evitar litígios
              desnecessários e orientando nossos clientes com clareza e transparência.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hoje, contamos com uma equipe multidisciplinar preparada para enfrentar os desafios
              mais complexos do direito contemporâneo, sempre pautada pela ética e pelo respeito.
            </p>
          </div>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: 'var(--color-navy)' }}
                >
                  {milestone.year}
                </div>
                <div className="flex items-center">
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Nossos Valores */}
      <Section backgroundColor="bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--color-navy)' }}>
          Nossos Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-navy)' }}>
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Missão, Visão */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--color-navy)' }}>
            <h3 className="text-xl font-bold text-white mb-4">Missão</h3>
            <p className="text-gray-200 leading-relaxed">
              Oferecer consultoria jurídica de excelência, com atuação estratégica voltada à
              segurança jurídica dos nossos clientes, promovendo a justiça e o respeito ao direito.
            </p>
          </div>
          <div className="p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>Visão</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser reconhecido como referência em direito público e administrativo, com atuação
              ética, inovadora e comprometida com os melhores resultados para nossos clientes.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        title="Quer conhecer melhor nosso trabalho?"
        description="Entre em contato e agende uma consultoria sem compromisso."
        ctaText="Falar no WhatsApp"
        ctaHref={siteConfig.social.whatsapp}
      />
    </>
  );
}
