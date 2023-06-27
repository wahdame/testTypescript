import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    success: false,
    feetching: false,
    error: false,
    user: {},
  },
  reducers: {
    LoginRequest: (state, action) => {
      return {
        ...state,
        success: false,
        error: false,
        feetching: false,
        user: action.payload,
      };
    },
    LoginSuccess: (state, action) => {
      return {
        ...state,
        success: true,
        error: false,
        feetching: false,
        user: action.payload,
      };
    },
    LoginError: (state, action) => {
      return {
        ...state,
        success: false,
        error: true,
        feetching: false,
        user: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { LoginRequest, LoginSuccess, LoginError } = LoginSlice.actions;

export default LoginSlice.reducer;
