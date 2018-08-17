import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const PagePaper = styled(Paper)`
  && {
    padding : 48px;
    @media (max-width: ${(props) => props.theme.misc.menuMediaBreakPoint(props.theme.mui)}) {
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
