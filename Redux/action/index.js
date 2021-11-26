import { createAction } from "redux-actions";
import * as constant from "../constant";

export const getHomepageDataRequest = createAction(
  constant.GET_HOMEPAGE_DATA_REQUEST
);
export const getHomepageDataSuccess = createAction(
  constant.GET_HOMEPAGE_DATA_SUCCESS
);
export const getHomepageDataError = createAction(
  constant.GET_HOMEPAGE_DATA_ERROR
);

//signup
export const getSingUpRequest = createAction(constant.GET_SIGNUP_REQUEST);
export const getSingUpSuccess = createAction(constant.GET_SIGNUP_SUCCESS);
export const getSingUpError = createAction(constant.GET_SIGNUP_ERROR);

//search
export const getSearchCollegesRequest = createAction(
  constant.GET_SEARCH_COLLEGE_REQUEST
);
export const getSearchCollegesSuccess = createAction(
  constant.GET_SEARCH_COLLEGE_SUCCESS
);
export const getSearchCollegesErrror = createAction(
  constant.GET_SEARCH_COLLEGE_ERROR
);

//news
export const getNewsRequest = createAction(constant.GET_NEWS_REQUEST);
export const getNewsSuccess = createAction(constant.GET_NEWS_SUCCESS);
export const getNewsErrror = createAction(constant.GET_NEWS_ERROR);

//filter values
export const addFilters = createAction(constant.ADD_FILTERS);
export const removeFilters = createAction(constant.REMOVE_FILTERS);

//get stats
export const getStatesRequest = createAction(constant.GET_STATES_REQUEST);
export const getStatesSuccess = createAction(constant.GET_STATES_SUCCESS);
export const getStatesError = createAction(constant.GET_STATES_ERROR);
