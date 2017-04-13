// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//import vue-adminlte
import VueAdmin from './components/adminlte-vue/index.js'
// import bootstrap-vue
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

//add plugins
Vue.use(BootstrapVue)
Vue.use(VueAdmin)

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
