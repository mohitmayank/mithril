import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import cookies from 'next-cookies';
import getPageContext from '../lib/getPageContext';
import { StoreFactory, getInitialState } from '../store';
import theme from '../lib/theme';

const sweet = process.env.AUTH_COOKIE;

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
    this.pageContext = getPageContext();
    this.store = StoreFactory(props.initialState);
  }

  pageContext = null;

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* styled-component ThemeProvider */}
            <ThemeProvider theme={Object.assign({}, theme, { mui: this.pageContext.theme })}>
              {/* Mobx Root Store Gloabl state Provider */}
              <Provider store={this.store}>
                {/* Pass pageContext to the _document though the renderPage enhancer
                    to render collected styles on server side. */}
                <Component pageContext={this.pageContext} {...pageProps} />
              </Provider>
            </ThemeProvider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default MyApp;
