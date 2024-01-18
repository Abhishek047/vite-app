import AppRouter from './router/Routes';

const App = () => {
  const myApp = 'my-app';
  return (
    <div>
      <div>
        other-wrapper-providers for {myApp}
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
