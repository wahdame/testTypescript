import { takeEvery } from "redux-saga/effects";
import { TodoRequest } from "../Reducers/Todo";
import { LoginRequest } from "../Reducers/Login";
import { SignupRequest } from "../Reducers/Signup";
import fetchTodo from "./TodoSaga";
import auth from "./LoginSaga";
import register from "./SignupSaga";

function* mySaga() {
  yield takeEvery(TodoRequest, fetchTodo);
  yield takeEvery(LoginRequest, auth);
  yield takeEvery(SignupRequest, register);
}

export default mySaga;
