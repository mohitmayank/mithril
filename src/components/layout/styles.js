import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${styledNormalize}
  // You can continue writing global styles
  body {
    font-family : 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif';
    background : red;
  }
`
