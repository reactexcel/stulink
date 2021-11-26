import * as action from "../constant";
import { takeLatest } from "redux-saga/effects";
import { signup } from "./signupage";
import { homepage } from "./homepage";
import { newspage } from "./newspage";
import { searchColleges } from "./searchColleges";
import {getstates} from './allState';

export  function* watcherSaga() {
  yield takeLatest(action.GET_HOMEPAGE_DATA_REQUEST, homepage);
  yield takeLatest(action.GET_SIGNUP_REQUEST, signup);
  yield takeLatest(action.GET_NEWS_REQUEST,newspage )
  yield takeLatest(action.GET_SEARCH_COLLEGE_REQUEST,searchColleges)
  yield takeLatest(action.GET_STATES_REQUEST,getstates)
}