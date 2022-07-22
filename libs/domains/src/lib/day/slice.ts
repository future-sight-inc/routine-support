import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DaySchema } from "./types";

export interface DayState {
  day: DaySchema | null;
}

const initialState: DayState = {
  day: null,
};

export const createDaySlice = ({ name }: { name: string }) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      setDay: (state, action: PayloadAction<DaySchema | null>) => {
        state.day = action.payload;
      },
    },
  });
};
