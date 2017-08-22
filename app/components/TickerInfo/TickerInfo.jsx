import React from 'react';

import './TickerInfo.scss';

class TickerInfo extends React.Component {
  /**
   * In a better world, we've designed this API and it doesn't return poorly named variables
   */
  render() {
    return (
      <div id="ticker">
        <h5>{this.props.stock.t}</h5>
        <span>${this.props.stock.l_cur}</span>
      </div>
    );
  }
}

export default TickerInfo;
