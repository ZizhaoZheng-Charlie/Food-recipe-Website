"use client";

import React, { useState, useEffect, useRef } from "react";

const AccessUnlimitedRecipes: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
        threshold: 0.2,
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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-palette-ash-grey/20 via-palette-dusty-rose/20 to-palette-raspberry-red/20"
    >
      {/* Left Section - Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-24 bg-palette-taupe-grey/10 backdrop-blur-sm relative overflow-hidden">
        {/* Subtle color accents in background */}
        <div
          className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-palette-dusty-rose/30 to-palette-raspberry-red/30 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-1000 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-palette-ash-grey/30 to-palette-dusty-rose/30 rounded-full blur-3xl -ml-48 -mb-48 transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>

        <div className="max-w-lg mx-auto lg:mx-0 relative z-10">
          <h3
            className={`font-fira text-sm md:text-base uppercase tracking-wider text-palette-raspberry-red mb-4 font-bold transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
            style={{
              transitionDelay: isInView ? "0.1s" : "0s",
            }}
          >
            ACCESS UNLIMITED
          </h3>
          <h2
            className={`font-abril text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-palette-taupe-grey mb-6 leading-tight transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
            style={{
              transitionDelay: isInView ? "0.3s" : "0s",
            }}
          >
            RECIPE COLLECTION
          </h2>
          <p
            className={`font-fira text-base md:text-lg lg:text-xl text-palette-grey leading-relaxed mb-8 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isInView ? "0.5s" : "0s",
            }}
          >
            From first choice of ingredients in our curated collection of 1000+
            world-class recipes, to the backing of culinary specialists from every
            continent: Our community has unparalleled access to the very best
            cooking has to offer.
          </p>
          <button
            className={`group relative font-abril text-sm md:text-base lg:text-lg uppercase tracking-wide px-10 py-5 bg-gradient-to-r from-palette-dusty-rose via-palette-raspberry-red to-palette-dusty-rose hover:from-palette-raspberry-red hover:via-palette-dusty-rose hover:to-palette-raspberry-red text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isInView ? "0.7s" : "0s",
            }}
          >
            <span className="relative z-10">EXPLORE RECIPES</span>
            <div className="absolute inset-0 bg-gradient-to-r from-palette-raspberry-red via-palette-dusty-rose to-palette-raspberry-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Right Section - Split Image with Vibrant Colors */}
      <div className="w-full lg:w-1/2 relative overflow-hidden">
        {/* Above Section - Food Preparation */}
        <div
          className={`relative h-1/2 w-full transition-all duration-1000 overflow-hidden group ${
            isInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
          style={{
            transitionDelay: isInView ? "0.2s" : "0s",
          }}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-110 ${
              isInView ? "scale-100" : "scale-110"
            }`}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-palette-dusty-rose/10 to-palette-raspberry-red/20 group-hover:via-palette-dusty-rose/20 group-hover:to-palette-raspberry-red/30 transition-all duration-500"></div>
          </div>
          {/* Colorful overlay text */}
          <div
            className={`absolute bottom-4 left-4 right-4 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isInView ? "0.6s" : "0s",
            }}
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-palette-dusty-rose/90 to-palette-raspberry-red/90 backdrop-blur-sm rounded">
              <span className="font-abril text-2xl md:text-3xl text-white drop-shadow-2xl font-bold">
                CULINARY ARTS
              </span>
            </div>
          </div>
          {/* Color accent dots */}
          <div
            className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${
              isInView
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-0 rotate-180"
            }`}
            style={{
              transitionDelay: isInView ? "0.8s" : "0s",
            }}
          >
            <div className="w-4 h-4 rounded-full bg-palette-dusty-rose shadow-lg border-2 border-white"></div>
            <div
              className="w-4 h-4 rounded-full bg-palette-raspberry-red shadow-lg border-2 border-white"
              style={{
                transitionDelay: isInView ? "0.9s" : "0s",
              }}
            ></div>
          </div>
        </div>

        {/* Below Section - Vibrant Food Display */}
        <div
          className={`relative h-1/2 w-full transition-all duration-1000 overflow-hidden group ${
            isInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
          style={{
            transitionDelay: isInView ? "0.4s" : "0s",
          }}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-110 ${
              isInView ? "scale-100" : "scale-110"
            }`}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-palette-raspberry-red/20 via-palette-dusty-rose/10 to-transparent group-hover:from-palette-raspberry-red/30 group-hover:via-palette-dusty-rose/20 transition-all duration-500"></div>
          </div>
          {/* Vibrant color accents */}
          <div
            className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${
              isInView
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-0 rotate-180"
            }`}
            style={{
              transitionDelay: isInView ? "1s" : "0s",
            }}
          >
            <div className="w-4 h-4 rounded-full bg-palette-dusty-rose shadow-lg border-2 border-white animate-pulse"></div>
            <div
              className="w-4 h-4 rounded-full bg-palette-raspberry-red shadow-lg border-2 border-white animate-pulse delay-75"
              style={{
                transitionDelay: isInView ? "1.1s" : "0s",
              }}
            ></div>
            <div
              className="w-4 h-4 rounded-full bg-palette-ash-grey shadow-lg border-2 border-white animate-pulse delay-150"
              style={{
                transitionDelay: isInView ? "1.2s" : "0s",
              }}
            ></div>
          </div>
          {/* Floating colorful elements */}
          <div
            className={`absolute bottom-8 left-4 flex items-center gap-3 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{
              transitionDelay: isInView ? "1.1s" : "0s",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-palette-dusty-rose animate-float"></div>
            <div
              className="w-2 h-2 rounded-full bg-palette-raspberry-red animate-float-delay-1"
              style={{
                transitionDelay: isInView ? "1.2s" : "0s",
              }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-palette-ash-grey animate-float-delay-2"
              style={{
                transitionDelay: isInView ? "1.3s" : "0s",
              }}
            ></div>
          </div>
        </div>

        {/* Decorative vibrant color bars on the left edge */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-palette-dusty-rose via-palette-raspberry-red to-palette-dusty-rose shadow-lg transition-all duration-1000 ${
            isInView ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
          style={{
            transformOrigin: "top",
            transitionDelay: isInView ? "0.3s" : "0s",
          }}
        ></div>

        {/* Additional color accents */}
        <div
          className={`absolute top-1/2 left-4 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-palette-dusty-rose to-palette-raspberry-red rounded-full transition-all duration-1000 ${
            isInView
              ? "opacity-60 scale-y-100"
              : "opacity-0 scale-y-0"
          }`}
          style={{
            transformOrigin: "center",
            transitionDelay: isInView ? "0.5s" : "0s",
          }}
        ></div>
      </div>
    </section>
  );
};

export default AccessUnlimitedRecipes;

