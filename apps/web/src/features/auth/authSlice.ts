import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";

export interface AuthState {
  user: User | null;
  isLogged: boolean;
}

const initialState: AuthState = {
  user: null,
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isLogged = !!action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
