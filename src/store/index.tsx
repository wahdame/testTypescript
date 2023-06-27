import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "../Saga";
import TodoSlice from "../Reducers/Todo";
import LoginSlice from "../Reducers/Login";
import SignupSlice from "../Reducers/Signup";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { todo: TodoSlice, auth: LoginSlice, signup: SignupSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(mySaga);
export default store;
