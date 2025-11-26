import VideoBackground from "@/components/VideoBackground";
import Header from "@/components/Header";
import ScrollArrow from "@/components/ScrollArrow";
import DiscoverPeace from "@/components/DiscoverPeace";
import FoodRecipesPreview from "@/components/FoodRecipesPreview";
import AccessUnlimitedRecipes from "@/components/AccessUnlimitedRecipes";
import EmailSubscribe from "@/components/EmailSubscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-screen items-center justify-end p-24">
        <Header />
        <VideoBackground />
        <div className="relative z-10 pr-8 md:pr-16">
          <h1 className="font-abril text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-6 animate-slide-in-right whitespace-nowrap">
            Peace through food
          </h1>
          <p className="font-fira text-xl md:text-2xl text-white drop-shadow-lg opacity-90 animate-slide-in-right-delay text-right mb-8">
            Sharing food brings calm to conflict.
          </p>
          <div className="flex justify-end animate-slide-in-right-delay">
            <a
              href="/recipes"
              className="font-abril text-lg md:text-xl px-6 py-3 bg-palette-dusty-rose/80 backdrop-blur-sm border border-palette-dusty-rose/50 rounded-full text-white drop-shadow-lg hover:bg-palette-dusty-rose hover:border-palette-dusty-rose transition-all duration-300 hover:scale-105"
            >
              Food Recipes
            </a>
          </div>
        </div>

        <ScrollArrow />
      </main>
      <DiscoverPeace />
      <FoodRecipesPreview />
      <AccessUnlimitedRecipes />
      <EmailSubscribe />
      <Footer />
    </>
  );
}
