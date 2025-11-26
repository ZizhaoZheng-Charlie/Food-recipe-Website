"use client";

import React, { useState, useEffect, useRef } from "react";

const DiscoverPeace: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const quotes = [
    "Food carries the power to unite, to heal, and to offer calm amid life's noise. When we share meals, stories, and recipes, we uncover a quiet kind of peace—one born from connection, nourishment, and the simple joy of good food.",
    "In the kitchen, we find tranquility. Each ingredient, each recipe, each shared meal becomes a bridge to peace—connecting hearts and soothing souls through the universal language of food.",
    "Peace begins at the table. When we gather around food, we set aside differences and find common ground in the simple act of breaking bread together.",
    "The aroma of home-cooked meals, the warmth of shared recipes, the comfort of familiar flavors—these are the gentle pathways that lead us to inner peace and harmony.",
    "Food is more than sustenance; it's a meditation, a ritual of peace. In preparing and sharing meals, we create moments of calm in a chaotic world.",
    "Through food, we discover that peace isn't found in silence, but in the laughter around the dinner table, the stories shared over coffee, and the love poured into every dish.",
    "Every meal is an opportunity for peace—a chance to slow down, to be present, to nourish not just our bodies but our spirits through the sacred act of eating together.",
    "The kitchen is a sanctuary where peace is crafted with every stir, every taste, every shared moment. Here, we find solace in simplicity and joy in the ordinary.",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Rotate quotes every 6 seconds
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isInView, quotes.length]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] min-h-[500px] flex items-center justify-center px-4 md:px-8 overflow-hidden"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1920&q=80')",
            filter: "blur(20px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 w-full ${
          isInView ? "animate-pop-out" : "opacity-0"
        }`}
      >
        <h2 className="font-abril text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl mb-8 text-center leading-tight px-4 md:px-8">
          Discover Peace through food
        </h2>
        <div className="w-24 h-1 bg-palette-dusty-rose mx-auto mb-8 relative z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative min-h-[120px] md:min-h-[140px] lg:min-h-[160px]">
            {quotes.map((quote, index) => (
              <p
                key={index}
                className={`font-fira text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-lg max-w-2xl mx-auto leading-relaxed absolute inset-0 transition-opacity duration-1000 ${
                  index === currentQuoteIndex
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {quote}
              </p>
            ))}
          </div>

          {/* Quote Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuoteIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentQuoteIndex
                    ? "w-8 bg-palette-dusty-rose"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`View quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverPeace;
