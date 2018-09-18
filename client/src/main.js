import "@babel/polyfill";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueTransmit from "vue-transmit";
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.config.productionTip = false;
Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VueTransmit);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
