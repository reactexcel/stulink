import { put, call } from "@redux-saga/core/effects";
import { getHomepageDataSuccess, getHomepageDataError } from "../action";
import axios from "axios";
import getConfig from "next/config";
const {
  publicRuntimeConfig: { backendUrl: backenUrl },
} = getConfig();

const getHomepageData = () => {
  return axios.get(`${backenUrl}/homepage`);
};

export function* homepage() {
  try {
    const response = yield call(getHomepageData);
    if (response && response.data) {
      yield put(getHomepageDataSuccess({ response: response.data }));
    } else {
      yield put(getHomepageDataError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(getHomepageDataError({ error: "Data not fetched" }));
  }
}
