import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Day } from "@routine-support/domains";

export interface DayState {
  day: Day | null;
}

const initialState: DayState = {
  day: null,
};

export const createDaySlice = ({ name }: { name: string }) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      setDay: (state, action: PayloadAction<Day | null>) => {
        state.day = action.payload;
      },
    },
  });
};

const studentDaySlice = createDaySlice({ name: "studentDay" });
const coachDaySlice = createDaySlice({ name: "coachDay" });

export const studentDayActions = studentDaySlice.actions;
export const studentDayReducer = studentDaySlice.reducer;
export const coachDayActions = coachDaySlice.actions;
export const coachDayReducer = coachDaySlice.reducer;
