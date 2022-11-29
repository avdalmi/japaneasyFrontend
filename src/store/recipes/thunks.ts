import axios from "axios";
import { AppDispatch, RootState } from "..";
import { apiUrl } from "../../config/constants";
import { fetchAllRecipes, fetchRecipeById, fetchCategories } from "./slice";

export const fetchAllRecipesThunk =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const response = await axios.get(`${apiUrl}/recipes`);
      // console.log("response", response)
      dispatch(fetchAllRecipes(response.data.recipes));
    } catch (e) {
      if (e instanceof Error) console.log("error message", e.message);
    }
  };

export const getRecipeById =
  (id: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const response = await axios.get(`${apiUrl}/recipes/${id}`);
      // console.log("response", response)

      dispatch(fetchRecipeById(response.data.recipe));
    } catch (e) {
      if (e instanceof Error) console.log("error message", e.message);
    }
  };

export const getCategories =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const response = await axios.get(`${apiUrl}/categories`);
      // console.log("response", response)

      dispatch(fetchCategories(response.data));
    } catch (e) {
      if (e instanceof Error) console.log("error message", e.message);
    }
  };
