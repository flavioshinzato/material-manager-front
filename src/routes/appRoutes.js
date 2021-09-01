import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        needToolbar: true,
      },
    },
  ],
});

export default routes;
