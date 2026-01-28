import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import PracticeAreasGrid from '@/components/PracticeAreasGrid';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { siteConfig } from '@/lib/site';
import { practiceAreas, getFeaturedAreas } from '@/lib/areas';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Consultoria Jurídica',
  description: siteConfig.description,
});

const faqItems = [
  {
    question: 'Como solicitar uma consulta jurídica?',
    answer:
      'Você pode entrar em contato através do WhatsApp, telefone ou formulário de contato no site. Respondemos todas as solicitações em até 24 horas e agendamos uma consulta conforme sua disponibilidade.',
  },
  {
    question: 'Qual é a primeira etapa de um atendimento?',
    answer:
      'A primeira etapa é uma consultoria inicial para compreender sua situação, necessidades e objetivos. Nesta fase apresentamos um diagnóstico preliminar e propomos a melhor estratégia.',
  },
  {
    question: 'Vocês trabalham com órgãos públicos e empresas privadas?',
    answer:
      'Sim. Nossa equipe possui experiência em ambos os contextos, com especialização em questões que envolvem entidades públicas e setores privados regulados.',
  },
  {
    question: 'Como funciona a confidencialidade e sigilo profissional?',
    answer:
      'O sigilo profissional é absoluto e garantido por lei. Todas as informações compartilhadas são mantidas em total confidencialidade, sem exceções.',
  },
  {
    question: 'Qual é o prazo para resolver um processo?',
    answer:
      'O prazo depende da complexidade do caso, da instância judicial ou administrativa, e de fatores externos. Na primeira consulta, apresentamos um cronograma realista baseado em nossa experiência.',
  },
];

const differentials = [
  'Equipe especializada com sólida formação em direito público',
  'Atuação estratégica voltada a resultados e segurança jurídica',
  'Atendimento personalizado e respeitoso',
  'Transparência total nos prazos e honorários',
  'Disponibilidade para consultoria preventiva',
  'Representação em todas as instâncias judiciais e administrativas',
];

export default function Home() {
  const featuredAreas = getFeaturedAreas().slice(0, 6);

  return (
    <>
      {/* Hero */}
      <Hero
        title="Segurança Jurídica Estratégica"
        subtitle="Consultoria especializada em direito público, administrativo e tributário. Experiência, clareza e confiança em cada orientação."
        cta={{
          label: 'Falar no WhatsApp',
          href: siteConfig.social.whatsapp,
        }}
        secondaryCta={{
          label: 'Ver áreas de atuação',
          href: '/areas',
        }}
      />

      {/* Diferenciais */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-navy">
            Por que nos escolher
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentials.map((differential, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white mt-1 font-bold bg-bronze">
                  ✓
                </div>
                <p className="text-gray-700">{differential}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Áreas em Destaque */}
      <Section backgroundColor="bg-gray-50">
        <h2 className="text-3xl font-bold mb-2 text-navy">
          Áreas de Atuação
        </h2>
        <p className="text-gray-600 mb-8">
          Contamos com expertise consolidada nas seguintes especialidades:
        </p>
        <PracticeAreasGrid areas={featuredAreas} columns={3} />
        <div className="mt-8 text-center">
          <a
            href="/areas"
            className="inline-block px-6 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg bg-navy"
          >
            Ver todas as áreas
          </a>
        </div>
      </Section>

      {/* Sobre */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-navy">
              Sobre o Escritório
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              O Buligon Advogados é um escritório de consultoria jurídica focado em direito público,
              administrativo e tributário. Ao longo de anos de atuação, consolidamos expertise em
              demandas complexas envolvendo órgãos de controle, administração pública e questões
              estratégicas de relevância nacional.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nossa missão é fornecer orientação segura, estratégica e alinhada aos legítimos
              interesses dos nossos clientes. Combinamos rigor técnico com sensibilidade às
              particularidades de cada caso.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Acreditamos que a segurança jurídica é um ativo valioso. Por isso, trabalhamos
              preventivamente e recomendamos sempre a melhor estratégia, mesmo que signifique
              orientar um cliente a não litigar.
            </p>
          </div>
          <div className="bg-gradient-to-br from-navy to-gray-900 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Nosso Compromisso</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-bronze font-bold text-xl">•</span>
                <span>Excelência técnica em cada parecer</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bronze font-bold text-xl">•</span>
                <span>Transparência nos valores e prazos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bronze font-bold text-xl">•</span>
                <span>Disponibilidade e responsividade</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bronze font-bold text-xl">•</span>
                <span>Sigilo profissional garantido</span>
              </li>
              <li className="flex gap-3">
                <span className="text-bronze font-bold text-xl">•</span>
                <span>Atuação ética e responsável</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section backgroundColor="bg-gray-50">
        <Testimonials showTestimonials={true} />
      </Section>

      {/* FAQ */}
      <Section>
        <FAQ items={faqItems} />
      </Section>

      {/* Final CTA */}
      <CTA
        title="Pronto para resolver sua questão jurídica?"
        description="Agende uma consultoria com nossa equipe. Respondemos em até 24 horas."
        ctaText="Falar no WhatsApp"
        ctaHref={siteConfig.social.whatsapp}
      />
    </>
  );
}
