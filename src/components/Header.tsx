"use client";

import React, { useState } from "react";
import { NavItem } from "@/types/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Recipes", href: "/recipes" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search:", searchQuery);
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50 animate-slide-down-from-top">
      <div className="max-w-7xl mx-auto">
        <div className="bg-palette-taupe-grey/40 backdrop-blur-sm border border-palette-dusty-rose/20 rounded-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Company Name */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="font-abril text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg hover:opacity-80 transition-opacity"
              >
                RECIPES
              </a>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center flex-1 space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-abril text-base lg:text-lg text-white drop-shadow-md hover:opacity-80 transition-opacity whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Search Bar - Right */}
            <div className="hidden md:flex items-center flex-shrink-0">
              <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 pl-10 pr-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50 focus:border-palette-dusty-rose/50 transition-all w-40 lg:w-52"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </form>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 pl-8 pr-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50 focus:border-palette-dusty-rose/50 transition-all w-32 text-sm"
                  />
                  <svg
                    className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white/60"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </form>
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:opacity-80 transition-opacity"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 animate-fade-in-up">
              <nav className="space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block font-abril text-lg text-white drop-shadow-md hover:opacity-80 transition-opacity py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
