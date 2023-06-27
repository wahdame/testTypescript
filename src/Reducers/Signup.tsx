import { createSlice } from "@reduxjs/toolkit";

export const SignupSlice = createSlice({
  name: "signup",
  initialState: {
    success: false,
    feetching: false,
    error: false,
    user: {},
  },
  reducers: {
    SignupRequest: (state, action) => {
      return {
        ...state,
        success: false,
        error: false,
        feetching: false,
        user: action.payload,
      };
    },
    SignupSuccess: (state, action) => {
      return {
        ...state,
        success: true,
        error: false,
        feetching: false,
        user: action.payload,
      };
    },
    SignupError: (state, action) => {
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
export const { SignupRequest, SignupSuccess, SignupError } =
  SignupSlice.actions;

export default SignupSlice.reducer;
