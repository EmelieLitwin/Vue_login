import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import VuePassword from 'vue-password'
import "bootstrap/dist/css/bootstrap.css";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VuePassword)


const base = axios.create({
  baseURL: "http://localhost:4000"
});

Vue.prototype.$http = base;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
