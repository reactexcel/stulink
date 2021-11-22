import { createAction } from "redux-actions";
import * as constant from "../constant";

export const getHomepageDataRequest = createAction(constant.GET_HOMEPAGE_DATA_REQUEST);
export const getHomepageDataSuccess = createAction(constant.GET_HOMEPAGE_DATA_SUCCESS);
export const getHomepageDataError =   createAction(constant.GET_HOMEPAGE_DATA_ERROR);

//signup
export const  getSingUpRequest  = createAction(constant.GET_SIGNUP_REQUEST)
export const  getSingUpSuccess  = createAction(constant.GET_SIGNUP_SUCCESS)
export const  getSingUpError   = createAction(constant.GET_SIGNUP_ERROR)


//search 
export const getCollegesRequest = createAction(constant.GET_COLLEGE_REQUEST)
export const getCollegesSuccess = createAction(constant.GET_COLLEGE_SUCCESS)
export const getCollegesErrror = createAction(constant.GET_COLLEGE_ERROR)


//search 
export const getNewsRequest = createAction(constant.GET_NEWS_REQUEST)
export const getNewsSuccess = createAction(constant.GET_NEWS_SUCCESS)
export const getNewsErrror = createAction(constant.GET_NEWS_ERROR)