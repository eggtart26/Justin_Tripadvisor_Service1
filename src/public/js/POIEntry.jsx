import React from 'react';

const POIEntry = () => (
  <li className="itinerary--stop">
    <span>Name Of Attraction</span>
    <span className="stopduration">
      Stop: 4 hours
    </span>
    -
    <span className="admission">
      Admission included
    </span>

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

    <span>
      See details &amp; photo
      <em />
    </span>

  </li>
);

export default POIEntry;
