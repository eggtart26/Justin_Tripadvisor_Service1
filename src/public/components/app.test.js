import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('Itinerary block', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('It should render the component to the screen', () => {
    expect(wrapper).toExist();
  });
});
