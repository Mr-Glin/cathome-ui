import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:8888/'
  },
  getters: {},
  mutations: {}, actions: {},
  modules: {}
})

export default store
