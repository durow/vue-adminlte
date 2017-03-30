import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('../Home.vue'),
      children:[{
        path:'',
        component:require('../components/Welcom.vue')
      },{
        path:'/ModalTest',
        component:require('../components/ModalTest.vue')
      },{
        path:'/LayoutTest',
        component:require('../components/LayoutTest.vue')
      },{
        path:'/func1_3',
        component:require('../components/Func1_3.vue')
      },{
        path:'/func1_4',
        component:require('../components/Func1_4.vue')
      },{
        path:'/func1_5',
        component:require('../components/Func1_5.vue')
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
    }
  ]
})
