import { configureStore } from "@reduxjs/toolkit";
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
