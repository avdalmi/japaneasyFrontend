import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

// import { UserState } from "./types";
// const initialState: UserState = {
//   state: null,
// };

export type UserState = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

type InitialUserState = {
  token: string | null;
  profile: UserState | null;
  isAuthenticated: boolean;
};

const initialState: InitialUserState = {
  token: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("token") ? true : false,
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      //   console.log("action", action);
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.profile;
    },
    logOutSuccess: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
  },
});

//selectors
export const selectToken = (state: RootState) => state.user.token;

export const selectUser = (state: RootState) => state.user.profile;

export const { loginSuccess, logOutSuccess, tokenStillValid } =
  userSlice.actions;
export default userSlice.reducer;
