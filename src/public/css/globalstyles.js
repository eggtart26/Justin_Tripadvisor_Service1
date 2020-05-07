import { createGlobalStyle } from 'styled-components';

//import Muli700 from '../fonts/Muli-Bold.ttf';
import Muli200 from '../fonts/Muli-ExtraLight.ttf';

export default createGlobalStyle`
  @fontface {
    font-family: 'Muli';
    src: local('./Muli-ExtraLight.ttf');
    url(${Muli200}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  body {
    background-color: #f2f2f2;
  }

  * {
    margin: 0;
    padding: 0;

    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, p, span {
  color: rgb(26,26,26);
  }

  p, span {
    font-weight: 200;
  }

  h1, h2, h3 {
    font-weight: 700;
  }

  ul {
   li {
    list-style-type: none;
    }
  }

  button {
  display: block;
  padding: 8px 16px;
  border: 1px solid #000000;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  cursor: hand;

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
  }
`;
