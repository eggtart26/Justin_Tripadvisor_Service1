import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

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
    border-bottom: 1px solid rgb(224,224,224);
    padding-bottom: 20px;
    margin-bottom: 8px;
  }

  ul {
   li {
    list-style-type: none;
    }
  }

  img {
    width: 100%;
  }

  p {
    padding: 12px 0;
  }

  a {
    text-decoration: underline dotted #d6d6d6;
    border: none;
    font-size: 12px;
    font-weight: 200;
    margin: 4px 0px;
    padding: 0;
    display: inline-block;
    background: none!important;
    text-align: left;
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
