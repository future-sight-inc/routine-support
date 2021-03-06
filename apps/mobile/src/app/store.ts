import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {
  coachDayReducer,
  coachReducer,
  studentDayReducer,
  studentReducer,
  studentsReducer,
} from "@routine-support/domains";

export const store = configureStore({
  reducer: {
    coachAuth: coachReducer,
    coachDay: coachDayReducer,
    coachStudents: studentsReducer,

    studentAuth: studentReducer,
    studentDay: studentDayReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
