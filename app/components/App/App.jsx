import React from 'react';
import {connect} from 'react-redux';

import Search from '../Search/Search.jsx';
import TickerInfo from '../TickerInfo/TickerInfo.jsx';

import './App.scss';

const mapStateToProps = store => {
  return {
    stockInfo: store.stockInfo,
    error: store.error
  }
}

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

export default connect(mapStateToProps)(App);