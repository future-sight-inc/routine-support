import { configureStore } from "@reduxjs/toolkit";
import {
  coachReducer,
  notificationsReducer,
  studentsReducer,
  weekReducer,
} from "@routine-support/features";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    coachWeek: weekReducer,
    coachAuth: coachReducer,
    coachStudents: studentsReducer,
    coachNotifications: notificationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
