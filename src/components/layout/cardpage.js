import React from 'react';
import { node } from 'prop-types';
import Page from './page';
import PagePaper from '../blocks/PagePaper';

function CardPage(props) {
  return (
    <Page {...props}>
      <PagePaper>
        {props.children}
      </PagePaper>
    </Page>
  );
}

CardPage.propTypes = {
  children: node,
};

export default CardPage;
