import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showAlertWithTimeout,
} from "../appState/thunks";

import { AppDispatch, RootState } from "..";
import {
  loginSuccess,
  logOutSuccess,
  tokenStillValid,
  userWithRecipes,
} from "./slice";

export const signUp =
  (firstName: string, lastName: string, email: string, password: string) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      console.log("response", response);
      dispatch(loginSuccess(response.data));
      dispatch(showAlertWithTimeout("Account created", "success"));
      dispatch(appDoneLoading());
    } catch (e) {
      if (e instanceof Error) console.log("error message", e.message);
    }
  };

export const login = (email: string, password: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));

      dispatch(
        showAlertWithTimeout(
          `Welcome back ${response.data.firstName}!`,
          "success"
        )
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error instanceof Error) {
        dispatch(showAlertWithTimeout("Incorrect Email and Password", "error"));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const token = localStorage.getItem("token");

    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(tokenStillValid({ profile: response.data }));
      dispatch(userWithRecipes(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
      dispatch(logOutSuccess());
      dispatch(appDoneLoading());
    }
  };
};

export const toggleSavedRecipeThunk = (saved: boolean, recipeId: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const userId = getState().user.fullProfile?.id;

    try {
      const response = await axios.patch(`${apiUrl}/update`, {
        saved,
        recipeId,
        userId,
      });

      dispatch(getUserWithStoredToken());
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log(e);
      }
    }
  };
};

export const addNewSaved = (saved: boolean, recipeId: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const userId = getState().user.fullProfile?.id;
    console.log("id is", userId, recipeId);
    try {
      const response = await axios.post(`${apiUrl}/addsaved`, {
        recipeId,
        userId,
        saved,
      });

      dispatch(getUserWithStoredToken());
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log(e);
      }
    }
  };
};
