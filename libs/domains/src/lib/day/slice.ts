import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Day } from "./types";

export interface DayState {
  day: Day | null;
}

const initialState: DayState = {
  day: null,
};

export const daySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    setDay: (state, action: PayloadAction<Day | null>) => {
      state.day = action.payload;
    },
  },
});

export const dayActions = daySlice.actions;
export const dayReducer = daySlice.reducer;
