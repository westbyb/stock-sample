import React from 'react';
import {shallow, mount} from 'enzyme';
import expect from 'expect';

import Search from './Search.jsx';

describe('<Search/>', () => {
  it('should get the component', () => {
    expect(Search).toExist();
  });

  it('should render without issue', () => {
    let component = shallow(<Search/>);
    expect(component).toExist();
  });

  // Not yet sure how to test form submitting
});
