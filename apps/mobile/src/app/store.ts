import { configureStore } from "@reduxjs/toolkit";
import {
  coachDayReducer,
  coachReducer,
  notificationsReducer,
  studentDayReducer,
  studentReducer,
  studentsReducer,
} from "@routine-support/features";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    coachAuth: coachReducer,
    coachDay: coachDayReducer,
    coachStudents: studentsReducer,
    coachNotifications: notificationsReducer,

    studentAuth: studentReducer,
    studentDay: studentDayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
