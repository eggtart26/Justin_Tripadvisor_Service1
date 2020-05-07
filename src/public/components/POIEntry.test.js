import React from 'react';
import { mount } from 'enzyme';
import POIEntry from './POIEntry';
import dummydata from '../../dummydata.js';


describe('POI Entry component', () => {
  const data = dummydata.Attractions[0];
  const clickHandler = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
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

  // By design, enzyme doesn't support event listeners since they're a Javascript
  // implementation and not a React implementation. So, you'll have to do some
  // Javascript and jest trickery in order to mimic the event listener.

  test('It should have a functioning click handler to handle toggles', () => {
    expect(clickHandler).not.toHaveBeenCalled();
    wrapper.find('button').simulate('click');
    expect(clickHandler.mock.calls.length).toEqual(1);
  });
});
