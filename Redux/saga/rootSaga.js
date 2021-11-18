import * as action from "../constant";
import { takeLatest } from "redux-saga/effects";
import { signup } from "./signupage";
import { homepage } from "./homepage";

export  function* watcherSaga() {
  yield takeLatest(action.GET_HOMEPAGE_DATA_REQUEST, homepage);
  yield takeLatest(action.GET_SIGNUP_REQUEST, signup);
}