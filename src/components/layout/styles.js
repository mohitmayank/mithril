/* eslint-disable */
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${styledNormalize}
  // You can continue writing global styles
  body {
    font-family : ${(props) => props.theme.fonts.body};
    width : 100%!important;
  }
`;
