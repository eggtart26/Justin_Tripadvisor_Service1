import React, { Component, createRef } from 'react'
import apikey from '../../config.js';
class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.googleMapRef = createRef();
  }

  componentDidMount() {
    const googleScript = document.createElement('script')
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${"sprinkles"}&libraries=places`;
    window.document.body.appendChild(googleScript)
    googleScript.addEventListener('load', ()=> {
      this.googleMap = this.createGoogleMap();
    });
  }

  createGoogleMap() {
    const attractions = this.props.attractions;
    const centerOn = {
      lat: attractions[0].latitude,
      lng: attractions[0].longitude
    }
    var centerMap = {

    }
    var map = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 4,
      center: centerOn,
      disableDefaultUI: true,
    })

    new window.google.maps.Marker({
      position: centerOn,
      map: map
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