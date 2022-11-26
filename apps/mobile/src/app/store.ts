import { configureStore } from "@reduxjs/toolkit";
import {
  coachDayReducer,
  coachReducer,
  notificationsReducer,
  studentDayReducer,
  studentReducer,
  studentsReducer,
} from "@routine-support/domains";

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
