import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DaySchema } from "@routine-support/domains";

export interface DayState {
  day: DaySchema | null;
}

const initialState: DayState = {
  day: null,
};

export const coachDaySlice = createSlice({
  name: "coachDay",
  initialState,
  reducers: {
    setDay: (state, action: PayloadAction<DaySchema | null>) => {
      state.day = action.payload;
    },
  },
});

export const coachDayActions = coachDaySlice.actions;
export const coachDayReducer = coachDaySlice.reducer;
