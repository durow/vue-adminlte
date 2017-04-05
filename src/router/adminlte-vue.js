export default {
  path: '/',
  name: 'Home',
  component: require('../Home.vue'),
  children: [{
    path: 'AdminLte/Alert',
    component: require('../views/adminlte-vue/Alert.vue')
  },{
    path: 'AdminLte/Callout',
    component: require('../views/adminlte-vue/Callout.vue')
  },{
    path: 'AdminLte/Progress',
    component: require('../views/adminlte-vue/Progress.vue')
  },{
    path: 'AdminLte/Box',
    component: require('../views/adminlte-vue/Box.vue')
  }]
}
