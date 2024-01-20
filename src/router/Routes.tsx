import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { paths } from './routeDefinitions';
import { PublicWrapper } from './PublicWrapper';
import { PrivateWrapper } from './PrivateWrapper';

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      paths.map((route) => {
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
