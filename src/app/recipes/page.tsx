"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeCarousel from "@/components/RecipeCarousel";
import { Recipe } from "@/types/recipe";
import { mockRecipes } from "@/mock-data/recipes";

const RecipesPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Sample recipes data - in a real app, this would come from an API
  const allRecipes = mockRecipes;

  const categories = [
    "All",
    ...Array.from(new Set(allRecipes.map((r) => r.category))),
  ];

  // Extract all unique meats from recipes
  const allMeats = Array.from(
    new Set(
      allRecipes
        .flatMap((r) => r.meats || [])
        .filter((m) => m && m.trim() !== "")
    )
  ).sort();

  useEffect(() => {
    setRecipes(allRecipes);
    setFilteredRecipes(allRecipes);
  }, [allRecipes]);

  useEffect(() => {
    let filtered = recipes;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (recipe) => recipe.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected meats
    if (selectedMeats.length > 0) {
      filtered = filtered.filter((recipe) => {
        const recipeMeats = recipe.meats || [];
        return selectedMeats.some((meat) =>
          recipeMeats.some((r) => r.toLowerCase() === meat.toLowerCase())
        );
      });
    }

    setFilteredRecipes(filtered);
  }, [searchQuery, selectedCategory, selectedMeats, recipes]);

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
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div
            className={`text-center mb-12 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h1 className="font-abril text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-4">
              All Recipes
            </h1>
            <div className="w-24 h-1 bg-palette-dusty-rose mx-auto mb-6"></div>
            <p className="font-fira text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Discover our complete collection of recipes that bring peace and
              joy to your table
            </p>
          </div>

          {/* Search and Filter Section */}
          <div
            className={`mb-12 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{
              animationDelay: isInView ? "0.2s" : "0s",
            }}
          >
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search recipes..."
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-4 pl-12 pr-6 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50 focus:border-palette-dusty-rose transition-all font-fira"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60"
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
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <span className="font-fira text-white/80 text-sm md:text-base">
                  Filter by:
                </span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-fira text-sm md:text-base transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-palette-dusty-rose text-white border border-palette-dusty-rose"
                        : "bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 hover:border-white/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Advanced Search Toggle */}
              <div className="flex justify-center">
                <button
                  onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full font-fira text-sm md:text-base bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <span>Advanced Search</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      showAdvancedSearch ? "rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Advanced Search Panel */}
              {showAdvancedSearch && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="max-w-2xl mx-auto">
                    {/* Meats Filter */}
                    <div>
                      <h3 className="font-fira text-white/90 text-base md:text-lg mb-3 text-center">
                        Meats
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {allMeats.map((meat) => {
                          const isSelected = selectedMeats.includes(meat);
                          return (
                            <button
                              key={meat}
                              onClick={() => {
                                if (isSelected) {
                                  setSelectedMeats(
                                    selectedMeats.filter((m) => m !== meat)
                                  );
                                } else {
                                  setSelectedMeats([...selectedMeats, meat]);
                                }
                              }}
                              className={`px-3 py-1.5 rounded-full font-fira text-xs md:text-sm transition-all duration-300 ${
                                isSelected
                                  ? "bg-palette-dusty-rose text-white border border-palette-dusty-rose"
                                  : "bg-white/10 text-white/70 border border-white/20 hover:bg-white/20 hover:border-white/30"
                              }`}
                            >
                              {meat}
                            </button>
                          );
                        })}
                        {allMeats.length === 0 && (
                          <p className="font-fira text-white/50 text-sm">
                            No meat options available
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Clear Filters Button */}
                  {selectedMeats.length > 0 && (
                    <div className="mt-4 flex justify-center">
                      <button
                        onClick={() => {
                          setSelectedMeats([]);
                        }}
                        className="px-4 py-2 rounded-full font-fira text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/30 transition-all duration-300"
                      >
                        Clear Advanced Filters
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div
            className={`mb-8 text-center ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{
              animationDelay: isInView ? "0.3s" : "0s",
            }}
          >
            <p className="font-fira text-white/60">
              {filteredRecipes.length}{" "}
              {filteredRecipes.length === 1 ? "recipe" : "recipes"} found
            </p>
          </div>

          {/* Recipes Carousel */}
          <section ref={sectionRef} className="relative">
            <RecipeCarousel recipes={filteredRecipes} isInView={isInView} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecipesPage;
