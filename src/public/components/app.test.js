import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('Itinerary block', () => {
  let wrapper;
  let loadTour;
  let toggle;
  beforeEach(() => {
    wrapper = shallow(<App />);
    loadTour = jest.spyOn(App.prototype, 'loadTour');
    toggle = jest.spyOn(App.prototype, 'toggle');
  });

  afterEach(() => {
    loadTour.mockClear();
    toggle.mockClear();
  });

  test('It should render the component to the screen', () => {
    expect(wrapper).toExist();
  });

  test('It should load a tour on render', () => {
    expect(loadTour).toHaveBeenCalled();
  });

  // Unit test for this toggle method is in POI entry for individual POI.
  xtest('It should toggle the display of a given POI', () => {
    expect(toggle).not.toHaveBeenCalled();
    wrapper.setState({ tour: { id: 1, Attractions: ['true'] } });
    wrapper.update();
    let button = wrapper.find('button');
    button.simulate('click');
    expect(toggle).toHaveBeenCalled();
    spy.mockClear();
  });
});
