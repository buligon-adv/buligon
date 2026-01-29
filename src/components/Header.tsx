'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteConfig } from '@/lib/site';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Logo Desktop */}
            <Image
              src="/Logo Buligon Header Dektop.png"
              alt="Buligon Advogados"
              width={250}
              height={70}
              className="hidden md:block h-16 w-auto"
              priority
              quality={100}
            />
            {/* Logo Mobile */}
            <Image
              src="/Logo Buligon Header Mobile.png"
              alt="Buligon Advogados"
              width={200}
              height={55}
              className="md:hidden h-12 w-auto"
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-navy hover:text-bronze font-semibold text-[10px] uppercase tracking-[0.2em] transition-all relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-bronze transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-navy text-white text-[10px] uppercase tracking-widest font-semibold hover:bg-bronze transition-all shadow-lg active:scale-95"
            >
              Consultoria
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-bronze font-medium transition-colors block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg font-semibold text-white text-center transition-colors hover:opacity-90 bg-navy"
                onClick={() => setMobileMenuOpen(false)}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
