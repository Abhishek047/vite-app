import { RouteWrapper } from './routeDefinitions';

export const PublicWrapper = (props: RouteWrapper) => {
  // Do some public route component stuff
  console.log(props.isPrivate || 'isPublic');
  return props.children;
};
