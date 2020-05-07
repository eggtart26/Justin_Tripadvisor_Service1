import styled from 'styled-components';

const AccordionPrompt = styled.span`
  display: inline-block;
  text-decoration: underline dotted #d6d6d6;
`;

const TourDetails = styled.div`
  opacity: ${props => (props.displayme ? "1" : "0")};
  max-height: ${props => (props.displayme ? "500px" : "0")};
  overflow-y: hidden;
  transform: translate3d(0, 0, 0);  
  transition: all 0.5s ease-in;
  overflow-y: hidden;
`;

export {
  AccordionPrompt,
  TourDetails,
};
