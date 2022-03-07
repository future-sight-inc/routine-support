import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {
  activityReducer,
  studentReducer,
  studentsReducer,
  userReducer,
  weekReducer,
} from "@routine-support/domains";

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
