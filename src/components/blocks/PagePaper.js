import styled from 'styled-components';

const PagePaper = styled.div`
  && {
    padding : 48px;
    background-color : white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border-radius : 6px;
    @media (${(props) => props.theme.screen.lte[props.theme.breakpoints.aside]}) {
      padding : 14px;
      box-shadow : none;
      border-radius : 0;
    }
    > h1 {
      margin-top : 0;
    }
  }
`;

PagePaper.defaultProps = {
  elevation: 1,
};

export default PagePaper;
