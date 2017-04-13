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
// import components
import LteAlert from './Alert.vue'

const components = {
  LteAlert: require('./Alert.vue'),
  LteAppBtn: require('./AppButton.vue'),
  LteBox: require('./Box.vue'),
  LteBrand: require('./Brand.vue'),
  LteBtn: require('./Button.vue'),
  LteBtnGroup: require('./ButtonGroup.vue'),
  LteBtnItem: require('./ButtonItem.vue'),
  LteCallout: require('./Callout.vue'),
  LteCarousel: require('./Carousel.vue'),
  LteCheck: require('./CheckBox.vue'),
  LteCol: require('./Column.vue'),
  LteCombo: require('./ComboBox.vue'),
  LteContainer: require('./Container.vue'),
  LteCustomMenu: require('./CustomMenu.vue'),
  LteDivider: require('./Divider.vue'),
  LteDropBtn: require('./DropdownButton.vue'),
  LteFooter: require('./Footer.vue'),
  LteHeader: require('./Header.vue'),
  LteHeaderItem: require('./HeaderItem.vue'),
  LteLogo: require('./HeaderLogo.vue'),
  LteIconBtn: require('./IconButton.vue'),
  LteImgBtn: require('./ImageButton.vue'),
  LteInputGroup: require('./InputGroup.vue'),
  LteInputGroupAddon: require('./InputGroupAddon.vue'),
  LteInputGroupBtn: require('./InputGroupButton.vue'),
  LteLinkItem: require('./LinkItem.vue'),
  LteMainContent: require('./MainContent.vue'),
  LteMainSidebar: require('./MainSidebar.vue'),
  LteMenu: require('./Menu.vue'),
  LteNav: require('./Nav.vue'),
  LteNavbar: require('./Navbar.vue'),
  LteNavbarCollapse: require('./NavbarCollapse.vue'),
  LteNavbarForm: require('./NavbarForm.vue'),
  LteNavbarHeader: require('./NavbarHeader.vue'),
  LteNavbarSearch: require('./NavbarSearch.vue'),
  LteNavbarToggle: require('./NavbarToggle.vue'),
  LteProgress: require('./Progress.vue'),
  LteRadio: require('./Radio.vue'),
  LteRouterItem: require('./RouterItem.vue'),
  LteRow: require('./Row.vue'),
  LteSidebarMenu: require('./SidebarMenu.vue'),
  LteSidebarToggle: require('./SidebarToggle.vue'),
  LteSideSearch: require('./SideSearch.vue'),
  LteSplitBtn: require('./SplitButton.vue'),
  LteTextBox: require('./TextBox.vue'),
  LteToggle: require('./ToggleButton.vue'),
  LteTreeView: require('./TreeView.vue'),
  LteUserPanel: require('./UserPanel.vue'),
  LteTest: require('./Test.vue'),
}

export default {
  install: function (Vue) {
    if (Vue._vue_adminlte_installed) {
      return
    }

    Vue._vue_adminlte_installed = true
    // Register components
    for (var component in components) {
      Vue.component(component, components[component])
    }
  },
  get(componentName) {
    return components[componentName]
  },
  register(Vue,componentName){
    if(components[componentName]){
      Vue.component(componentName,components[componentName])
    }
  }
}
