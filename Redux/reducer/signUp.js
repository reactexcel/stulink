import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  signUpData: {}
};

const signUp = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.GET_SIGNUP_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        signUpData: action.payload.response,
      };
    case actions.GET_SIGNUP_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
        signUpData:action.payload.response
      };
    default:
      return state;
  }
};

export default signUp;