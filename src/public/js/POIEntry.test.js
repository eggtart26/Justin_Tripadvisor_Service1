import React from 'react';
import { shallow } from 'enzyme';
import POIEntry from './POIEntry';

test('It should render the POIEntry component to the screen', () => {
  const wrapper = shallow(<POIEntry />);
  expect(wrapper).toExist();
});