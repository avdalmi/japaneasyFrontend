import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { PrefectureState } from "../../types/Prefectures";

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
    },
  },
});

export const selectPrefectures = (state: RootState): PrefectureState[] => {
  return state.prefecture.prefectures;
};

export const { fetchAllPrefectures } = prefectureSlice.actions;

export default prefectureSlice.reducer;
