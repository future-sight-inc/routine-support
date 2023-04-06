import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Day } from "@routine-support/domains";

export interface DayState {
  day: Day | null;
}

const initialState: DayState = {
  day: null,
};

export const coachDaySlice = createSlice({
  name: "coachDay",
  initialState,
  reducers: {
    setDay: (state, action: PayloadAction<Day | null>) => {
      state.day = action.payload;
    },
  },
});

export const coachDayActions = coachDaySlice.actions;
export const coachDayReducer = coachDaySlice.reducer;
