import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { activityReducer } from "features/activity/activitySlice";
import { authReducer } from "features/auth/authSlice";

import { weekReducer } from "../features/week/weekSlice";

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
