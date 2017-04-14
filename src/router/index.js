import Vue from 'vue'
import Router from 'vue-router'
import AdminlteRouter from './adminlte-vue.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: require('../Home.vue'),
    children: [{
      path: '',
      component: require('../components/Welcom.vue')
    }, {
      path: '/ModalTest',
      component: require('../components/ModalTest.vue')
    }, {
      path: '/LayoutTest',
      component: require('../components/LayoutTest.vue')
    }, {
      path: '/ElementTest',
      component: require('../components/ElementTest.vue')
    }, {
      path: '/UEditor',
      component: require('../components/UEditor.vue')
    }, {
      path: '/func1_5',
      component: require('../components/Func1_5.vue')
    }, {
      path: '/BootstrapVue/Alert',
      component: require('../components/bootstrap-vue/Alert.vue')
    }, {
      path: '/BootstrapVue/Badge',
      component: require('../components/bootstrap-vue/Badge.vue')
    }]
  },
    {
      path: '/login',
      name: 'Login',
      component: require('../Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: require('../Register.vue')
    },
    AdminlteRouter
  ]
})
