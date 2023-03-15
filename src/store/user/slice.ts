import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { RecipeState } from "../../types/Recipes";

export type TokenState = {};

export type UserState = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  id?: number;
  token?: string | null | undefined;
  recipes?: RecipeState[];
};

export type FullProfileState = {
  user?: UserState;
  id?: number;
  isFavorite?: boolean;
  isSaved?: true;
  recipe?: RecipeState[];
};

export interface InitialUserState {
  token: string | null;
  profile: UserState | null;
  fullProfile: FullProfileState | null;
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
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
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
      state.fullProfile = action.payload;
    },
    updateSaved: (state, action: PayloadAction<FullProfileState>) => {
      //@ts-ignore
      state.fullProfile.recipe = [...state.fullProfile?.recipe, action.payload];
    },
  },
});

//selectors
export const selectToken = (state: RootState) => state.user.token;

export const selectUser = (state: RootState) => state.user.profile;

export const selectFullProfile = (state: RootState) => state.user.fullProfile;

export const {
  loginSuccess,
  logOutSuccess,
  tokenStillValid,
  userWithRecipes,
  updateSaved,
} = userSlice.actions;

export default userSlice.reducer;
