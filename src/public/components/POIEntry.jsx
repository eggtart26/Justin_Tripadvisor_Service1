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

      <TourDetails displayme={expand}>
        <div className="rating">
          <Rating score={data.rating} reviewcount={53} />
        </div>

        <img
          src={`/image/${data.image_path}`}
          alt={data.image_alt}
        />
        <p>
          {data.description}
        </p>

        <ButtonLike> 
          More About {data.name}
        </ButtonLike>
      </TourDetails>

      <LinkLikeButton expand={expand} onClick={() => { onClick(stopIndex - 1); }}>
        {expand === true ? 'See less' : 'See details & photo'}
      </LinkLikeButton>

    </TourItem>
  );
};


export default POIEntry;
