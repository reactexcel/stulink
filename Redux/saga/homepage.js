import { put } from "@redux-saga/core/effects";
import { getHomepageDataSuccess, getHomepageDataError } from "../action";
import { homepageData } from "../../utils/homepageData";

export function* homepage(action) {
  try {
    if (homepageData) {
      yield put(getHomepageDataSuccess({ response: homepageData }));
    } else {
      yield put(getHomepageDataError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(getHomepageDataError({ error: "Data not fetched" }));
  }
}