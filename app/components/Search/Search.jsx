import React from 'react';

import {searchStocks} from '../../actions.js';

import './Search.scss';

/**
 * Search component
 *
 * Component containing the input used to search for stocks
 */
class Search extends React.Component {
  searchForStock(e) {
    e.preventDefault();

    let symbol = this.input.value;
    this.props.dispatch(searchStocks(symbol));
  }

  render() {
    return (
      <form id="search" onSubmit={this.searchForStock.bind(this)}>
        <label htmlFor="searchInput">Stock Symbol</label>
        <input
          type="text"
          placeholder="Stock Symbol"
          defaultValue="NKE"
          ref={(node) => this.input = node}
          id="searchInput"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
