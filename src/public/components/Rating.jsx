import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ score }) => {
  let rating = [0, 0, 0, 0, 0];
  const fullDots = Math.floor(score);
  for (let i = 0; i < fullDots; i += 1) {
    rating[i] = 'full';
  }
  const halfDots = score % 1;
  if (halfDots >= 0.25) {
    if (halfDots <= 0.75) {
      rating[fullDots] = 'half';
    }
  }

  const emptyDots = 5 - fullDots - halfDots;

  return (
    <span className="rating">
      {rating.map((circle) => {
        return (
          <div className='rating__dot'>
            <div className ={`rating--${circle}`} />
          </div>
        );
      })}
    </span>
  );
};

export default Rating;


Rating.defaultProps = {
  score: 0.0,
};

Rating.propTypes = {
  score: PropTypes.number,
};
