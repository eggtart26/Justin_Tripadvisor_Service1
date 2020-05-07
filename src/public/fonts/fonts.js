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
`;
