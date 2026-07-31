import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Carousel = () => {
  const images = [
    '/Img/carrossel/1.png',
    '/Img/carrossel/2.png',
    '/Img/carrossel/3.png',
    '/Img/carrossel/4.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-[#5a371c] shadow-2xl relative group">
      <div className="relative w-full aspect-[6/1]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-[#1a0f08]/70 hover:bg-[#1a0f08] text-[#d4af37] p-2 rounded-full border border-[#5a371c] opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-[#1a0f08]/70 hover:bg-[#1a0f08] text-[#d4af37] p-2 rounded-full border border-[#5a371c] opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-[#d4af37] w-6'
                : 'bg-[#d4af37]/40 hover:bg-[#d4af37]/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
