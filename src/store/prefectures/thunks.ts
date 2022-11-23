import axios from "axios";
import { AppDispatch, RootState } from "..";
import { apiUrl } from "../../config/constants";
import { fetchAllPrefectures } from "./slice";

export const getAllPrefectures =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const response = await axios.get(`${apiUrl}/prefectures`);
      //   console.log("response", response);
      //   dispatch(fetchAllRecipes(response.data.recipes));
      dispatch(fetchAllPrefectures(response.data.prefectures));
    } catch (e) {
      if (e instanceof Error) console.log("error message", e.message);
    }
  };
