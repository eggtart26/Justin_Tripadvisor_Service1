import React, { Component } from 'react';
import POIEntry from './POIEntry';
import { Link, animateScroll as scroll } from 'react-scroll';
import GoogleMap from './GoogleMap';
import tour from '../../dummydata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pois: [false, false, false],
    };
    this.toggle = this.toggle.bind(this);
  }



  toggle(i) {
    const { pois } = this.state;
    pois[i] = !pois[i];
    this.setState(pois);
  }

  render() {

    return (
      <div className="block">
        <h1>Overview</h1>

        <p>Overview paragraph will go here hip hip hooray.</p>
        <h2>Itinerary</h2>
        <div className="map" />
        <span>You&rsquo;ll have # starting options</span>

        <GoogleMap attractions={tour.Attractions} />
        <ul className="itinerary">
          <Link to="stop1" spy={true} smooth={true} offset={-16} duration={500} id="stop1">
          <POIEntry onClick={this.toggle} stopIndex={1} expand={this.state.pois[0]} />
          </Link>

          <Link to="stop2" spy={true} smooth={true} offset={-16} duration={500} id="stop2">
          <POIEntry onClick={this.toggle} stopIndex={2} expand={this.state.pois[1]} />
          </Link>

          <Link to="stop3" spy={true} smooth={true} offset={-15} duration={500} id="stop3">
          <POIEntry onClick={this.toggle} stopIndex={3} expand={this.state.pois[2]} />
          </Link>
        </ul>
        <span>You&rsquo;ll end at</span>
        <span>See Important Information for details</span>
      </div>
    );
  }
}

export default App;
