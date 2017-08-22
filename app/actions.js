import {ajax} from 'jquery';

import * as types from './constants.js';

const API_KEY = '2ZSHKUITFR0KRZ0P';

export function searchStocks(symbol) {
  return function(dispatch) {
    dispatch({type: types.SEARCH_STOCK});
    const url = 'https://www.alphavantage.co/query?function=SMA&symbol=' + symbol + '&interval=1min&time_period=10&series_type=close&datatype=json&apikey=' + API_KEY;
    // fetch(url)
    const gUrl = 'https://www.google.com/finance/info?q=NSE:NKE';
    ajax(gUrl, {
      dataType: 'jsonp'
    })
    .then((response) => {
      dispatch(searchStocksSuccess(response[0]));
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
