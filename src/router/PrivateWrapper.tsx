import { RouteWrapper } from './routeDefinitions';

export const PrivateWrapper = (props: RouteWrapper) => {
  // Do some private route component stuff
  console.log(props.isPrivate);
  return props.children;
};
