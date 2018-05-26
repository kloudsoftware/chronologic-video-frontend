import Vue from 'vue';
import Router from 'vue-router';
import Adgroups from './views/Adgroups.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Adgroups,
    },
  ],
});
