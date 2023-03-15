import { createSlice } from "@reduxjs/toolkit";
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
  tipById: TipsState[];
}

const initialState: TipsSliceState = {
  tips: [],
  tipById: [],
};
export const tipsSlice = createSlice({
  name: "tips",
  initialState,
  reducers: {
    fetchAllTips: (state, action: PayloadAction<TipsState[]>) => {
      state.tips = action.payload;
    },
    fetchTipsById: (state, action: PayloadAction<TipsState[]>) => {
      state.tipById = action.payload;
    },
  },
});

//Selectors
export const selectAllTips = (state: RootState): TipsState[] => state.tips.tips;
export const selectTipById = (state: RootState): TipsState[] =>
  state.tips.tipById;

export const { fetchAllTips, fetchTipsById } = tipsSlice.actions;
export default tipsSlice.reducer;
