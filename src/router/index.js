import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login

    },
    {
      path: '/dashboard',
      name:'Dashboard',
      component: Dashboard
    }
  ],
});
