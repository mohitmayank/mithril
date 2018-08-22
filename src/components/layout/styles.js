/* eslint-disable */
import { injectGlobal } from 'styled-components';

//some elments from normalise.css is copied here, rest are part of antd
injectGlobal`
  body {
    font-family : ${(props) => props.theme.fonts.body};
    width : 100%!important;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
`;
