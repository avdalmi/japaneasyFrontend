import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import {
  RecipeState,
  CompleteRecipeState,
  CategoryState,
} from "../../types/Recipes";

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
    },
    fetchRecipeById: (state, action: PayloadAction<CompleteRecipeState>) => {
      state.fullRecipes = action.payload;
    },
    fetchCategories: (state, action: PayloadAction<CategoryState[]>) => {
      state.categories = action.payload;
    },
  },
});

//Selectors
export const selectRecipe = (state: RootState): RecipeState[] =>
  state.recipe.recipes;

export const selectFullRecipe = (state: RootState) => state.recipe.fullRecipes;

export const selectCategories = (state: RootState): CategoryState[] => {
  // console.log(state.recipe.categories);
  return state.recipe.categories;
};

export const { fetchAllRecipes, fetchRecipeById, fetchCategories } =
  recipeSlice.actions;

export default recipeSlice.reducer;
