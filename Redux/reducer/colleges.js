import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  collegesData: {}
};

const colleges = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_COLLEGE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.GET_COLLEGE_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        collegesData: action.payload,
      };
    case actions.GET_COLLEGE_REQUEST:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
        collegesData:action.payload
      };
    default:
      return state;
  }
};

export default colleges;