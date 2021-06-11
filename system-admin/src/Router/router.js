import Vue from 'vue';
import VueRouter from 'vue-router';
import beforeEach from './beforeEach';

import homepage from '../views/Dashboard';
import login from '../views/Login';
import admins from '../views/Admins';
import reports from '../views/Reports';
import users from '../views/Users';
import logout from '../views/Logout';

Vue.use(VueRouter) 

const routes = [
  { path: '/dashboard', component: homepage },
  { path: '/admins', component: admins },
  { path: '/reports', component: reports },
  { path: '/users', component: users },
  { path: '/logout', component: logout },
  { path: '/', component: login },
  ]

  const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    mode: 'history'
  })

  router.beforeEach(beforeEach);

  export default router