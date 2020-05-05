import React, { Component } from 'react';
import POIEntry from './POIEntry';

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
        <ul className="itinerary">
          <POIEntry onClick={this.toggle} stopIndex={1} expand={this.state.pois[0]} />
          <POIEntry onClick={this.toggle} stopIndex={2} expand={this.state.pois[1]} />
          <POIEntry onClick={this.toggle} stopIndex={3} expand={this.state.pois[2]} />
        </ul>
        <span>You&rsquo;ll end at</span>
        <span>See Important Information for details</span>
      </div>
    );
  }
}

export default App;
