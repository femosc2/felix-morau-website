import Vue from 'vue'
import App from './App.vue'
import {VueMasonryPlugin} from 'vue-masonry';
import VueRouter from "vue-router"
import { routes } from "./routes.js";

Vue.use(VueMasonryPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: "history"
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
