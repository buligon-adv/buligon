import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { siteConfig } from '@/lib/site';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Política de Privacidade',
  description: 'Política de privacidade do Buligon Advogados. Saiba como tratamos seus dados.',
});

export default function PrivacidadePage() {
  return (
    <>
      <Hero
        title="Política de Privacidade"
        subtitle="Seu direito à privacidade é nossa prioridade"
      />

      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-gray-600 mb-8">
            Última atualização: Janeiro de 2026
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
            1. Introdução
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            O Buligon Advogados ("nós", "nosso" ou "escritório") está comprometido em proteger sua
            privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos
            suas informações pessoais quando você visita nosso site ou utiliza nossos serviços.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
            2. Informações que Coletamos
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Podemos coletar as seguintes informações:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone/WhatsApp</li>
            <li>Informações fornecidas em formulários de contato</li>
            <li>Dados de navegação (cookies e tecnologias similares)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
            3. Como Usamos Suas Informações
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Utilizamos suas informações para:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Responder às suas solicitações de contato</li>
            <li>Prestar serviços jurídicos</li>
            <li>Enviar comunicações relevantes (quando autorizado)</li>
            <li>Melhorar nosso site e serviços</li>
            <li>Cumprir obrigações legais</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
            4. Sigilo Profissional
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Além das proteções previstas na legislação de proteção de dados, todas as informações
            compartilhadas em contexto de consultoria jurídica estão protegidas pelo sigilo
            profissional previsto no Estatuto da Advocacia e no Código de Ética da OAB.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
            5. Compartilhamento de Dados
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para
            fins de marketing. Podemos compartilhar informações apenas quando necessário para a
            prestação de serviços jurídicos ou quando exigido por lei.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
            6. Seus Direitos
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incompletos ou desatualizados</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Revogar o consentimento para uso de dados</li>
            <li>Solicitar portabilidade dos dados</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
            7. Segurança
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas
            informações contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
            8. Cookies
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Nosso site pode usar cookies para melhorar sua experiência de navegação. Você pode
            configurar seu navegador para recusar cookies, mas isso pode afetar algumas
            funcionalidades do site.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
            9. Contato
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
          </p>
          <p className="text-gray-700 mb-6">
            <strong>E-mail:</strong>{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-bronze hover:underline">
              {siteConfig.email}
            </a>
            <br />
            <strong>Telefone:</strong>{' '}
            <a href="tel:+554130154161" className="text-bronze hover:underline">
              {siteConfig.phone}
            </a>
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>
            10. Alterações nesta Política
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Podemos atualizar esta política periodicamente. A versão mais recente estará sempre
            disponível nesta página, com a data da última atualização indicada no topo.
          </p>
        </div>
      </Section>
    </>
  );
}
