import React from 'react';
import Home from '../module/Home';
import About from '../module/About/About';
import Contact from '../module/contact/Contact';
import Error404 from '../module/error404/Error404';

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

// Route components
const HomePath: RouteComponents = {
  path: '/',
  Component: Home,
  isPrivate: true,
};
const AboutPath: RouteComponents = {
  path: 'about',
  Component: About,
  isPrivate: true,
};
const ContactPath: RouteComponents = {
  path: 'contact',
  Component: Contact,
  isPrivate: true,
};
const Error404Path: RouteComponents = {
  path: '*',
  Component: Error404,
  isPrivate: true,
};
export const paths = [HomePath, AboutPath, ContactPath, Error404Path];
