import React from 'react';
import {shallow, mount} from 'enzyme';
import expect from 'expect';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App.jsx';

let mockStore = configureStore([]);
let initialState = {
  stockInfo: undefined,
  error: undefined
};
let stockState = {
  stockInfo: {
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
  },
  error: {
    statusText: 'Test'
  }
};
let store = mockStore(initialState);
let fullStore = mockStore(stockState);

describe('<App/>', () => {
  it('should get the component', () => {
    expect(App).toExist();
  });

  it('should render without issue', () => {
    let component = shallow(<Provider store={store}><App/></Provider>);
    expect(component).toExist();
  });

  it('should only the search bar if the app if nothing has been searched', () => {
    let component = mount(<Provider store={store}><App/></Provider>);
    expect(component.find('#app').length).toBe(1);
    expect(component.find('Search').length).toBe(1);
    expect(component.find('TickerInfo').length).toBe(0);
    expect(component.find('.error').length).toBe(0);
  });

  it('should render the ticker info when the store has stock info', () => {
    let component = mount(<Provider store={fullStore}><App/></Provider>);
    expect(component.find('TickerInfo').length).toBe(1);
  });

  it('should render the ticker info when the store has stock info', () => {
    let component = mount(<Provider store={fullStore}><App/></Provider>);
    expect(component.find('.error').length).toBe(1);
    expect(component.find('.error').text()).toBe(stockState.error.statusText);
  });
});
