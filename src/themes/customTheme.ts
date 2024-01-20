import { createTheme } from '@mui/material/styles';

// https://mui.com/material-ui/customization/default-theme/
export const theme = createTheme({
  palette: {
    primary: {
      main: '#66CC99',
      light: '#66A3D2',
      dark: '#001F3F',
    },
    secondary: {
      main: '#FFD700',
      light: '#FFECB3',
      dark: '#B8860B',
    },
  },
});
