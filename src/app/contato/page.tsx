import { Metadata } from 'next';
import Image from 'next/image';
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
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-navy)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
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
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
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
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-navy)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefone</h3>
                  <a
                    href="tel:+554130154161"
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
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
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
                    {siteConfig.address.neighborhood} - CEP {siteConfig.address.zipCode}<br />
                    {siteConfig.address.city} – {siteConfig.address.state}
                  </p>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="mt-8 p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
              <p className="text-gray-600 text-sm">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 12h (agendamento prévio)
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Imagem do Escritório */}
      <Section backgroundColor="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/Estrutura Buligon 02.jpg"
              alt="Escritório Buligon Advogados"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/Estrutura Buligon 03.jpg"
              alt="Sala de Reuniões Buligon Advogados"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
