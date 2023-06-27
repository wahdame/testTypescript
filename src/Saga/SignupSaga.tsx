import { call, put } from "redux-saga/effects";
import { Register } from "../Services/Api";
import * as actions from "../Reducers/Signup";

export default function* register(action: any): any {
  const user = yield call(Register, action.payload);
  if (user && user.status === 201) {
    yield put(actions.SignupSuccess(user.data));
  } else {
    yield put(actions.SignupError("e.message"));
  }
}
