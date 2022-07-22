import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Day } from "./types";

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
