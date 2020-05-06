import React, { Component } from 'react';
import POIEntry from './POIEntry';
import { Link, animateScroll as scroll } from 'react-scroll';
import GoogleMap from './GoogleMap';
import tour from '../../dummydata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pois: tour.Attractions,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(i) {
    const { pois } = this.state;
    if(pois[i].display != undefined) {
      pois[i] = !pois[i];
    } else {
      pois[i].display = true;
    }
    this.setState(pois);
  }

  render() {

    const pois = this.state.pois;

    return (
      <div className="block">
        <h1>Overview</h1>

        <p>Overview paragraph will go here hip hip hooray.</p>
        <h2>Itinerary</h2>
        <div className="map" />
        <span>You&rsquo;ll have # starting options</span>

        <GoogleMap attractions={tour.Attractions} />
        <ul className="itinerary">

          {pois.map((poi, index) => {
            return (
              <POIEntry key={`poi${index}`} onClick={this.toggle} data={poi} expand={poi.display ? poi.display : false} stopIndex={index + 1} />
            )
          })}
        </ul>
        <span>You&rsquo;ll end at</span>
        <span>See Important Information for details</span>
      </div>
    );
  }
}

export default App;
