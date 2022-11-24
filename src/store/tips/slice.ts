import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

export interface TipsState {
  id: number;
  name: string;
  description: string;
  image: string;
  substitution: string;
}

export interface TipsSliceState {
  tips: TipsState[];
}

const initialState: TipsSliceState = {
  tips: [],
};
export const tipsSlice = createSlice({
  name: "tips",
  initialState,
  reducers: {
    fetchAllTips: (state, action: PayloadAction<TipsState[]>) => {
      state.tips = [...action.payload];
      //   console.log("current State", current(state));
    },
  },
});

//Selectors
export const selectAllTips = (state: RootState): TipsState[] => state.tips.tips;

export const { fetchAllTips } = tipsSlice.actions;
export default tipsSlice.reducer;
