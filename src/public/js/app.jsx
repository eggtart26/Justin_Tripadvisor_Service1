import React, { Component } from 'react';
import POIEntry from './POIEntry';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poi1: false,
      poi2: false,
      po3: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    console.log( this.state );
    console.log(e.target);
  }

  render() {
    return (
      <div className="block">
        <h1>Overview</h1>
        <p>Overview paragraph will go here hip hip hooray.</p>
        <h2>Itinerary</h2>
        <div className="map" />
        <span>You&rsquo;ll have # starting options</span>
        <ul className="itinerary">
          <POIEntry onClick={this.toggle} expand={this.state.poi1} />
          <POIEntry onClick={this.toggle} expand={this.state.poi2} />
          <POIEntry onClick={this.toggle} expand={this.state.poi3} />
        </ul>
        <span>You&rsquo;ll end at</span>
        <span>See Important Information for details</span>
      </div>
    );
  }
}

export default App;
