import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

export const Carousel = () => {
   console.log('CAROUSEL CARREGOU - TESTE 123');
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
    <div className="carousel-container">
      <div className="carousel-frame">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="carousel-nav-btn prev"
        aria-label="Slide anterior"
      >
        <ChevronLeft />
        <ChevronRight />
      </button>
      <button
        onClick={handleNext}
        className="carousel-nav-btn next"
        aria-label="Próximo slide"
      >
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};