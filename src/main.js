// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import font-awesome
import 'font-awesome/css/font-awesome.min.css'
// import ionicons
import 'ionicons/dist/css/ionicons.min.css'
// import admin-lte
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/dist/js/app.min.js'
import 'admin-lte/dist/js/demo.js'
// import bootstrap-vue
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
Vue.use(BootstrapVue)

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {next()}
  else if (to.path == '/register') {next()}else {
    var user = localStorage.getItem('user')
    if (!user || user == undefined) {
      next({path: '/login#' + to.path})
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App}
})
