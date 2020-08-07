// default
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// pages
import Home from '@/pages/Home/Home'
import Users from '@/pages/Users/Users'
import notFound from '@/pages/404/404'

// routering
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '*',
      name: 'notFound',
      component: notFound,
    },
  ],
});