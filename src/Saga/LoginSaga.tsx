import { call, put } from "redux-saga/effects";
import { Authentification } from "../Services/Api";
import * as actions from "../Reducers/Login";

export default function* auth(action: any): any {
  const user = yield call(Authentification, action.payload);
  if (user && user.status === 201) {
    yield put(actions.LoginSuccess(user.data));
    localStorage.setItem("auth", JSON.stringify(user.data));
    localStorage.setItem("token", JSON.stringify(user.data.accessToken));
  } else {
    yield put(actions.LoginError("e.message"));
  }
}
