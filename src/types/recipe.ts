export interface Ingredient {
  name: string;
  amount: string;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
  category: string;
  time: string;
  meats?: string[];
  vegetables?: string[];
  ingredients?: Ingredient[];
  procedure?: string[];
  locked?: boolean;
}

