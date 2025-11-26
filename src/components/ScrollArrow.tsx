"use client";

import React, { useState, useEffect } from "react";

const ScrollArrow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleScroll}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 group cursor-pointer focus:outline-none animate-fade-in-up"
      aria-label="Scroll to next section"
    >
      <div className="flex flex-col items-center animate-bounce group-hover:animate-none">
        <span className="text-white text-sm font-fira mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Scroll
        </span>
        <svg
          className="w-8 h-8 text-white drop-shadow-lg group-hover:scale-110 group-hover:translate-y-1 transition-all duration-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </button>
  );
};

export default ScrollArrow;

