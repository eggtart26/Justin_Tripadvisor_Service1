import React, { Component } from 'react';

import POIEntry from './POIEntry.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="block">
        <h2>Overview</h2>
        <p>Overview paragraph will go here hip hip hooray.</p>
        <h2>Itinerary</h2>
        <div className="map" />
        <span>You&rsquo;ll have # starting options</span>
        <ul className="itinerary">
          <POIEntry />
          <POIEntry />
          <POIEntry />
        </ul>
        <span>You&rsquo;ll end at</span>
        <span>See Important Information for details</span>
      </div>
    );
  }
}

export default App;
