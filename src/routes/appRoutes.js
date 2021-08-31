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
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        needToolbar: true,
        icon: 'mdi-arrow-left',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        icon: 'none',
      },
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
