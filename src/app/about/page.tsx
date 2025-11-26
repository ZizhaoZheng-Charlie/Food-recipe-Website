"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage: React.FC = () => {
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
        threshold: 0.1,
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
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      <Header />
      <main className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div
            className={`text-center mb-16 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h1 className="font-abril text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-4">
              About Us
            </h1>
            <div className="w-24 h-1 bg-palette-dusty-rose mx-auto mb-6"></div>
            <p className="font-fira text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Discover our mission to bring peace and joy through the art of
              cooking
            </p>
          </div>

          {/* Mission Section */}
          <section
            ref={sectionRef}
            className={`mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{
              animationDelay: isInView ? "0.2s" : "0s",
            }}
          >
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="font-abril text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="font-fira text-base md:text-lg text-white/80 leading-relaxed mb-4">
                At RECIPES, we believe that food has the power to bring people
                together, heal divisions, and create moments of peace in our
                busy lives. Our mission is to share the joy of cooking and the
                comfort of good food with everyone.
              </p>
              <p className="font-fira text-base md:text-lg text-white/80 leading-relaxed">
                We curate and share recipes that not only nourish the body but
                also feed the soul. Every dish we feature is chosen with care,
                representing diverse cultures, traditions, and flavors from
                around the world.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section
            className={`mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{
              animationDelay: isInView ? "0.3s" : "0s",
            }}
          >
            <h2 className="font-abril text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Value 1 */}
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-palette-dusty-rose/50 transition-all duration-300">
                <div className="w-12 h-12 bg-palette-dusty-rose/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-palette-dusty-rose"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-abril text-xl md:text-2xl font-bold text-white mb-3">
                  Community
                </h3>
                <p className="font-fira text-sm md:text-base text-white/70 leading-relaxed">
                  Building connections through shared meals and culinary
                  experiences that bring people together.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-palette-dusty-rose/50 transition-all duration-300">
                <div className="w-12 h-12 bg-palette-dusty-rose/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-palette-dusty-rose"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-abril text-xl md:text-2xl font-bold text-white mb-3">
                  Quality
                </h3>
                <p className="font-fira text-sm md:text-base text-white/70 leading-relaxed">
                  Curating only the finest recipes, tested and perfected to
                  ensure exceptional culinary experiences.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-palette-dusty-rose/50 transition-all duration-300">
                <div className="w-12 h-12 bg-palette-dusty-rose/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-palette-dusty-rose"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-abril text-xl md:text-2xl font-bold text-white mb-3">
                  Passion
                </h3>
                <p className="font-fira text-sm md:text-base text-white/70 leading-relaxed">
                  Driven by our love for food and the belief that every meal can
                  be a moment of peace and joy.
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section
            className={`mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{
              animationDelay: isInView ? "0.4s" : "0s",
            }}
          >
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="font-abril text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="font-fira text-base md:text-lg text-white/80 leading-relaxed mb-4">
                RECIPES was born from a simple yet powerful idea: that sharing
                food can bring calm to conflict and create bridges between
                people. What started as a personal collection of favorite
                recipes has grown into a community-driven platform dedicated to
                celebrating the universal language of food.
              </p>
              <p className="font-fira text-base md:text-lg text-white/80 leading-relaxed mb-4">
                We understand that in today&apos;s fast-paced world, finding
                time to cook and share meals can be challenging. That&apos;s why
                we&apos;ve made it our mission to provide you with accessible,
                delicious recipes that fit into your lifestyle while bringing
                the warmth and comfort of home-cooked meals to your table.
              </p>
              <p className="font-fira text-base md:text-lg text-white/80 leading-relaxed">
                Whether you&apos;re a seasoned chef or just starting your
                culinary journey, we&apos;re here to inspire, guide, and support
                you every step of the way. Join us in discovering the peace that
                comes through food.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section
            className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{
              animationDelay: isInView ? "0.5s" : "0s",
            }}
          >
            <div className="bg-gradient-to-r from-palette-dusty-rose/20 to-palette-raspberry-red/20 backdrop-blur-sm border border-palette-dusty-rose/30 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-abril text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="font-fira text-base md:text-lg text-white/80 mb-6 max-w-2xl mx-auto">
                Have a recipe to share? Questions about our platform? We&apos;d
                love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:info@recipes.com"
                  className="font-fira px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 hover:border-white/40 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="/recipes"
                  className="font-fira px-6 py-3 bg-transparent border border-white/30 rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  Explore Recipes
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
