import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { coachReducer, dayReducer, studentReducer } from "@routine-support/domains";

export const store = configureStore({
  reducer: {
    coach: coachReducer,
    student: studentReducer,
    day: dayReducer,
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
