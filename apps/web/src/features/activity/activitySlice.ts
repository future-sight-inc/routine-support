import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Activity } from "./types";

export interface ActivityState {
  activity: Activity | null;
}

const initialState: ActivityState = {
  activity: null,
};

export const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setActivity: (state, action: PayloadAction<Activity | null>) => {
      state.activity = action.payload;
    },
  },
});

export const activityActions = activitySlice.actions;
export const activityReducer = activitySlice.reducer;
