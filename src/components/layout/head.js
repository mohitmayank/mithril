import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const Head = (props) => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{props.title}</title>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' href='/public/favicon.ico' />
  </NextHead>
);

Head.propTypes = {
  title: string,
};

export default Head;
