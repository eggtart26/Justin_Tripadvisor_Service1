import styled from 'styled-components';

const LinkLikeButton = styled.button`
  text-decoration: underline dotted #d6d6d6;
  border: none;
  font-size: 12px;
  font-weight: 200;
  margin: 4px 0px;
  padding: 0;
  display: inline-block;
  background: none!important;
  text-align: left;
`;

const ButtonLike = styled.span`
  display: block;
  padding: 8px 16px;
  border: 1px solid #000000;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  cursor: hand;
  text-align: center;
  color: rgb(26,26,26);
  text-decoration: none;

    &:hover {
      background-color: #d6d6d6;
    }

    &:focus {
      outline: $black solid 1px;
      outline-offset: -4px;
    }

    &:active {
      background-color: #adadad;
    }
`;

const TourItem = styled.li`
  display: flex;
  padding: 6px;
  padding-bottom: 12px;
  flex-direction: column;
  cursor: pointer;
  cursor: hand;
  font-size: 12px;
`;

const TourTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`

const TourDetails = styled.div`
  opacity: ${props => (props.displayme ? "1" : "0")};
  max-height: ${props => (props.displayme ? "500px" : "0")};
  overflow-y: hidden;
  transform: translate3d(0, 0, 0);  
  transition: all 0.5s ease-in;
  overflow-y: hidden;
`;

export {
  LinkLikeButton,
  ButtonLike,
  TourDetails,
  TourItem,
  TourTitle,
};
