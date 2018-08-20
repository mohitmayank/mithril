import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import getConfig from 'next/config';
import { Link } from '../../router';

const { publicRuntimeConfig } = getConfig();

const StyledFooter = styled.footer`
  text-align : center;
  width : 100%;
  padding : ${(props) => props.theme.spacing.padding}
  background-color : ${(props) => props.theme.colors.bg.body}
  >p>a {
    text-decoration : none;
    color : inherit;
  }
`;

const year = (new Date()).getFullYear();
const domain = publicRuntimeConfig.legalDomain;

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Typography variant='body1'>
          &copy; {year} | <Link route='/'><a>{domain}</a></Link> | All Rights Reserved
        </Typography>
      </StyledFooter>
    );
  }
}

export default Footer;
