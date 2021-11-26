import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  states: {}
};

const states = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_STATES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.GET_STATES_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        states: action.payload.response,
      };
    case actions.GET_STATES_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
        states:action.payload.response
      };
    default:
      return state;
  }
};

export default states;