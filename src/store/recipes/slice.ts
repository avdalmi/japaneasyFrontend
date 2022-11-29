import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

export interface RecipeState {
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
}

export interface IngredientState {
  id: number;
  ingredientDescriptionId: number;
  measurement: string;
  name: string;
  quantity: number;
  recipeId: number;
}
export interface InstructionsState {
  id: number;
  description: string;
  recipeId: number;
  step: number;
}

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
export interface CategoryState {
  name: string;
  id: number;
}

export interface RecipeSliceState {
  recipes: RecipeState[];
  fullRecipes: CompleteRecipeState | null;
  categories: CategoryState[];
}

const initialState: RecipeSliceState = {
  recipes: [],
  fullRecipes: null,
  categories: [],
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    fetchAllRecipes: (state, action: PayloadAction<RecipeState[]>) => {
      state.recipes = action.payload;
      //   console.log("current State", current(state));
    },
    fetchRecipeById: (state, action: PayloadAction<CompleteRecipeState>) => {
      //  console.log("action", action)
      state.fullRecipes = action.payload;
      //   console.log("current state", current(state))
    },
    fetchCategories: (state, action: PayloadAction<CategoryState[]>) => {
      //   console.log("action", action)
      state.categories = action.payload;
      //   console.log("current state", current(state))
    },
  },
});

//Selectors
//@ts-ignore
export const selectRecipe = (state: RootState): RecipeState[] => {
  return state.recipe.recipes;
};

export const selectFullRecipe = (state: RootState) => {
  // console.log("rootstate", state.recipe)
  return state.recipe.fullRecipes;
};

export const selectCategories = (state: RootState): CategoryState[] => {
  //   console.log("rootstate", state.recipe)
  return state.recipe.categories;
};
export const { fetchAllRecipes, fetchRecipeById, fetchCategories } =
  recipeSlice.actions;
export default recipeSlice.reducer;
