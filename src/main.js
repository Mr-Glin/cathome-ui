import Vue from 'vue'
import App from './App'
import router from './router'

//ant
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

//jquery
import $ from 'jquery'

/**
 * Axios
 */
import axios from 'axios'

/**
 * Bootstrap
 */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

/**
 * Vuex
 */
import store from "./vuex/store";

/**
 * axiosconfig
 */
import "./config/axiosConfig";

Vue.config.productionTip = false
Vue.use(Antd);
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
