// import store from '@/store';
import routes from './appRoutes';

// routes.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const isAutenticated = store.getters.hasSession;
//   if (requiresAuth && !isAutenticated) {
//     next('/start');
//   } else if (!requiresAuth && isAutenticated) {
//     next();
//   } else {
//     next();
//   }
// });

export default routes;
