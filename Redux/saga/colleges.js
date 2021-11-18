import {put, call} from '@redux-saga/core/effects';
import { getCollegesErrror,getCollegesSuccess } from '../action';
import axios from 'axios';
import getConfig from "next/config";

const {
    publicRuntimeConfig:{backendUrl:backenUrl}
}= getConfig();

export function* colleges() {
    try {
      const response = yield call(axios.get ,`${backenUrl}/searchpage/searchHere`,);
      if (response && response.data) {
        yield put(getCollegesSuccess({ response: response.data }));
        console.log("zdfgdfgdfgddf", response.data)
      } else {
        yield put(getCollegesErrror({ error: "Data not fetched" }));
      }
    } catch (error) {
      yield put(getCollegesErrror({ error: "Data not fetched" }));
    }
  }