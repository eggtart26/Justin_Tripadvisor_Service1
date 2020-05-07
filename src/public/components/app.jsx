import React, { Component } from 'react';
import GlobalStyles from '../css/globalstyles';
import POIEntry from './POIEntry';
import { Link, animateScroll as scroll } from 'react-scroll';
import GoogleMap from './GoogleMap';
import tour from '../../dummydata';
import { Block, LayoutRow, LayoutColumn } from '../css/layout';

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
      pois[i].display = !pois[i].display;
    } else {
      pois[i].display = true;
    }
    this.setState(pois);
  }

  render() {

    const pois = this.state.pois;

    return (
      <Block>
        <h1>Overview</h1>

        <p>Overview paragraph will go here hip hip hooray.</p>
        <h2>Itinerary</h2>
        <LayoutRow>
          <GoogleMap attractions={tour.Attractions} />
          <LayoutColumn>
            <span>You&rsquo;ll have # starting options</span>
            <ul className="itinerary">
              {pois.map((poi, index) => (
                <Link to={`stop${index}`} spy={true} smooth={true} offset={-16} duration={500} id={`stop${index}`}>
                  <POIEntry
                    key={`poi${index}`}
                    onClick={this.toggle}
                    data={poi}
                    expand={poi.display ? poi.display : false}
                    stopIndex={index + 1}
                  />
                </Link>
              ))}
            </ul>
            <span>You&rsquo;ll end at</span>
            <span>See Important Information for details</span>
          </LayoutColumn>
        </LayoutRow>

        <GlobalStyles />
      </Block>
    );
  }
}

export default App;
