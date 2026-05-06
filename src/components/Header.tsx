'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/site';
import { Mail, Phone, Clock } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = siteConfig.navigation as NavItem[];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/95 shadow-sm'}`}>
      {/* Faixa Superior (Top Bar) */}
      <div className={`bg-bronze text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] border-b border-white/10 hidden md:block transition-all duration-500 ease-in-out origin-top overflow-hidden ${scrolled ? 'max-h-0 opacity-0 py-0 border-none' : 'max-h-[50px] py-3'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-white/90" />
              <span>SEG - SEX: 09:00 - 18:00</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-white/20 pr-6 mr-2">
              <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-navy transition-colors">
                <Phone className="w-3 h-3 text-white/90" />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-navy transition-colors">
                <Mail className="w-3 h-3 text-white/90" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`flex justify-between items-center transition-all duration-500 ease-in-out ${scrolled ? 'h-20' : 'h-28'}`}>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Logo Buligon Transparente Header.png"
              alt="Buligon Advogados"
              width={220}
              height={60}
              className={`transition-all duration-500 ease-in-out w-auto ${scrolled ? 'h-10 sm:h-12' : 'h-14 sm:h-16'}`}
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Nav — visível apenas em telas ≥ xl (1280px) */}
          <div className="hidden xl:flex items-center gap-7">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-navy hover:text-bronze font-semibold text-[11px] uppercase tracking-[0.18em] transition-all relative flex items-center gap-1 whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-bronze transition-all group-hover:w-full" />
                </Link>
              </div>
            ))}
          </div>

          {/* Lado direito: CTA + hamburger */}
          <div className="flex items-center gap-4">
            {/* CTA — visível a partir de xl */}
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-block px-7 py-3 bg-navy text-white text-[11px] uppercase tracking-widest font-semibold hover:bg-bronze transition-all active:scale-95 whitespace-nowrap"
            >
              Consultoria
            </a>

            {/* Hamburger — visível abaixo de xl */}
            <button
              className="xl:hidden flex items-center justify-center w-10 h-10 text-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu Móvel / Tablet — visível em telas < xl quando aberto */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-gray-100 py-4 flex flex-col gap-1">
            {navigation.map((item) => (
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="flex-1 text-navy hover:text-bronze font-semibold text-[12px] uppercase tracking-wider transition-colors py-3 px-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              </div>
            ))}

            <div className="pt-3 border-t border-gray-100 mt-2">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-navy text-white text-[11px] uppercase tracking-widest font-semibold hover:bg-bronze transition-all active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fale pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
