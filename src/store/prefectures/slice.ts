import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { RecipeState } from "../recipes/slice";

export interface PrefectureImage {
  image: string;
}

export interface PrefectureState {
  title: string;
  description: string;
  long: string;
  lat: string;
  image: PrefectureImage[];
  recipe: RecipeState[];
}

export interface PrefectureSliceState {
  prefectures: PrefectureState[];
}

const initialState: PrefectureSliceState = {
  prefectures: [],
};

export const prefectureSlice = createSlice({
  name: "prefectures",
  initialState,
  reducers: {
    fetchAllPrefectures: (state, action: PayloadAction<PrefectureState[]>) => {
      state.prefectures = action.payload;
      //   console.log("current state", current(state));
    },
  },
});

export const selectPrefectures = (state: RootState): PrefectureState[] =>
  state.prefecture.prefectures;

export const { fetchAllPrefectures } = prefectureSlice.actions;

export default prefectureSlice.reducer;
