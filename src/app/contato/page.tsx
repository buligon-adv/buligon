import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Contato',
  description: 'Entre em contato com o Buligon Advogados. Estamos prontos para atender sua demanda jurídica.',
});

export default function ContatoPage() {
  return (
    <>
      <Hero
        title="Entre em Contato"
        subtitle="Estamos prontos para ouvir sua demanda e oferecer a melhor orientação"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
              Envie sua mensagem
            </h2>
            <p className="text-gray-600 mb-6">
              Preencha o formulário abaixo e entraremos em contato em até 24 horas.
            </p>
            <ContactForm />
          </div>

          {/* Informações de Contato */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
              Outras formas de contato
            </h2>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-navy)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.907 10.025 1.54 2.487 4.3 3.643 7.1 3.643 2.108 0 4.063-.692 5.766-2.001 3.235-2.494 3.933-7.236 1.55-10.758-1.307-1.995-3.61-3.319-6.311-3.287z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bronze hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-gray-500 text-sm">Atendimento rápido e direto</p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-navy)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">E-mail</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-bronze hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-gray-500 text-sm">Resposta em até 24 horas</p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-navy)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefone</h3>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-bronze hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-gray-500 text-sm">Horário comercial</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-navy)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Endereço</h3>
                  <p className="text-gray-700">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city} - {siteConfig.address.state}<br />
                    CEP: {siteConfig.address.zipCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="mt-8 p-6 rounded-lg bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
              <p className="text-gray-600 text-sm">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 12h (agendamento prévio)
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
