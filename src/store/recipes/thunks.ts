import axios from "axios";
import { AppDispatch, RootState } from "..";
import { apiUrl } from "../../config/constants";
import { fetchAllRecipes } from "./slice";


export const fetchAllRecipesThunk = ()=> async(
    dispatch: AppDispatch,
    getState: ()=> RootState
) => {
    try {
        const response = await axios.get(`${apiUrl}/recipes`)
        // console.log("response", response)
        dispatch(fetchAllRecipes(response.data.recipes))
    } catch (e) {
        if (e instanceof Error) console.log("error message", e.message)
    }
}