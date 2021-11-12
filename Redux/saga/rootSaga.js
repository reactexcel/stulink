import * as action from "../constant";
import { fork, all, takeLatest } from "redux-saga/effects";
import { homepage } from "./homepage";

function* homepageSaga() {
  yield takeLatest(action.GET_HOMEPAGE_DATA_REQUEST, homepage);
}

export default function* rootSaga() {
  yield all([fork(homepageSaga)]);
}