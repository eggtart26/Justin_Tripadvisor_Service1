import React from 'react';

const POIEntry = () => (
  <li className="itinerary--stop">
    <span className="itinerary--title">Name Of Attraction</span>
    <div>
      <span className="itinerary--duration">
        Stop: 4 hours
      </span>
      -
      <span className="admission">
        Admission included
      </span>
    </div>

    <div className="rating">
      # reviews
    </div>

    <img
      src="#"
      alt="alt text"
    />
    <span>
      Description of the location goes here.
    </span>

    <span>Read more|less</span>

    <div>
      More about Name Of Attraction
    </div>

    <button type="button">
      See details &amp; photo
      <em />
    </button>

  </li>
);

export default POIEntry;
