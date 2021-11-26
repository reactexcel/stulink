import { combineReducers } from 'redux';
import homepage from './homepage';
import  signUp  from './signUp';
import colleges from './searchcolleges';
import news from './newspage';
import filters from './filterSearch'
import states from './allStates';

const rootReducer = combineReducers({
  homepage: homepage,
  signUp : signUp,
  colleges:colleges,
  news:news ,
  filters:filters,
  states:states
});

export default rootReducer;