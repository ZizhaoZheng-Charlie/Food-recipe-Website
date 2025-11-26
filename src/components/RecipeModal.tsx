"use client";

import React, { useEffect } from "react";
import { Recipe } from "@/types/recipe";

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !recipe) {
    return null;
  }

  if (recipe.locked) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div
          className="relative z-10 w-full max-w-md bg-black/90 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl animate-pop-out p-8 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mb-6">
            <svg
              className="w-20 h-20 text-white/90 mx-auto mb-4"
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
              Recipe Locked
            </h2>
            <p className="font-fira text-lg text-white/80 mb-6">
              This recipe is part of our premium collection. Unlock access to view
              the full recipe details.
            </p>
            <button
              onClick={onClose}
              className="font-abril text-lg px-8 py-3 bg-palette-dusty-rose hover:bg-palette-dusty-rose/90 border border-palette-dusty-rose rounded-full text-white transition-all duration-300 hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-black/90 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl animate-pop-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] hide-scrollbar">
          {/* Recipe Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-palette-dusty-rose/80 backdrop-blur-sm rounded-full text-white text-sm font-fira">
                {recipe.category}
              </span>
            </div>
          </div>

          {/* Recipe Details */}
          <div className="p-6 md:p-8">
            {/* Title */}
            <h2 className="font-abril text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              {recipe.title}
            </h2>

            {/* Time */}
            <div className="flex items-center text-white/80 mb-6 font-fira">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg">{recipe.time}</span>
            </div>

            {/* Divider */}
            <div className="w-24 h-1 bg-palette-dusty-rose mb-6"></div>

            {/* Ingredients Section */}
            {recipe.ingredients && recipe.ingredients.length > 0 && (
              <div className="mb-8">
                <h3 className="font-abril text-2xl md:text-3xl text-white mb-4">
                  Ingredients
                </h3>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6">
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 font-fira text-white/90"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-palette-dusty-rose/80 flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </span>
                        <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                          <span className="text-base md:text-lg">
                            {ingredient.name}
                          </span>
                          <span className="text-palette-dusty-rose text-sm md:text-base font-medium">
                            {ingredient.amount}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Fallback to old format if no ingredients array */}
            {(!recipe.ingredients || recipe.ingredients.length === 0) && (
              <div className="mb-8">
                <h3 className="font-abril text-2xl md:text-3xl text-white mb-4">
                  Ingredients
                </h3>
                <div className="space-y-4">
                  {/* Meats */}
                  {recipe.meats && recipe.meats.length > 0 && (
                    <div>
                      <h4 className="font-fira text-lg text-palette-dusty-rose mb-2">
                        Meats
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {recipe.meats.map((meat, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-fira"
                          >
                            {meat}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Vegetables */}
                  {recipe.vegetables && recipe.vegetables.length > 0 && (
                    <div>
                      <h4 className="font-fira text-lg text-palette-dusty-rose mb-2">
                        Vegetables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {recipe.vegetables.map((vegetable, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-fira"
                          >
                            {vegetable}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* No ingredients message */}
                  {(!recipe.meats || recipe.meats.length === 0) &&
                    (!recipe.vegetables ||
                      recipe.vegetables.length === 0) && (
                      <p className="font-fira text-white/60 text-sm">
                        No specific ingredients listed for this recipe.
                      </p>
                    )}
                </div>
              </div>
            )}

            {/* Procedure Section */}
            {recipe.procedure && recipe.procedure.length > 0 && (
              <div className="mb-6">
                <h3 className="font-abril text-2xl md:text-3xl text-white mb-4">
                  Instructions
                </h3>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6">
                  <ol className="space-y-4">
                    {recipe.procedure.map((step, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 font-fira text-white/90"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-palette-dusty-rose/80 flex items-center justify-center text-white text-base font-bold">
                          {index + 1}
                        </span>
                        <span className="flex-1 text-base md:text-lg leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;

