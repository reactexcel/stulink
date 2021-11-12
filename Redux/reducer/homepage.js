import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const homepage = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_HOMEPAGE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.GET_HOMEPAGE_DATA_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        homepageData: action.payload.response,
      };
    case actions.GET_HOMEPAGE_DATA_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default homepage;