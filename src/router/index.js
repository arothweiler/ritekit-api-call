import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/pages/Landing';
import Queue from '@/pages/Queue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/queue',
      name: 'Queue List',
      component: Queue,
    },
  ],
});
