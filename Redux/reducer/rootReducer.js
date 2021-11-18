import { combineReducers } from 'redux';
import homepage from './homepage';
import  signUp  from './signUp';
import colleges from './colleges';
const rootReducer = combineReducers({
  homepage: homepage,
  signUp : signUp,
  colleges:colleges
});

export default rootReducer;