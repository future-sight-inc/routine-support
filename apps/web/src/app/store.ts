import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {
  weekReducer,
  activityReducer,
  authReducer,
} from "@routine-support/models";

export const store = configureStore({
  reducer: {
    week: weekReducer,
    activity: activityReducer,
    auth: authReducer,
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
