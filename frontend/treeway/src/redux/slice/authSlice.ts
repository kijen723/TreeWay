import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookie, deleteCookie } from 'cookies-next';

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
      setCookie('isAuth', true);
    },
    logOut: (state) => {
      state.isAuth = false;
      state.username = null;
      state.email = null;
      deleteCookie('isAuth');
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;