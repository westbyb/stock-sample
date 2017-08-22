import React from 'react';
import {shallow, mount} from 'enzyme';
import expect from 'expect';

import TickerInfo from './TickerInfo.jsx';

const stockInfo = {
  "id": "25670",
  "t": "NKE",
  "e": "NYSE",
  "l": "53.61",
  "l_fix": "53.61",
  "l_cur": "53.61",
  "s": "2",
  "ltt": "4:00PM EDT",
  "lt": "Aug 21, 4:00PM EDT",
  "lt_dts": "2017-08-21T16:00:37Z",
  "c": "-1.35",
  "c_fix": "-1.35",
  "cp": "-2.46",
  "cp_fix": "-2.46",
  "ccol": "chr",
  "pcls_fix": "54.96",
  "el": "53.69",
  "el_fix": "53.69",
  "el_cur": "53.69",
  "elt": "Aug 21, 7:51PM EDT",
  "ec": "+0.08",
  "ec_fix": "0.08",
  "ecp": "0.15",
  "ecp_fix": "0.15",
  "eccol": "chg",
  "div": "0.18",
  "yld": "1.34"
};

describe('<TickerInfo/>', () => {
  it('should get the component', () => {
    expect(TickerInfo).toExist();
  });

  it('should render without issue', () => {
    let component = shallow(<TickerInfo stock={stockInfo}/>);
    expect(component).toExist();
  });

  it('should display information correctly', () => {
    let component = shallow(<TickerInfo stock={stockInfo}/>);
    expect(component.find('.symbol').text()).toBe(stockInfo.t);
    expect(component.find('.date').text()).toBe('NYSE: ' + stockInfo.elt);
    expect(component.find('.price').text()).toBe('$' + stockInfo.l_cur);
    expect(component.find('.delta').text()).toBe('$' + stockInfo.c + ' (' + stockInfo.cp + '%)');
  });
});
