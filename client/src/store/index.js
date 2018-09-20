import Vue from "vue";
import Vuex from "vuex";
import method from "./modules/method";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    method
  },
  strict: debug
});
