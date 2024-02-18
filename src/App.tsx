import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import AppRouter from './router/Routes';
import { theme } from './themes/customTheme';
import { store } from './store/store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default App;
