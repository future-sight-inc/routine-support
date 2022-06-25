import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { dayReducer, studentReducer } from "@routine-support/domains";

export const store = configureStore({
  reducer: {
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
