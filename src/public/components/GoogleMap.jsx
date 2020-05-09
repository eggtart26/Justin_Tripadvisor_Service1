import React, { Component, createRef } from 'react';
import apikey from '../../config.js';
import { MyMapContainer } from '../css/MapStyles';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.googleMapRef = createRef();
  }

  componentDidMount() {
    const googleScript = document.createElement('script');
    const labelScript = document.createElement('script');
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${apikey}&libraries=places`;
    labelScript.src = `http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.9/src/markerwithlabel.js`;
    window.document.body.appendChild(googleScript);
    window.document.body.appendChild(labelScript);
    googleScript.addEventListener('load', ()=> {
      this.googleMap = this.createGoogleMap();
    });
  }

  createGoogleMap() {
    const attractions = this.props.attractions;
    const centerOn = {
      lat: attractions[0].latitude,
      lng: attractions[0].longitude
    };

    const map = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 11,
      center: centerOn,
      disableDefaultUI: true,
    });

    const defaultIcon = {
      url: '/image/itinerary_stop.png',
      scaledSize: new google.maps.Size(35, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 40),
    };

    const activeIcon = {
      url: '/image/itinerary_stop_active.png',
      scaledSize: new google.maps.Size(35, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 40),
    };

    for (let i = 0; i < attractions.length; i += 1) {
      const pin = new window.google.maps.Marker({
        position: {
          lat: attractions[i].latitude,
          lng: attractions[i].longitude,
          stopindex: i,
        },
        icon: defaultIcon,
        map,
        label: (i + 1).toString(),
      });

      pin.addListener('click', function() {
        map.setZoom(14);
        map.setCenter(this.getPosition());
        console.log( "YO!" + this.label);
      });

      pin.addListener('mouseover', function() {
        this.setIcon(activeIcon);
      });

      pin.addListener('mouseout', function() {
        this.setIcon(defaultIcon);
      });
    }
  }

  render() {

    const mapStyle ={
      width: '350px',
      height: '350px',
      marginRight: '8px',
      top: '12px',
      zIndex: 1,
      position: 'sticky !important'
    }

    return (
      <MyMapContainer>
        <div
          id="google-map"
          ref={this.googleMapRef}
          style={{width: '100%', height: '100%'}}
        />
      </MyMapContainer>
    );
  }
}

export default GoogleMap;