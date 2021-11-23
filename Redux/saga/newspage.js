import { put, call } from "@redux-saga/core/effects";
import { getNewsSuccess, getNewsError } from "../action";
import axios from "axios";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { backendUrl: backenUrl },
} = getConfig();

const getNewsData = () => {
  return axios.get(`${backenUrl}/news/newspage`);
};

export function* newspage() {
  try {
    const response = yield call(getNewsData);
    if (response && response.data) {
      yield put(getNewsSuccess({ response: response.data }));
    } else {
      yield put(getNewsError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(getNewsError({ error: "Data not fetched" }));
  }
}
