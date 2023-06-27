import { call, put } from "redux-saga/effects";
import { fetchAllTodo } from "../Services/Api";
import * as actions from "../Reducers/Todo";

export default function* fetchTodo(action: any): any {
  const todo = yield call(fetchAllTodo);

  if (todo && todo.status === 200) {
    yield put(actions.TodoSuccess(todo.data));
  } else {
    yield put(actions.TodoError("e.message"));
  }
}
