import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Search from '../Search/Search.jsx';
import TickerInfo from '../TickerInfo/TickerInfo.jsx';

import './App.scss';

const mapStateToProps = (store) => {
  return {
    stockInfo: store.stockInfo,
    error: store.error
  };
};

/**
 * Root React component
 * @param {Object} stockInfo Current stock information
 * @param {Object} error Current error object used for validation
 */
class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Search dispatch={this.props.dispatch}/>
        {
          _.isObject(this.props.stockInfo) ?
          <TickerInfo stock={this.props.stockInfo} /> :
          null
        }
        {
          _.isObject(this.props.error) ?
          <small className="error">{this.props.error.statusText}</small> :
          null
        }
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  stockInfo: PropTypes.object
};

export default connect(mapStateToProps)(App);
