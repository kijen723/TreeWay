import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookie, deleteCookie } from 'cookies-next';

interface AuthState {
  isAuth: boolean; 
  memberId: number;
  username: string; 
  email: string;
};

// 초기 상태
const initialState: AuthState = {
  isAuth: false,
  memberId: 0, 
  username: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState, 
  reducers: {
    logIn: (state, action: PayloadAction<{ memberId: number; username: string; email: string }>) => {
      state.isAuth = true;
      state.memberId = action.payload.memberId;
      state.username = action.payload.username;
      state.email = action.payload.email;
      setCookie('isAuth', true);
    },
    logOut: (state) => {
      state.isAuth = false;
      state.memberId = 0;
      state.username = "";
      state.email = "";
      deleteCookie('isAuth');
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;