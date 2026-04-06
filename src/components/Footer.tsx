import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/Logo Buligon_1.png"
                alt="Buligon Advogados"
                width={200}
                height={55}
                className="h-14 w-auto brightness-0 invert"
                quality={100}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Consultoria jurídica estratégica. Excelência em Direito Público, Administrativo e Tributário para clientes que buscam segurança e resultados.
            </p>
            <div className="flex gap-4">
               {/* Simplified Social placeholders */}
               <a href={siteConfig.social.whatsapp} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-bronze hover:border-bronze transition-all text-white/50 hover:text-white">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
               </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-8 text-bronze uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-4">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-8 text-bronze uppercase tracking-widest">Links Úteis</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/areas" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-8 text-bronze uppercase tracking-widest">Escritório</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <span className="text-bronze">Endereço:</span>
                <span className="text-gray-400 font-light">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.neighborhood} - CEP {siteConfig.address.zipCode}<br />
                  {siteConfig.address.city} – {siteConfig.address.state}
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-bronze">E-mail:</span>
                <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-white font-light transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-4">
                <span className="text-bronze">Tel:</span>
                <a href="tel:+554130154161" className="text-gray-400 hover:text-white font-light transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500">
             <span>OAB/PR</span>
             <a href="https://updo.com.br" target="_blank" className="hover:text-bronze transition-colors">By UPDO</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
