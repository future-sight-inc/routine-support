import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "./types";
import { Socket } from "socket.io-client";

export interface StudentState {
  student: Student | null;
  isLogged: boolean;
  socketConnection: Socket | null;
}

const initialState: StudentState = {
  student: null,
  isLogged: false,
  socketConnection: null,
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
      // todo баг в типизации redux
      state.student = { ...state.student, ...action.payload } as any; // todo;
    },
  },
});

export const studentActions = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
