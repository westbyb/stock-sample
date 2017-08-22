import React from 'react';
import PropTypes from 'prop-types';

import './TickerInfo.scss';

/**
 * Component used to display stock information
 *
 * @param {Object} stock Stock information object
 */
class TickerInfo extends React.Component {
  // In a better world, we've designed this API and it doesn't return poorly named variables
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

TickerInfo.propTypes = {
  stock: PropTypes.object
};

export default TickerInfo;
