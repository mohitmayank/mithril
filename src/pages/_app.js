import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import cookies from 'next-cookies';
import getConfig from 'next/config';
import { StoreFactory, getInitialState } from '../store';
import theme from '../lib/theme';

const { publicRuntimeConfig } = getConfig();

const sweet = publicRuntimeConfig.authCookie;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps;
    let initialState = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const isServer = !!ctx.req;

    if (isServer && !process.browser) {
      initialState = await getInitialState(cookies(ctx)[sweet]);
    }

    return {
      pageProps,
      initialState,
    };
  }

  constructor(props) {
    super(props);
    this.store = StoreFactory(props.initialState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {/* styled-component ThemeProvider */}
        <ThemeProvider theme={theme}>
          {/* Mobx Root Store Gloabl state Provider */}
          <Provider store={this.store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
