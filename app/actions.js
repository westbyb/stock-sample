import * as types from './constants.js';

export function searchStocks(symbol) {
  return function(dispatch) {
    dispatch({type: types.SEARCH_STOCK});
    const url = 'https://www.google.com/finance/info?q=NSE:';
    fetch(url + symbol, {mode: 'cors'})
    .then((response) => {
      if (response.status === 200) {
        dispatch(searchStocksSuccess(response));
      }
    })
    .catch((error) => {
      dispatch(searchStocksFailure(error));
    });
  };
}

function searchStocksSuccess(stock) {
  return {
    type: types.SEARCH_STOCK_SUCCESS,
    payload: stock
  };
}

function searchStocksFailure(error) {
  return {
    type: types.SEARCH_STOCK_FAILURE,
    payload: error
  };
}
