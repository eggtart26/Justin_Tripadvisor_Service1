import React from 'react';

const Rating = ({ score }) => {

  var rating = [0,0,0,0,0];

  const fullDots = Math.floor(score);
  for (let i = 0; i < fullDots; i += 1) {
    rating[i] = 'full';
  }

  var halfDots = score %1;
  if (halfDots >= 0.25) {
    if (halfDots <= 0.75) {
      rating[fullDots] = 'half'
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
        )
      })}
    </span>
  
  )
}

export default Rating;