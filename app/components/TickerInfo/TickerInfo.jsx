import React from 'react';

import './TickerInfo.scss';

class TickerInfo extends React.Component {
  /**
   * In a better world, we've designed this API and it doesn't return poorly named variables
   */
  render() {
    let delta = Number(this.props.stock.c);
    return (
      <div id="ticker">
        <h5 className="symbol">
          {this.props.stock.t}
        </h5>
        <small className="date">NYSE: {this.props.stock.elt}</small>
        <h6 className="price">${this.props.stock.l_cur}</h6>
        <small className={delta >= 0 ? 'pos' : 'neg'}>${delta} ({this.props.stock.cp}%)</small>
      </div>
    );
  }
}

export default TickerInfo;
