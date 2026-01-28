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
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.914 4.914 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08a9.884 9.884 0 01-4.043-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-bronze transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-6 text-sm justify-center">
            <Link href="/privacidade" className="text-gray-600 hover:text-bronze">
              Política de Privacidade
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contato" className="text-gray-600 hover:text-bronze">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
