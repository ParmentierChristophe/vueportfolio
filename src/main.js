import Vue from 'vue'
import App from './App.vue'
import Scrollspy from 'vue2-scrollspy';
import  router from "./router";
import './assets/css/style.css';
import './assets/js/test.js';

Vue.config.productionTip = false

new Vue({
  router,
  Scrollspy,
  render: h => h(App)
}).$mount('#app')
