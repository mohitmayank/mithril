const theme = {
  colors: {
    danger : '#f5222d',
    text: {
      light: '#fff',
      dark: 'rgba(0,0,0,0.87)',
    },
    bg: {
      body: '#F3F2F5',
      content: '#fff',
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
  misc: {
    menuBreakPoint: 'md',
    menuMediaBreakPoint(mui) {
      return `${mui.breakpoints.values[theme.misc.menuBreakPoint]}px`;
    },
  },
};

export default theme;
