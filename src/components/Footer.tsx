import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white border-t border-white/5">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-12">
          {/* Brand - Span 4 */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-start pr-0 md:pr-8 lg:pr-12">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/Logo Buligon_1.png"
                alt="Buligon Advogados"
                width={160}
                height={45}
                className="h-10 w-auto brightness-0 invert"
                quality={100}
              />
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-sm font-light">
              Consultoria jurídica estratégica com foco em Direito Público e Administrativo. Excelência técnica e compromisso com resultados sólidos.
            </p>
            <div className="flex gap-2.5">
               {/* Redes Sociais */}
               <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-bronze hover:border-bronze transition-all text-white/50 hover:text-white group" title="WhatsApp">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
               </a>
               <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-bronze hover:border-bronze transition-all text-white/50 hover:text-white group" title="Instagram">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
               <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-bronze hover:border-bronze transition-all text-white/50 hover:text-white group" title="LinkedIn">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
               </a>
               <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-bronze hover:border-bronze transition-all text-white/50 hover:text-white group" title="Facebook">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
               </a>
            </div>
          </div>

          {/* Navigation & Links - Span 4 combined for better balance */}
          <div className="md:col-span-4 lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-sans font-semibold text-xs mb-6 text-bronze uppercase tracking-[0.2em]">Navegação</h4>
              <ul className="space-y-2.5">
                {siteConfig.navigation.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-gray-400 hover:text-bronze transition-colors text-sm font-light">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-xs mb-6 text-bronze uppercase tracking-[0.2em]">Conteúdo</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/noticias" className="text-gray-400 hover:text-bronze transition-colors text-sm font-light">
                    Notícias
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="text-gray-400 hover:text-bronze transition-colors text-sm font-light">
                    Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact - Span 4 */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col">
            <h4 className="font-sans font-semibold text-xs mb-6 text-bronze uppercase tracking-[0.2em]">Contato</h4>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Localização</span>
                <span className="text-gray-400 font-light text-[13px] leading-relaxed">
                  {siteConfig.address.street}, {siteConfig.address.neighborhood}<br />
                  {siteConfig.address.city} – {siteConfig.address.state}
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Atendimento</span>
                <div className="flex flex-col">
                  <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-bronze font-light transition-colors text-sm">
                    {siteConfig.email}
                  </a>
                  <a href={`tel:${siteConfig.whatsapp.replace(/\D/g, '')}`} className="text-gray-400 hover:text-bronze font-light transition-colors text-sm">
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Footer Bar */}
        <div className="mt-14 border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[9px] uppercase tracking-[0.15em] font-medium">
            © {currentYear} {siteConfig.name} <span className="mx-2 text-white/10">|</span> Todos os direitos reservados
          </p>
          
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
               <span className="text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400">OAB/PR</span>
               <span className="w-4 h-[1px] bg-white/10"></span>
               <span className="text-[9px] uppercase tracking-[0.15em] font-medium text-gray-600">Sociedade de Advogados</span>
             </div>
             
             <div className="h-4 w-[1px] bg-white/5 hidden md:block"></div>

             <div className="flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity">
               <span className="text-[8px] uppercase tracking-[0.15em] font-medium text-gray-500">Desenvolvido por</span>
               <a href="https://updo.com.br" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                 <Image 
                   src="/Logo UPDO Branca.svg" 
                   alt="UPDO" 
                   width={100}
                   height={30}
                   className="h-6 w-auto"
                 />
               </a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
