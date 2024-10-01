import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean; 
  username: string | null; 
  email: string | null;
};

// 초기 상태
const initialState: AuthState = {
  isAuth: false,
  username: null,
  email: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState, 
  reducers: {
    logIn: (state, action: PayloadAction<{ username: string; email: string }>) => {
      state.isAuth = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logOut: (state) => {
      state.isAuth = false;
      state.username = null;
      state.email = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;