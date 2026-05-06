'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import RotatingSeal from './RotatingSeal';

interface Slide {
  title: string;
  subtitle: string;
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nextSlide = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 500);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsFading(false);
    }, 500);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[600px] max-h-[750px] h-[75vh] sm:h-[85vh] flex items-center overflow-hidden bg-navy max-w-[1920px] mx-auto">
      {/* Background with cross-fade */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-40' : 'opacity-100'}`}
        style={
          slide.backgroundImage
            ? {
                backgroundImage: `linear-gradient(rgba(12, 31, 64, 0.75), rgba(12, 31, 64, 0.85)), url(${slide.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {
                background: 'linear-gradient(135deg, #0C1F40 0%, #162d5a 100%)'
              }
        }
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
      <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze/30 to-transparent hidden lg:block" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-20 lg:pt-0">
          <div className={`transition-all duration-700 ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="inline-block h-1 w-16 sm:w-20 bg-bronze mb-6 sm:mb-8 animate-pulse" />
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-sans font-semibold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight max-w-[15ch] sm:max-w-[20ch]">
              {slide.title.split(' ').map((word, i) => (
                <span 
                  key={i} 
                  className={`inline-block mr-[0.25em] last:mr-0 ${i === 1 ? 'text-bronze italic' : ''}`}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="text-base sm:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-xl sm:max-w-2xl font-light">
              {slide.subtitle}
            </p>
            <div className="flex items-center gap-6 mt-2">
              {slide.cta && (
                <Link
                  href={slide.cta.href}
                  className="group relative inline-flex items-center gap-4 text-white text-[11px] sm:text-[12px] uppercase tracking-[0.3em] font-medium transition-all"
                >
                  <span className="group-hover:text-bronze transition-colors flex items-center gap-3">
                    {slide.cta.label}
                    <svg 
                      className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300 text-bronze/80" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                  <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-bronze/50 group-hover:w-full transition-all duration-500 ease-out" />
                </Link>
              )}
            </div>

            {/* Selo mobile/tablet — abaixo dos CTAs, centralizado, sem sobrepor nada */}
            <div className="lg:hidden flex justify-start mt-12">
              <div className="scale-75 origin-left opacity-90 transition-transform duration-500">
                <RotatingSeal />
              </div>
            </div>
          </div>
        </div>

      {/* Selo desktop — posicionado na parte inferior para não sobrepor os textos do slider */}
      <div className="hidden lg:block absolute right-[5%] xl:right-[8%] bottom-16 xl:bottom-24 z-20 pointer-events-none xl:pointer-events-auto">
        <div className="scale-90 xl:scale-110 hover:scale-[1.2] transition-transform duration-700 origin-center bg-white/5 backdrop-blur-sm p-4 rounded-full border border-white/10">
          <RotatingSeal />
        </div>
      </div>

      {/* Slider Controls - Centralized Risks Only */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center z-20">
        <div className="flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (current === i) return;
                setIsFading(true);
                setTimeout(() => {
                  setCurrent(i);
                  setIsFading(false);
                }, 500);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${current === i ? 'w-16 bg-bronze' : 'w-8 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background Animated Blurs */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-bronze/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full bg-navy-light/40 blur-[80px] pointer-events-none" />
    </section>
  );
}
