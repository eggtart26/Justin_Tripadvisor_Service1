import React, { Component } from 'react';
import Rating from './Rating';
import { LinkLikeButton, ButtonLike, TourItem, TourTitle, TourDetails } from '../css/POIStyles';

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

      <LinkLikeButton
        onClick={() => { onClick(stopIndex - 1); }}
      >
        See details &amp; photo
      </LinkLikeButton>

      <TourDetails displayme={expand}>
        <div className="rating">
          <Rating score={data.rating} reviewcount={53} />
        </div>

        <img
          src={data.image_path}
          alt={data.image_alt}
        />
        <span>
          {data.description}
        </span>

        <span>Read more|less</span>

        <ButtonLike>
          <span href="/attractions/fakeroute">
            More About {data.name}
          </span>
        </ButtonLike>
      </TourDetails>
    </TourItem>
  );
};


export default POIEntry;
