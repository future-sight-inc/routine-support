import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Week } from "@routine-support/domains";

export interface WeekState {
  week: Week | null;
}

const initialState: WeekState = {
  week: null,
};

export const weekSlice = createSlice({
  name: "week",
  initialState,
  reducers: {
    setWeek: (state, action: PayloadAction<Week>) => {
      state.week = action.payload;
    },
  },
});

export const weekActions = weekSlice.actions;
export const weekReducer = weekSlice.reducer;
