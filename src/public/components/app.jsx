import React, { Component } from 'react';
import GlobalStyles from '../css/globalstyles';
import POIEntry from './POIEntry';
import { Link, animateScroll as scroll } from 'react-scroll';
import GoogleMap from './GoogleMap';
import tour from '../../dummydata';
import { Backdrop, Panel, List, LayoutRow, LayoutColumn, DisplayHeading } from '../css/layout';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tour: {
        Attractions: [],
      }
    };
    this.toggle = this.toggle.bind(this);
    this.loadTour = this.loadTour.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
  }

  componentWillMount() {
    this.loadTour();
  }

  loadTour() {
    axios.get('tour')
      .then((response) => {
        this.setState({ tour: response.data });
      });
  }

  collapseAll() {
    const pois = this.state.tour.Attractions;
    for (let poi of pois) {
      poi.display = false;
    }
    this.setState({ pois });
  }

  toggle(i) {
    const pois = this.state.tour.Attractions;
    if (pois[i].display != undefined) {
      pois[i].display = !pois[i].display;
    } else {
      pois[i].display = true;
    }
    this.setState(pois);
  }

  render() {
    const pois = this.state.tour.Attractions;
    const about = this.state.tour;
    return (
      <Backdrop>

        <h1>Overview</h1>
        <p>{about.overview}</p>
        <h2>Itinerary</h2>

        <LayoutRow>
          <GoogleMap collapseAll={this.collapseAll} handlePin={this.toggle} attractions={tour.Attractions} />
          <LayoutColumn>
            <Panel>
              <DisplayHeading>You&rsquo;ll have 3 starting options</DisplayHeading>
              <Link to="#">See Important Information for details</Link>
            </Panel>

            <Panel>
              <List>
                {pois.map((poi, index) => (
                  <div key={`poi${index}`}>
                    <Link to={`stop${index}`} spy={true} smooth={true} offset={-16} duration={500} id={`stop${index}`} />
                    <POIEntry
                      onClick={this.toggle}
                      data={poi}
                      expand={poi.display ? poi.display : false}
                      stopIndex={index + 1}
                    />
                  </div>
                ))}
              </List>
            </Panel>

            <Panel>
              <DisplayHeading>You&rsquo;ll end at</DisplayHeading>
              <Link to="#">See Important Information for details</Link>
            </Panel>
          </LayoutColumn>
        </LayoutRow>

        <GlobalStyles />
      </Backdrop>
    );
  }
}

export default App;
