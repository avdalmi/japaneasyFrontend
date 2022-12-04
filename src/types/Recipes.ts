export type Recipe = {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  difficulty: string;
  portions: number;
};
export type Ingredients = {
  id: number;
  ingredientDescriptionId: number;
  measurement: string;
  name: string;
  quantity: number;
  recipeId: number;
};

export type Instructions = {
  id: number;
  description: string;
  recipeId: number;
  step: number;
};

export interface FullRecipe {
  id?: number;
  categoryId?: number;
  name?: string;
  description?: string;
  rating?: number;
  image?: string;
  difficulty?: string;
  portions?: number;
  prefectureId?: number;
  time?: string;
  ingredients?: Ingredients[];
  instructions?: Instructions[];
}

export type RecipeState = {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  time: string;
  difficulty: string;
  portions: number;
  prefectureId: number;
  SavedUsers?: SavedUserState;
};

export type IngredientState = {
  id: number;
  ingredientDescriptionId: number;
  measurement: string;
  name: string;
  quantity: number;
  recipeId: number;
};
export type InstructionsState = {
  id: number;
  description: string;
  recipeId: number;
  step: number;
};

export type SavedUserState = {
  isFavorite: boolean;
  isSaved: boolean;
};

export interface CompleteRecipeState {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  difficulty: string;
  portions: number;
  prefectureId: number;
  time: string;
  ingredients: IngredientState[];
  instructions: InstructionsState[];
}
export type CategoryState = {
  name: string;
  id: number;
};
