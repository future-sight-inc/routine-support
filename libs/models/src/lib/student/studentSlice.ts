import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "./types";

export interface StudentState {
  student: Partial<Student> | null;
}

const initialState: StudentState = {
  student: null,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action: PayloadAction<Partial<Student> | null>) => {
      state.student = action.payload;
    },
  },
});

export const studentActions = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
