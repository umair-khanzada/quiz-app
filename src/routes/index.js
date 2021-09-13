import { Route, Switch } from 'react-router';
import React from 'react';

// Route Config
import RouteConfig from './RouteConfig';

const routes = (
  <Switch>
    {/** Simple Routes - don't use auth or any HOCs */}
    {RouteConfig.simpleRoutes.map((route) => (
      <Route
        key={`simple-${route.path}`}
        component={route.component}
        exact
        path={route.path}
      />
    ))}
  </Switch>
);

export default routes;
