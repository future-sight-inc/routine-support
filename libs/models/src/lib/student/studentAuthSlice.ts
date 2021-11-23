import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "./types";

export interface StudentAuthState {
  student: Student | null;
  isLogged: boolean;
}

const initialState: StudentAuthState = {
  student: null,
  isLogged: false,
};

export const studentAuthSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action: PayloadAction<Student | null>) => {
      state.student = action.payload;
      state.isLogged = Boolean(action.payload?._id);
    },
  },
});

export const studentAuthActions = studentAuthSlice.actions;
export const studentAuthReducer = studentAuthSlice.reducer;
