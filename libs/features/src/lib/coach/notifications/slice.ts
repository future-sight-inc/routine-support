import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NotificationsGroupSchema } from "../../../../../domains/src/lib/notification/types";

export interface NotificationsState {
  notViewedCount: number;
  notificationsGroups: NotificationsGroupSchema[];
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
        notificationsGroups: NotificationsGroupSchema[];
      }>
    ) => {
      state.notViewedCount = action.payload.notViewedCount;
      state.notificationsGroups = action.payload.notificationsGroups;
    },
  },
});

export const notificationsActions = notificationsSlice.actions;
export const notificationsReducer = notificationsSlice.reducer;
