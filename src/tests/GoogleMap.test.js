import React from 'react';
import { shallow, mount } from 'enzyme';
import GoogleMap from '../public/components/GoogleMap';
import createGoogleMapsMock from 'jest-google-maps-mock';
// import { Marker } from '@googlemaps/jest-mocks';
import dummydata from '../dummydata.js';

describe('createGoogleMapsMock', () => {
  it('should create a map mock', () => {
    const googleMaps = createGoogleMapsMock();
    const mapDiv = document.createElement('div');
    const map = new googleMaps.Map(mapDiv);
    expect(googleMaps.Map).toHaveBeenCalledTimes(1);
    expect(googleMaps.Map.mock.instances.length).toBe(1);
    expect(googleMaps.Map).toHaveBeenLastCalledWith(mapDiv);
  });
});

describe('Map Component', () => {
  let googleMaps;
  let wrapper;
  let map;
  let mapDiv = document.createElement('div');
  beforeEach(() => {
    wrapper = shallow(<GoogleMap />);
    googleMaps = createGoogleMapsMock();
    map = new googleMaps.Map(mapDiv);
  });

  it('renders to the screen', () => {
    const wrapper = shallow(<GoogleMap />);
    expect(wrapper).toExist();
  });

  it('embeds the Google Maps API', () => {
    const instance = mount(<GoogleMap />).instance();
    const spy = jest.spyOn(instance, 'embedGoogleMaps');
    instance.componentDidMount();
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
})


xdescribe( 'The DOM', () => {
  it( 'Has a bound load event which, when fired, makes something happen in the component.', () => {
    //i need to simulate the mechanism of googleScript.addEventListener. 
    const eventMap = {
      load: null,
    };
    window.addEventListener = jest.fn((event, callback) => { eventMap[event] = callback});
    const component = mount(<GoogleMap />).instance();
    component.componentDidMount();
    const script = document.createElement('script');
    script.src = 'https://localhost:3000';
    window.document.body.appendChild(script);
    const spy = jest.spyOn( component, 'createGoogleMap');
    expect(spy).toHaveBeenCalled();
  });
});
