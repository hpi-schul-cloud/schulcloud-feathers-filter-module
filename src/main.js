import Vue from 'vue';
import App from './components/filter-wrapper';
import './base.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
}).$mount("#app");

