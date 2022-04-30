import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NotificationsGroup } from "./types";

export interface NotificationsState {
  notificationsGroups: NotificationsGroup[];
}

const initialState: NotificationsState = {
  notificationsGroups: [],
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotificationsGroups: (
      state,
      action: PayloadAction<NotificationsGroup[]>
    ) => {
      state.notificationsGroups = action.payload;
    },
  },
});

export const notificationsActions = notificationsSlice.actions;
export const notificationsReducer = notificationsSlice.reducer;
