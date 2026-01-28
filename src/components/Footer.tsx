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
                src="/Logo Buligon Footer.png"
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
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
               </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-8 text-bronze italic">Navegação</h4>
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

          {/* Áreas */}
          <div>
            <h4 className="font-serif text-lg mb-8 text-bronze italic">Links Úteis</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/areas" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  Áreas de Atuação
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
            <h4 className="font-serif text-lg mb-8 text-bronze italic">Escritório</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <span className="text-bronze">Endereço:</span>
                <span className="text-gray-400 font-light">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city} - {siteConfig.address.state}
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
                <a href={`tel:${siteConfig.phone}`} className="text-gray-400 hover:text-white font-light transition-colors">
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
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
             <span>OAB/MG</span>
             <a href="https://updo.com.br" target="_blank" className="hover:text-bronze transition-colors">By UPDO</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
