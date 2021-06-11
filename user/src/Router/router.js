import Vue from 'vue';
import VueRouter from 'vue-router';
import beforeEach from './beforeEach';

import homepage from '../views/Landing';
import login from '../views/Login';
import profile from '../views/Profile';
import dashboard from '../views/Dashboard';
import idcanalyze from '../views/IdcAnalyze';
import metastaticanalyze from '../views/MetastaticAnalyzer';
import reports from '../views/Reports';
import idcfeedback from '../views/IdcFeedback';
import metastaticfeedback from '../views/MetastaticFeedback';
import logout from '../views/Logout';

Vue.use(VueRouter) 

const routes = [
  { path: '/', component: homepage },
  { path: '/login', component: login },
  { path: '/profile', component: profile },
  { path: '/dashboard', component: dashboard },
  { path: '/reports', component: reports },
  { path: '/idcfeedback', component: idcfeedback },
  { path: '/metastaticfeedback', component: metastaticfeedback },
  { path: '/logout', component: logout },
  { path: '/idcanalyze', component: idcanalyze },
    { path: '/metastaticanalyze', component: metastaticanalyze },
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