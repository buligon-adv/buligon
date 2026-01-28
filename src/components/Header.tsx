'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteConfig } from '@/lib/site';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Logo Desktop */}
            <Image
              src="/Logo Buligon Header Dektop.png"
              alt="Buligon Advogados"
              width={220}
              height={60}
              className="hidden md:block h-14 w-auto"
              priority
              quality={100}
            />
            {/* Logo Mobile */}
            <Image
              src="/Logo Buligon Header Mobile.png"
              alt="Buligon Advogados"
              width={180}
              height={48}
              className="md:hidden h-11 w-auto"
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-bronze font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg font-semibold text-white transition-colors hover:opacity-90 bg-navy"
            >
              Falar no WhatsApp
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
