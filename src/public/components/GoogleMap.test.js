import React from 'react';
import { shallow } from 'enzyme';
import GoogleMap from './GoogleMap';
import createGoogleMapsMock from 'jest-google-maps-mock';

describe('createGoogleMapsMock', () => {
  let googleMaps;
  beforeEach(() => {
    googleMaps = createGoogleMapsMock();
  });
  it('should create a map mock', () => {
    const mapDiv = document.createElement('div');
    new googleMaps.Map(mapDiv);
    expect(googleMaps.Map).toHaveBeenCalledTimes(1);
    expect(googleMaps.Map.mock.instances.length).toBe(1);
    expect(googleMaps.Map).toHaveBeenLastCalledWith(mapDiv);
  });
});

test('There should be a Marker method appended to the google map instance', () => {
  const googleMaps = createGoogleMapsMock();
  const wrapper = mount(<GoogleMap />);
  expect(googleMaps.Marker).toBeTruthy();
});

test('There should be one pin per tour attraction rendered to the map', () => {
})