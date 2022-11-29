import axios from "axios";
import { AppDispatch, RootState } from "..";
import { apiUrl } from "../../config/constants";
import { fetchAllPrefectures } from "./slice";

export const getAllPrefectures =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const response = await axios.get(`${apiUrl}/prefectures`);
      //   console.log("response", response);
      setTimeout(() => {
        dispatch(fetchAllPrefectures(response.data.prefectures));
      }, 1200);
    } catch (e) {
      if (e instanceof Error) console.log("error message", e.message);
    }
  };
