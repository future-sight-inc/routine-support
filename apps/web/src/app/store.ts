import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {
  weekReducer,
  activityReducer,
  userReducer,
  studentsReducer,
  studentReducer,
} from "@routine-support/models";

export const store = configureStore({
  reducer: {
    week: weekReducer,
    activity: activityReducer,
    user: userReducer,
    student: studentReducer,
    students: studentsReducer,
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
