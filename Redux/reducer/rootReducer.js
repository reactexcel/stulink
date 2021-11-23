import { combineReducers } from 'redux';
import homepage from './homepage';
import  signUp  from './signUp';
import colleges from './colleges';
import news from './newspage';

const rootReducer = combineReducers({
  homepage: homepage,
  signUp : signUp,
  colleges:colleges,
  news:news 
});

export default rootReducer;