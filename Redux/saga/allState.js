import { put, call } from "@redux-saga/core/effects";
import { getStatesError, getStatesSuccess } from "../action";
import axios from "axios";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { backendUrl: backenUrl },
} = getConfig();

const getStatesData = () => {
  return axios.get(`${backenUrl}/searchpage/allStates`);
};

export function* getstates() {
  try {
    const response = yield call(getStatesData);
    if (response && response.data) {
      yield put(getStatesSuccess({ response: response.data }));
    } else {
      yield put(getStatesError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(getStatesError({ error: "Data not fetched" }));
  }
}
