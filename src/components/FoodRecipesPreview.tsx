"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Recipe } from "@/types/recipe";

const FoodRecipesPreview: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const featuredRecipes: Recipe[] = [
    {
      id: 1,
      title: "Mediterranean Quinoa Bowl",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
      category: "Healthy",
      time: "30 min",
    },
    {
      id: 2,
      title: "Herb-Crusted Salmon",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
      category: "Seafood",
      time: "25 min",
    },
    {
      id: 3,
      title: "Roasted Vegetable Medley",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
      category: "Vegetarian",
      time: "40 min",
    },
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
        threshold: 0.2, // Trigger when 20% of the section is visible
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
      id="recipes-preview"
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-black/50 to-black/80"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-abril text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-4">
            Featured Recipes
          </h2>
          <div className="w-24 h-1 bg-palette-dusty-rose mx-auto mb-6"></div>
          <p className="font-fira text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Discover our handpicked collection of recipes that bring peace and joy to your table
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredRecipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isInView ? `${0.2 + index * 0.15}s` : "0s",
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-palette-dusty-rose/80 backdrop-blur-sm rounded-full text-white text-sm font-fira">
                    {recipe.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-abril text-2xl md:text-3xl text-white drop-shadow-lg mb-2">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm font-fira">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {recipe.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{
            animationDelay: isInView ? "0.65s" : "0s",
          }}
        >
          <a
            href="/recipes"
            className="inline-block font-abril text-lg md:text-xl px-8 py-4 bg-palette-dusty-rose hover:bg-palette-dusty-rose/90 border border-palette-dusty-rose rounded-full text-white drop-shadow-lg transition-all duration-300 hover:scale-105"
          >
            View All Recipes
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodRecipesPreview;

