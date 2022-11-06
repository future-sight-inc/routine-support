import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {
  coachReducer,
  notificationsReducer,
  studentsReducer,
  weekReducer,
} from "@routine-support/domains";

export const store = configureStore({
  reducer: {
    coachWeek: weekReducer,
    coachAuth: coachReducer,
    coachStudents: studentsReducer,
    coachNotifications: notificationsReducer,
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
