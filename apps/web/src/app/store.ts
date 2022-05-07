import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {
  coachReducer,
  notificationsReducer,
  studentReducer,
  studentsReducer,
  weekReducer,
} from "@routine-support/domains";

export const store = configureStore({
  reducer: {
    week: weekReducer,
    coach: coachReducer,
    student: studentReducer,
    students: studentsReducer,
    notifications: notificationsReducer,
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
