import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: {
    email: "",
  },
  token: "",
  error: null,
  isLogin: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user.email = payload.email;
      state.token = payload.token;
      state.isLogin= true;
    },
    [authOperations.register.rejected](state, { payload }) {
      state.error = payload;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      state.error = payload;
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = initialState.user;
      state.token = "";
    },
    [authOperations.logOut.rejected](state, { payload }) {
      state.error = payload;
    },
    [authOperations.CheckedIsLoginCurrentUser.fulfilled](state, { payload }) {
      state.user = payload.data;
    },
    [authOperations.CheckedIsLoginCurrentUser.rejected](state, { payload }) {
      state.token = "";
    },
  },
});

export default authSlice.reducer;
