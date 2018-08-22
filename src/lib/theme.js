/* eslint import/no-commonjs: [0] */
const theme = {
  fonts: {
    body: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  colors: {
    primary: '#8bc34a',
    danger: '#f5222d',
    text: {
      light: '#fff',
      dark: 'rgba(0,0,0,0.87)',
      secondary : 'rgba(0,0,0,0.60)',
    },
    bg: {
      body: '#F3F2F5',
      content: '#fff',
      input: '#efefef',
    },
  },
  sizes: {
    header: {
      height: '56px',
    },
    footer: {
      height: '56px',
    },
    main: {
      width: '1000px',
    },
    aside: {
      width: '256px',
    },
  },
  spacing: {
    padding: '10px',
  },
  screen: {
    gte: {
      sm: 'min-width: 768px',
      md: 'min-width: 992px',
      lg: 'min-width: 1200px',
    },
    lte: {
      sm: 'max-width: 768px',
      md: 'max-width: 992px',
      lg: 'max-width: 1200px',
    },
  },
  breakpoints: {
    aside: 'md',
  },
};

module.exports = theme;
