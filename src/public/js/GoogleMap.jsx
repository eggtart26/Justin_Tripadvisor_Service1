import React, { Component, createRef } from 'react'
import apikey from '../../config.js';
class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.googleMapRef = createRef();
  }

  createGoogleMap() {
    var map = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 16,
      center: {
        lat: 43.642567,
        lng: -79.387054,
      },
      disableDefaultUI: true,
    })

    new window.google.maps.Marker({
      position: { lat: 43.642567, lng: -79.387054 },
      map: map
    });
  }

  componentDidMount() {
    const googleScript = document.createElement('script')
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${apikey}&libraries=places`;
    window.document.body.appendChild(googleScript)
    googleScript.addEventListener('load', ()=> {
      this.googleMap = this.createGoogleMap();
    });
  }


  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{width: '400px', height: '400px'}}
      >
      </div>
    );
  }
}

export default GoogleMap;