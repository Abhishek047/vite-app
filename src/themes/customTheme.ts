import { PaletteColor, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    lightBackground: PaletteColor;
    accentColor1: PaletteColor;
  }
  interface PaletteOptions {
    lightBackground: PaletteColor;
    accentColor1: PaletteColor;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    lightBackground: true;
    accentColor1: true;
  }
}
const { palette } = createTheme();
// https://mui.com/material-ui/customization/default-theme/
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#66CC99',
    },
    secondary: {
      main: '#FFDF64',
    },
    lightBackground: palette.augmentColor({
      color: {
        main: '#E1F0DA',
      },
    }),
    accentColor1: palette.augmentColor({
      color: {
        main: '#6670CC',
      },
    }),
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Raleway',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});
