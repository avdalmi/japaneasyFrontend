import { createSlice, current } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from ".."

export interface RecipeState {
    id: number,
    categoryId: number,
    name: string,
    description: string,
    rating: number,
    image: string,
    difficulty: string,
    portions: number
}

export interface RecipeSliceState {
    recipes: RecipeState[];
}

const initialState: RecipeSliceState= {
    recipes: [],
}

export const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        fetchAllRecipes: (state, action: PayloadAction<RecipeState>) => {
            console.log("state", state)
            // state.recipes.push(action.payload)
            state.recipes = [...state.recipes, ...action.payload]
            console.log("current State", current(state))
        }
    }
})


//Selectors
export const selectRecipe = (state: RootState) => state.recipe.recipes as RecipeState[]


export const { fetchAllRecipes } = recipeSlice.actions
export default recipeSlice.reducer