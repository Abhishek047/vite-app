import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import * as routeDefinitions from './routeDefinitions';
import { PublicWrapper } from './PublicWrapper';
import { PrivateWrapper } from './PrivateWrapper';

const routes = Object.values(routeDefinitions);

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      routes.map((route) => {
        let RouteWrapper = PublicWrapper;
        if (route.isPrivate) {
          RouteWrapper = PrivateWrapper;
        }
        const { Component, ...rest } = route;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <RouteWrapper {...rest}>
                <Component />
              </RouteWrapper>
            }
          />
        );
      })
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
