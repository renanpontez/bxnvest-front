import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const mainTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1D7DEB',
    },
    secondary: {
      main: '#242E4D',
    },
    background: {
      default: '#1C2541',
      cardLighter: '#404966'
    },
    text: {
      primary: '#FFF'
    }
  },
  typography: {
    htmlFontSize: 13,
    fontSize: 11,
    h1: {
      fontSize: '2rem'
    },
    h2: {
      fontSize: '1.5rem'
    },
    h3: {
      fontSize: '1rem'
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h3',
        h5: 'h3',
        h6: 'h3',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'p',
        body2: 'span',
      },
    },
  },
});