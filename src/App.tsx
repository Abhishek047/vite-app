import { ThemeProvider } from '@mui/material/styles';
import AppRouter from './router/Routes';
import { theme } from './themes/customTheme';

const App = () => {
  const myApp = 'my-app';
  return (
    <div>
      <div>
        other-wrapper-providers for {myApp}
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default App;
