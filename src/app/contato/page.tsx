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
        title="Contato"
        subtitle="Estamos à disposição para atender sua demanda com o sigilo e o rigor técnico necessários."
        backgroundImage="/Estrutura Buligon 05.jpg"
        overlayOpacity="bg-navy/60"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
              Envie sua mensagem
            </h2>
            <p className="text-gray-600 mb-6">
              Preencha o formulário abaixo e entraremos em contato o mais breve possível.
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
              <div className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-transform hover:scale-110"
                  style={{ backgroundColor: 'var(--color-navy)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bronze font-semibold hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-gray-500 text-sm">WhatsApp</p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-transform hover:scale-110"
                  style={{ backgroundColor: 'var(--color-navy)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-bronze font-semibold hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-gray-500 text-sm">E-mail</p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-transform hover:scale-110"
                  style={{ backgroundColor: 'var(--color-navy)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a
                    href="tel:+554130535931"
                    className="text-bronze font-semibold hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-gray-500 text-sm">Telefone</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-transform hover:scale-110"
                  style={{ backgroundColor: 'var(--color-navy)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 leading-tight">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.neighborhood} - CEP {siteConfig.address.zipCode}<br />
                    {siteConfig.address.city} – {siteConfig.address.state}
                  </p>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="mt-8 p-6 bg-gray-50 border-l-4 border-bronze">
              <h3 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
              <p className="text-gray-600 text-sm">
                Segunda a Sexta: 9h às 18h<br />
                Atendimento presencial mediante agendamento.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mapa do Google */}
      <Section backgroundColor="bg-gray-50" noPadding containerSize="full">
        <div className="w-full h-[550px] relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.6558299863415!2d-49.2798836!3d-25.4163013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce41828f967ad%3A0xe67db7368536f98!2sR.%20Prof.%20Macedo%20Filho%2C%20315%20-%20Bom%20Retiro%2C%20Curitiba%20-%20PR%2C%2080520-340!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Buligon Advogados"
            className="grayscale contrast-125 brightness-90 border-none transition-all duration-700"
          ></iframe>
          
          {/* Custom Floating Pin/Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full p-3 shadow-2xl border border-bronze/20 animate-bounce transition-transform group-hover:scale-110">
              <img 
                src="/icone logo buligon.svg" 
                alt="Buligon Advogados"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-3 h-3 bg-bronze rounded-full blur-[2px] mt-1 opacity-50" />
          </div>
        </div>
      </Section>
    </>
  );
}
