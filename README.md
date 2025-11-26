# Peace Through Food - Recipe Website

A modern, beautiful recipe website built with Next.js, TypeScript, and Tailwind CSS. The platform promotes the concept of "Peace through food" - sharing food brings calm to conflict.

## Features

- **Homepage** with video background and hero section
- **Recipe Browser** with advanced filtering and search capabilities
  - Category filtering
  - Meat type filtering
  - Search by recipe name
  - Recipe carousel with detailed views
  - Recipe modal with full ingredients and instructions
- **Multiple Pages**: About, Contact, Pricing, and Recipes
- **Email Subscription** component
- **Responsive Design** optimized for all devices
- **Modern UI/UX** with smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: 
  - Abril Fatface (headings)
  - Fira Sans (body text)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Webpage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server (after build)
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── pricing/           # Pricing page
│   ├── recipes/           # Recipes listing page
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AccessUnlimitedRecipes.tsx
│   ├── DiscoverPeace.tsx
│   ├── EmailSubscribe.tsx
│   ├── FoodRecipesPreview.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── RecipeCarousel.tsx
│   ├── RecipeModal.tsx
│   ├── ScrollArrow.tsx
│   └── VideoBackground.tsx
├── mock-data/            # Mock data for development
│   └── recipes.ts        # Recipe data
└── types/                # TypeScript type definitions
    ├── navigation.ts
    └── recipe.ts
```

## Key Components

- **Header**: Navigation component with responsive menu
- **VideoBackground**: Full-screen video background for homepage
- **RecipeCarousel**: Interactive carousel for browsing recipes
- **RecipeModal**: Detailed recipe view with ingredients and instructions
- **FoodRecipesPreview**: Preview section showcasing featured recipes
- **DiscoverPeace**: Content section about the mission
- **AccessUnlimitedRecipes**: Call-to-action component
- **EmailSubscribe**: Newsletter subscription form
- **Footer**: Site footer with links and information

## Development

The project uses:
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Next.js App Router** for routing and server components
- **Custom fonts** from Google Fonts

## Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn about TypeScript

## License

This project is private and proprietary.
