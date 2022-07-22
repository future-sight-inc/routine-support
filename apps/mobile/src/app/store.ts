import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { coachReducer, createDaySlice, studentReducer } from "@routine-support/domains";

const coachDaySlice = createDaySlice({ name: "coachDay" });
const studentDaySlice = createDaySlice({ name: "studentDay" });

export const coachDayActions = coachDaySlice.actions;
export const studentDayActions = studentDaySlice.actions;

export const store = configureStore({
  reducer: {
    coachAuth: coachReducer,
    coachDay: coachDaySlice.reducer,

    studentAuth: studentReducer,
    studentDay: studentDaySlice.reducer,
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
