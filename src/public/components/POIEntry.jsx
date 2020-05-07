import React, { Component } from 'react';
import Rating from './Rating';
import { AccordionPrompt, TourItem, TourTitle, TourDetails } from '../css/POIStyles';

const POIEntry = ({data, expand, stopIndex, onClick}) => {
  return (
    <TourItem>
      <span className="tour__counter">{stopIndex}</span>
      <TourTitle>{data.name}</TourTitle>
      <div>
        <span className="tour__body">
          Stop: 4 hours
        </span>
        -
        <span className="admission">
          Admission included
        </span>
      </div>

      <AccordionPrompt
        onClick={() => { onClick(stopIndex - 1); }}
      >
        See details &amp; photo
      </AccordionPrompt>

      <TourDetails displayme={expand}>
        <div className="rating">
          <Rating score={data.rating} reviewcount={53} />
        </div>

        <img
          src="#"
          alt="alt text"
        />
        <span>
          {data.description}
        </span>

        <span>Read more|less</span>

        <button type="button">
          More About {data.name}
        </button>
      </TourDetails>
    </TourItem>
  );
};


export default POIEntry;
