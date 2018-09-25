// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import App from "./App";

import VInput from "./components/VInput.vue";
import VuePanel from "./components/VuePanel.vue";

Vue.config.productionTip = false;

Vue.component("v-input", VInput);
Vue.component("vue-panel", VuePanel);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
