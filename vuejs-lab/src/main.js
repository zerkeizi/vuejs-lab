import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes, //*
  mode: 'history'
})

new Vue({
  el: '#app',
  router, // *
  render: h => h(App)
});

// *OBS: quando a variável tem o mesmo nome da propriedade, a variável pode ser omitida
// routes: routes 