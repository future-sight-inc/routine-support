import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { studentAuthReducer } from "@routine-support/models";

export const store = configureStore({
  reducer: {
    student: studentAuthReducer,
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
