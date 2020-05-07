import React from 'react';
import { shallow } from 'enzyme';
import POIEntry from './POIEntry';
import dummydata from '../../dummydata.js';


describe('POI Entry component', () => {
  const data=dummydata.Attractions[0];
  const clickHandler = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <POIEntry
        data={data}
        expand={true}
        stopIndex={1}
        onClick={clickHandler} 
      />,
    );
  });

  test('It should render the POIEntry component to the screen', () => {
    expect(wrapper).toExist();
  });

});
