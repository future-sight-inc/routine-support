import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Coach } from "./types";
import { Socket } from "socket.io-client";

export interface CoachState {
  coach: Coach | null;
  isLogged: boolean;
  socketConnection: Socket | null;
}

const initialState: CoachState = {
  coach: null,
  isLogged: false,
  socketConnection: null,
};

export const coachSlice = createSlice({
  name: "coach",
  initialState,
  reducers: {
    setCoach: (state, action: PayloadAction<Coach | null>) => {
      state.coach = action.payload;
      state.isLogged = !!action.payload;
    },
    setSocketConnection: (state, action: PayloadAction<Socket | null>) => {
      if (state.socketConnection) {
        state.socketConnection.disconnect();
      }

      // todo баг в типизации redux
      state.socketConnection = action.payload as any;
    },
  },
});

export const coachActions = coachSlice.actions;
export const coachReducer = coachSlice.reducer;
