import React from 'react';
import Home from '../module/Home';

export interface RouteComponents {
  path: string;
  Component: () => React.JSX.Element;
  isPublic?: boolean;
  isPrivate?: boolean;
}
export interface RouteWrapper extends Partial<RouteComponents> {
  children: React.ReactNode;
}

export const HomePath: RouteComponents = {
  path: '/',
  Component: Home,
};
