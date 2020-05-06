import React from 'react';
import { shallow } from 'enzyme';
import GoogleMap from './GoogleMap';
import createGoogleMapsMock from 'jest-google-maps-mock';
import dummydata from '../../dummydata.js';

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

describe('Map Component', () => {
  let googleMaps;
  beforeEach(() => {
    googleMaps = createGoogleMapsMock();
  });

  it('should have a Marker method appended to the google map instance', () => {
    expect(googleMaps.Marker).toBeTruthy();
  });

  it('should invoke the Marker constructor for each tour attraction', () => {
    const num = dummydata.Attractions.length;
    const wrapper = mount(<GoogleMap attractions={dummydata.Attractions} />);
    expect(googleMaps.Marker).toHaveBeenCalledTimes(num);
  });
});


/* A pin:

<div style="width: 27px; height: 43px; overflow: hidden; position: absolute; left: -62px; top: -121px; z-index: -78;">
<img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png" draggable="false" style="position: absolute; left: 0px; top: 0px; width: 27px; height: 43px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
</div>
// test('There should be one pin per tour attraction rendered to the map', () => {
// })
*/