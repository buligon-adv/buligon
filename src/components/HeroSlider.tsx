'use client';

import { useState, useEffect, useCallback } from 'react';
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
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-navy">
      {/* Background with cross-fade */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-40' : 'opacity-100'}`}
        style={
          slide.backgroundImage
            ? {
                backgroundImage: `linear-gradient(rgba(12, 31, 64, 0.85), rgba(12, 31, 64, 0.75)), url(${slide.backgroundImage})`,
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className={`transition-all duration-700 ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="inline-block h-1 w-20 bg-bronze mb-8 animate-pulse" />
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-sans font-semibold text-white mb-8 leading-[1.1] tracking-tight max-w-[12ch] sm:max-w-[20ch]">
              {slide.title.split(' ').map((word, i) => (
                <span 
                  key={i} 
                  className={`inline-block mr-[0.25em] last:mr-0 ${i === 1 ? 'text-bronze italic' : ''}`}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="text-lg sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-light">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 relative">
              {/* Selo rotativo - Otimizado para mobile (Posicionado ainda mais ao topo para evitar sobreposição de textos) */}
              <div className="absolute -top-64 right-0 sm:left-auto sm:right-[400px] lg:right-[520px] lg:-top-24 z-50 pointer-events-none sm:pointer-events-auto">
                <div className="scale-75 sm:scale-75 lg:scale-110 hover:scale-125 transition-transform duration-500 origin-bottom-right">
                  <RotatingSeal />
                </div>
              </div>

              {slide.cta && (
                <a
                  href={slide.cta.href}
                  className="px-10 py-4 rounded-none font-bold text-white transition-all bg-bronze hover:bg-bronze-light shadow-xl text-center uppercase tracking-widest text-xs"
                >
                  {slide.cta.label}
                </a>
              )}
              {slide.secondaryCta && (
                <a
                  href={slide.secondaryCta.href}
                  className="px-10 py-4 rounded-none font-bold text-white border border-white/30 backdrop-blur-sm transition-all hover:bg-white hover:text-navy hover:border-white text-center uppercase tracking-widest text-xs"
                >
                  {slide.secondaryCta.label}
                </a>
              )}
            </div>
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
