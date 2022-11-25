import axios from "axios";
import { AppDispatch, RootState } from "..";
import { apiUrl } from "../../config/constants";

export const getAllSaved =
  (id: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${apiUrl}/saved/${id}`);
      console.log("response", response);

      //   dispatch(fetchAllTips(response.data.tips));
    } catch (e) {
      if (e instanceof Error) console.log("error message", e.message);
    }
  };
