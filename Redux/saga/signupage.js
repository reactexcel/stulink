import {put ,call} from '@redux-saga/core/effects';
import { getSingUpError,  getSingUpSuccess} from '../action';
import axios from 'axios'
import getConfig from 'next/config';

const {
    publicRuntimeConfig: { backendUrl: backenUrl },
  } = getConfig();



  export function* signup(action) {
    try {
      const response = yield call(axios.post ,`${backenUrl}/users/register`,action.payload);
      if (response && response.data) {
        yield put(getSingUpSuccess({ response: response.data }));
      } else {
        console.log("data not fetchedd")
        yield put(getSingUpError({ error: "Data not fetched" }));
      }
    } catch (error) {
      console.log("error2",error.response.data)
      yield put(getSingUpError({ error:error.message }));
    }
  }
  