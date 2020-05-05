import React, { Component } from 'react';

const POIEntry = ({expand, stopIndex, onClick}) => {

  return (
    <li className="tour__item">
      <span className="tour__counter">{stopIndex}</span>
      <span className="tour__title">Name Of Attraction</span>
      <div>
        <span className="tour__body">
          Stop: 4 hours
        </span>
        -
        <span className="admission">
          Admission included
        </span>
      </div>

      <span onClick={() => { onClick(stopIndex - 1); }}> See details &amp; photo</span>

      <div className={expand ? "tour__details" : "tour__details tour__details--hidden"}>
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
