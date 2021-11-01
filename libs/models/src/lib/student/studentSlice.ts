import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "./types";

export interface AuthState {
  user: Student | null;
  isLogged: boolean;
}

const initialState: AuthState = {
  user: null,
  isLogged: false,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action: PayloadAction<Student | null>) => {
      state.user = action.payload;
      state.isLogged = Boolean(action.payload);
    },
  },
});

export const studentActions = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
