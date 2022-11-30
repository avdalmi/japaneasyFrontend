import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { RecipeState } from "../recipes/slice";

// import { UserState } from "./types";
// const initialState: UserState = {
//   state: null,
// };
export type TokenState = {};

export type UserState = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  id?: number;
  token?: string | null | undefined;
};

export type ProfileState = {
  id: number;
  isFavorite: boolean;
  isSaved: true;
  recipe: RecipeState;
  user: UserState;
};

export interface InitialUserState {
  token: string | null;
  profile: UserState | null;
  fullProfile: ProfileState[] | null;
}

const initialState: InitialUserState = {
  token: localStorage.getItem("token"),
  profile: null,
  fullProfile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log("action", action.payload);
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      console.log("current state", current(state));
    },
    logOutSuccess: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
    userWithRecipes: (state, action) => {
      // console.log("action", action.payload);
      state.fullProfile = action.payload.savedRecipes;
      state.profile = action.payload.user;
    },
  },
});

//selectors
export const selectToken = (state: RootState) => state.user.token;

export const selectUser = (state: RootState) => {
  // console.log("state rootstate", state);
  return state.user.profile;
};

export const selectFullProfile = (state: RootState) => {
  // console.log("staterootstate", state);
  return state.user.fullProfile;
};
export const { loginSuccess, logOutSuccess, tokenStillValid, userWithRecipes } =
  userSlice.actions;
export default userSlice.reducer;
