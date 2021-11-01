import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "./types";

export interface StudentsState {
  students: Student[];
}

const initialState: StudentsState = {
  students: [],
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents: (state, action: PayloadAction<Student[]>) => {
      state.students = action.payload;
    },
  },
});

export const studentsActions = studentsSlice.actions;
export const studentsReducer = studentsSlice.reducer;
