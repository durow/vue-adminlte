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
  },{
    path: 'AdminLte/Button',
    component: require('../views/adminlte-vue/Button.vue')
  },{
    path: 'AdminLte/Carousel',
    component: require('../views/adminlte-vue/Carousel.vue')
  },{
    path: 'AdminLte/TextBox',
    component: require('../views/adminlte-vue/TextBox.vue')
  },{
    path: 'AdminLte/Radio',
    component: require('../views/adminlte-vue/Radio.vue')
  },{
    path: 'AdminLte/ComboBox',
    component: require('../views/adminlte-vue/ComboBox.vue')
  },{
    path: 'AdminLte/Nav',
    component: require('../views/adminlte-vue/Nav.vue')
  }]
}
