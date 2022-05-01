import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NotificationsGroup } from "./types";

export interface NotificationsState {
  notViewedCount: number;
  notificationsGroups: NotificationsGroup[];
}

const initialState: NotificationsState = {
  notViewedCount: 0,
  notificationsGroups: [],
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotificationsGroups: (
      state,
      action: PayloadAction<{
        notViewedCount: number;
        notificationsGroups: NotificationsGroup[];
      }>
    ) => {
      state.notViewedCount = action.payload.notViewedCount;
      // todo баг в типизации redux
      state.notificationsGroups = action.payload.notificationsGroups as any;
    },
  },
});

export const notificationsActions = notificationsSlice.actions;
export const notificationsReducer = notificationsSlice.reducer;
