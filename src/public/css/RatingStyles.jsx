import styled from 'styled-components';

const RatingDot = styled.span`
  box-sizing: border-box;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1.25px solid #00a680;
  overflow: hidden;
  margin: 0px 1px;
`;

const RatingFiller = styled.span`
  height: 12px;
  display: block;
  background-color: #00a680;
`;

const HalfRating = styled(RatingFiller)`
  width:6px;
`;

const FullRating = styled(RatingFiller)`
  width: 12px;
`;

export {
  RatingDot,
  HalfRating,
  FullRating,
};
