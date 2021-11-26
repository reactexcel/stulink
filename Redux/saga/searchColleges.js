import {put, call} from '@redux-saga/core/effects';
import { getSearchCollegesErrror,getSearchCollegesSuccess } from '../action';
import axios from 'axios';
import getConfig from "next/config";

const {
    publicRuntimeConfig:{backendUrl:backenUrl}
}= getConfig();

export function* searchColleges() {
    try {
      const response = yield call(axios.get ,`${backenUrl}/searchpage/searchHere`,);
      if (response && response.data) {
        yield put(getSearchCollegesSuccess({ response: response.data }));
      } else {
        yield put(getSearchCollegesErrror({ error: "Data not fetched" }));
      }
    } catch (error) {
      yield put(getSearchCollegesErrror({ error: "Data not fetched" }));
    }
  }