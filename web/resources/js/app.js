import './bootstrap'
import Vue from 'vue'
import router from './router'
import store from './store' // ★　追加
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  store, // ★　追加
  components: { App },
  template: '<App />'
})
