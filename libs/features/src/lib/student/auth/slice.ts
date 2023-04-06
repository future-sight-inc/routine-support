import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "@routine-support/domains";

export interface StudentState {
  student: Student | null;
  isLogged: boolean;
}

const initialState: StudentState = {
  student: null,
  isLogged: false,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action: PayloadAction<Student | null>) => {
      state.student = action.payload;
      state.isLogged = !!action.payload;
    },
    updateStudentSettings: (state, action: PayloadAction<Partial<Student>>) => {
      state.student = { ...state.student, ...action.payload } as any; // todo;
    },
  },
});

export const studentActions = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
