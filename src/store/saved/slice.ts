import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

export interface SavedState {
  userId: number;
  recipeId: number;
  isFavorite: boolean;
  isSaved: boolean;
}

export interface SavedSliceState {
  saved: SavedState[];
}

const initialState: SavedSliceState = {
  saved: [],
};
export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    fetchAllSaved: (state, action: PayloadAction<SavedState[]>) => {},
  },
});

//Selectors
// export const selectAllTips = (state: RootState): TipsState[] => state.tips.tips;
// export const selectTipById = (state: RootState): TipsState[] =>
//   state.tips.tipById;

export const {} = savedSlice.actions;
export default savedSlice.reducer;
