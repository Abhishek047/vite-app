import React from 'react';
import Home from '../module/Home';

export interface RouteComponents {
  path: string;
  Component: () => React.JSX.Element;
  isPublic?: boolean;
  isPrivate?: boolean;
}
export interface RouteWrapper
  extends Pick<RouteComponents, 'isPrivate' | 'isPublic'> {
  children: React.ReactNode;
}
const HomePath: RouteComponents = {
  path: '/',
  Component: Home,
  isPrivate: true,
};

export const paths = [HomePath];
