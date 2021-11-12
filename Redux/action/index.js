import { createAction } from "redux-actions";
import * as constant from "../constant";

export const getHomepageDataRequest = createAction(constant.GET_HOMEPAGE_DATA_REQUEST);
export const getHomepageDataSuccess = createAction(constant.GET_HOMEPAGE_DATA_SUCCESS);
export const getHomepageDataError = createAction(constant.GET_HOMEPAGE_DATA_ERROR);