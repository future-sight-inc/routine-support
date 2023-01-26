import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeekSchema } from "@routine-support/domains";

export interface WeekState {
  week: WeekSchema | null;
}

const initialState: WeekState = {
  week: null,
};

export const weekSlice = createSlice({
  name: "week",
  initialState,
  reducers: {
    setWeek: (state, action: PayloadAction<WeekSchema>) => {
      state.week = action.payload;
    },
  },
});

export const weekActions = weekSlice.actions;
export const weekReducer = weekSlice.reducer;
