import * as actions from "../constant";

const initialState = {
  filtersData: [],
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_FILTERS:
      return {
        ...state,
        filtersData: [...state.filtersData, action.payload],
      };
    case actions.REMOVE_FILTERS:
      return {
        ...state,
        filtersData: state.filtersData.filter((val) => val !== action.payload),
      };

    default:
      return state;
  }
};

export default filters;
