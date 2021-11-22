import * as action from "../constant";
import { takeLatest } from "redux-saga/effects";
import { signup } from "./signupage";
import { homepage } from "./homepage";
import { newspage } from "./newspage";

export  function* watcherSaga() {
  yield takeLatest(action.GET_HOMEPAGE_DATA_REQUEST, homepage);
  yield takeLatest(action.GET_SIGNUP_REQUEST, signup);
  yield takeLatest(action.GET_NEWS_REQUEST,newspage )
}