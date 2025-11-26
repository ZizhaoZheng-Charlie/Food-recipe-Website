"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Recipe } from "@/types/recipe";
import RecipeModal from "./RecipeModal";

interface RecipeCarouselProps {
  recipes: Recipe[];
  isInView: boolean;
}

const RecipeCarousel: React.FC<RecipeCarouselProps> = ({
  recipes,
  isInView,
}) => {
  const itemsPerPage = 16; // 4x4 grid
  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCarouselLocked, setIsCarouselLocked] = useState(true);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRecipes = recipes.slice(startIndex, endIndex);

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleRecipeClick = (recipe: Recipe) => {
    if (recipe.locked) {
      return; // Don't open modal for locked recipes
    }
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  if (recipes.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="font-fira text-xl text-white/60 mb-4">No recipes found</p>
        <p className="font-fira text-base text-white/40">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {isCarouselLocked && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm rounded-2xl">
          <div className="max-w-md mx-auto p-8 text-center">
            <div className="mb-6">
              <svg
                className="w-24 h-24 text-white/90 mx-auto mb-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h2 className="font-abril text-3xl md:text-4xl text-white mb-4">
                Recipe Collection Locked
              </h2>
              <p className="font-fira text-lg text-white/80 mb-8">
                This recipe collection is part of our premium collection. Unlock
                access to view all recipes.
              </p>
              <button
                onClick={() => setIsCarouselLocked(false)}
                className="font-abril text-lg px-8 py-3 bg-palette-dusty-rose hover:bg-palette-dusty-rose/90 border border-palette-dusty-rose rounded-full text-white transition-all duration-300 hover:scale-105"
              >
                Unlock Collection
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Carousel Container */}
      <div
        className={`relative overflow-hidden ${isCarouselLocked ? "pointer-events-none opacity-30" : ""}`}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 transition-all duration-500"
          style={{
            transform: `translateX(0)`,
          }}
        >
          {currentRecipes.map((recipe, index) => (
            <div
              key={recipe.id}
              onClick={() => handleRecipeClick(recipe)}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 ${
                recipe.locked
                  ? "cursor-not-allowed opacity-75"
                  : "hover:border-white/20 hover:scale-105 cursor-pointer"
              } ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{
                animationDelay: isInView
                  ? `${0.4 + (index % itemsPerPage) * 0.05}s`
                  : "0s",
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    recipe.locked ? "" : "group-hover:scale-110"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                {recipe.locked && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 md:w-16 md:h-16 text-white/90 mx-auto mb-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <p className="font-fira text-white text-sm md:text-base font-semibold">
                        Locked
                      </p>
                    </div>
                  </div>
                )}
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
      </div>

      {/* Navigation Buttons */}
      {totalPages > 1 && !isCarouselLocked && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 lg:-translate-x-24 xl:-translate-x-28 z-10 bg-palette-dusty-rose/80 hover:bg-palette-dusty-rose text-white p-4 md:p-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
            disabled={currentPage === 0}
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 lg:translate-x-24 xl:translate-x-28 z-10 bg-palette-dusty-rose/80 hover:bg-palette-dusty-rose text-white p-4 md:p-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
            disabled={currentPage === totalPages - 1}
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Page Indicators */}
      {totalPages > 1 && !isCarouselLocked && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? "w-8 bg-palette-dusty-rose"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Page Info */}
      {totalPages > 1 && !isCarouselLocked && (
        <div className="text-center mt-4">
          <p className="font-fira text-white/60 text-sm">
            Page {currentPage + 1} of {totalPages}
          </p>
        </div>
      )}

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default RecipeCarousel;
