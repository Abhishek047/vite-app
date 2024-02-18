import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Container } from '@mui/material';
import { paths } from './routeDefinitions';
import { PublicWrapper } from './PublicWrapper';
import { PrivateWrapper } from './PrivateWrapper';
import RootLayout from '../layout/RootLayout';
import { useGetNanoId } from '../hooks/useGetNanoId';

const AppRouter = () => {
  useGetNanoId();
  const router = createBrowserRouter(
    createRoutesFromElements(
      paths.map((route) => {
        let RouteWrapper = PublicWrapper;
        if (route.isPrivate) {
          RouteWrapper = PrivateWrapper;
        }

        const { Component, ...rest } = route;
        return (
          <Route key={route.path} element={<RootLayout />}>
            <Route
              path={route.path}
              element={
                <RouteWrapper {...rest}>
                  <Container maxWidth="xl">
                    <Component />
                  </Container>
                </RouteWrapper>
              }
            />
          </Route>
        );
      })
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
