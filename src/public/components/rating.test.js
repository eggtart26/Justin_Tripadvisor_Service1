import React from 'react';
import { shallow } from 'enzyme';
import Rating from './rating';

describe('Rating Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Rating score={5} reviewcount={50} />);
  });

  test('It should render the Rating component to the screen', () => {
    expect(wrapper).toExist();
  });

  test('It should contain a textual representation of the review count', () => {
    wrapper.contains('50 reviews');
  });

});
