import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";

export interface UserState {
  user: User | null;
  isLogged: boolean;
}

const initialState: UserState = {
  user: null,
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isLogged = !!action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
