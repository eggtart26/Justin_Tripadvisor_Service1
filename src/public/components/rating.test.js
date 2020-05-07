import React from 'react';
import { shallow } from 'enzyme';
import Rating from './rating';

test('It should render the Rating component to the screen', () => {
  const wrapper = shallow(<Rating />);
  expect(wrapper).toExist();
});