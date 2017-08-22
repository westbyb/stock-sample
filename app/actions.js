import {ajax} from 'jquery';

import * as types from './constants.js';

export function searchStocks(symbol) {
  return function(dispatch) {
    dispatch({type: types.SEARCH_STOCK});
    if (_.isEmpty(symbol)) {
      dispatch(searchStocksFailure({
        statusText: 'You must enter a stock symbol.'
      }));
      return;
    } else if (symbol.length > 5) {
      dispatch(searchStocksFailure({
        statusText: 'Stock symbols are less than 5 characters.'
      }));
      return;
    }
    const gUrl = 'https://www.google.com/finance/info?q=NSE:' + symbol;
    ajax(gUrl, {
      dataType: 'jsonp'
    })
    .then((response) => {
      dispatch(searchStocksSuccess(response[0]));
    })
    .fail((error) => {
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
