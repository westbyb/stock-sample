import * as types from './constants.js';

const defaults = {
  stockInfo: undefined,
  error: undefined
};

const SiteReducer = (state = defaults, action) => {
  switch (action.type) {
    case types.SEARCH_STOCK:
      return state;
    case types.SEARCH_STOCK_SUCCESS:
      return {
        ...state,
        stockInfo: action.payload
      };
    default:
      break;
  }
  return state;
};

export default SiteReducer;
