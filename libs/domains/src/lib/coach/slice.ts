import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Coach } from "./types";

export interface CoachState {
  coach: Coach | null;
  isLogged: boolean;
}

const initialState: CoachState = {
  coach: null,
  isLogged: false,
};

export const coachSlice = createSlice({
  name: "coach",
  initialState,
  reducers: {
    setCoach: (state, action: PayloadAction<Coach | null>) => {
      state.coach = action.payload;
      state.isLogged = !!action.payload;
    },
  },
});

export const coachActions = coachSlice.actions;
export const coachReducer = coachSlice.reducer;
