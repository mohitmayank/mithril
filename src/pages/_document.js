import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import theme from '../lib/theme';

let staticStyleSheet = null;
if (process.env.NODE_ENV === 'production') {
  staticStyleSheet = fs.readFileSync(`${process.cwd()}/src/.next/static/style.css`, 'utf8');
}

class MyDocument extends Document {
  render() {
    const { styleTags } = this.props;

    return (
      <html lang='en' dir='ltr'>
        <Head>
          <title>My page</title>
          <meta charSet='utf-8' />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name='viewport'
            content={
              'user-scalable=0, initial-scale=1, '
              + 'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.colors.primary} />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
          />
          {typeof staticStyleSheet === 'string' ? (
            <style dangerouslySetInnerHTML={{ __html: staticStyleSheet }} />
          ) : (
            <link rel='stylesheet' href='/_next/static/style.css' />
          )}
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = (ctx) => {
  const sheet = new ServerStyleSheet();
  const page = ctx.renderPage();
  const styleTags = sheet.getStyleElement();
  return {
    ...page,
    styleTags,
  };
};

export default MyDocument;
