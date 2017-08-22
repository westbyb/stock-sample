import * as types from './constants.js';

const defaults = {
  stockInfo: undefined,
  error: undefined
};

const SiteReducer = (state = defaults, action) => {
  switch (action.type) {
    case types.SEARCH_STOCK:
      return {
        ...state,
        error: undefined
      };
    case types.SEARCH_STOCK_SUCCESS:
      return {
        ...state,
        stockInfo: action.payload
      };
    case types.SEARCH_STOCK_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      break;
  }
  return state;
};

export default SiteReducer;
