import { takeEvery } from "redux-saga/effects";
import * as actions from "../store/Reducers/Todo";
import fetchTodo from "./TodoSaga";

function* mySaga() {
  yield takeEvery(actions.TodoRequest, fetchTodo);
}

export default mySaga;
