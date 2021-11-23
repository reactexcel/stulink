import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  newsData: {}
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.GET_NEWS_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        newsData: action.payload.response,
      };
    case actions.GET_NEWS_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
        newsData:action.payload.response
      };
    default:
      return state;
  }
};

export default news;