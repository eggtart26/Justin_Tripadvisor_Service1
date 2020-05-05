import React, { Component } from 'react';

const POIEntry = ({expand, stopIndex, onClick}) => {

  return (
    <li className="itinerary--stop">
      <span className="itinerary--stopIndex">{stopIndex}</span>
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

      <span onClick={() => { onClick(stopIndex - 1); }}> See details &amp; photo</span>

      <div className={expand ? "shown" : "hidden"}>
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

        <button type="button">
          More About Name Of Attraction
        </button>
      </div>
    </li>
  );
};


export default POIEntry;
