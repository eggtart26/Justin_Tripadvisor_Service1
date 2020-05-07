import React from 'react';
import { shallow } from 'enzyme';
import POIEntry from './POIEntry';
import dummydata from '../../dummydata.js';

const data=dummydata.Attractions[0];
const clickHandler = jest.fn();

test('It should render the POIEntry component to the screen', () => {
  const wrapper = shallow(<POIEntry data={data} expand={true} stopIndex={1} onClick={clickHandler} />);
  expect(wrapper).toExist();
});