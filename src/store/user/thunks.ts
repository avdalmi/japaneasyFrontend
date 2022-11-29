import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showAlertWithTimeout,
} from "../appState/thunks";

import { AppDispatch, RootState } from "..";

const loginSuccess = (userWithToken: {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  id: number;
}) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken,
  };
};

export const logOut = () => ({ type: "LOG_OUT" });

export const signUp = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  console.log(firstName, email, password);
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        firstName,
        lastName,
        email,
        password,
      });

      dispatch(
        loginSuccess({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          token: response.data.token,
          id: response.data.id,
        })
      );
      dispatch(showAlertWithTimeout("Account created", "success"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        dispatch(showAlertWithTimeout(error.message, "error"));
      }
      dispatch(appDoneLoading());
    }
  };
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
          `Welcome back ${response.data.firstName}! 😄`,
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
    if (!token) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      const user = {
        token: token,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        id: response.data.id,
        imgUrl: response.data.imgUrl,
      };
      dispatch(loginSuccess(user));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};
