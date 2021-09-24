import loadable from '@loadable/component';
import RouteNames from './RouteNames';

export default {
  simpleRoutes: [
    // Auth
    {
      path: RouteNames.Score, // '/Score', //
      component: loadable(() => import('../features/Score')),
    },
    {
      path: RouteNames.Home, // '/Home', //
      component: loadable(() => import('../features/Home')),
    },
    {
      path: RouteNames.Question, // '/Home', //
      component: loadable(() => import('../features/Question')),
    },
  ],
};
