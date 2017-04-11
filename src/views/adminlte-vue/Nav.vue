<template>
  <div>
    <lte-box header="Top Navbar"
             variant="primary">
      <div class="layout-top-nav">
        <lte-header>
          <lte-nav>
            <lte-container :fluid="fluid">
              <div class="navbar-header">
                <lte-brand icon="fa fa-bank"><b>Navbar</b></lte-brand>
                <lte-nav-toggle target="#my-collapse"></lte-nav-toggle>
              </div>
              <lte-nav-collapse id="my-collapse">
                <lte-navbar>
                  <lte-router>Home</lte-router>
                  <lte-menu text="Category">
                    <lte-router>Category 1</lte-router>
                    <lte-router>Category 2</lte-router>
                    <lte-divider></lte-divider>
                    <lte-router>Category 3</lte-router>
                    <lte-router>Category 4</lte-router>
                    <lte-router>Category 5</lte-router>
                  </lte-menu>
                  <lte-router>Help</lte-router>
                  <lte-router>About</lte-router>
                </lte-navbar>
                <lte-nav-form>
                  <lte-nav-search placeholder="搜索"></lte-nav-search>
                </lte-nav-form>
                <lte-navbar right>
                  <lte-btn-item @click="fluid=!fluid"
                                icon="fa fa-arrows-alt"></lte-btn-item>
                  <lte-menu text="Link">
                    <lte-router>Link 1</lte-router>
                    <lte-router>Link 2</lte-router>
                    <lte-router>Link 3</lte-router>
                    <lte-router>Link 4</lte-router>
                  </lte-menu>
                  <lte-router>User</lte-router>
                </lte-navbar>
              </lte-nav-collapse>
            </lte-container>
          </lte-nav>
        </lte-header>
      </div>
    </lte-box>
  </div>
</template>

<script>
import LteNav from '../../components/adminlte-vue/Nav.vue'
import LteNavbar from '../../components/adminlte-vue/Navbar.vue'
import LteMenu from '../../components/adminlte-vue/Menu.vue'
import LteCol from '../../components/adminlte-vue/Column.vue'
import LteBox from '../../components/adminlte-vue/Box.vue'
import LteRouter from '../../components/adminlte-vue/RouterItem.vue'
import LteLink from '../../components/adminlte-vue/LinkItem.vue'
import LteDivider from '../../components/adminlte-vue/Divider.vue'
import LteHeader from '../../components/adminlte-vue/Header.vue'
import LteBrand from '../../components/adminlte-vue/Brand.vue'
import LteContainer from '../../components/adminlte-vue/Container.vue'
import LteNavToggle from '../../components/adminlte-vue/NavbarToggle.vue'
import LteNavCollapse from '../../components/adminlte-vue/NavbarCollapse.vue'
import LteNavForm from '../../components/adminlte-vue/NavbarForm.vue'
import LteNavSearch from '../../components/adminlte-vue/NavbarSearch.vue'
import LteBtnItem from '../../components/adminlte-vue/ButtonItem.vue'

export default {
  data() {
    return {
      fluid: true
    }
  },
  components: {
    LteMenu,
    LteNav,
    LteNavbar,
    LteCol,
    LteRouter,
    LteLink,
    LteBox,
    LteCol,
    LteDivider,
    LteHeader,
    LteBrand,
    LteNavToggle,
    LteNavCollapse,
    LteNavForm,
    LteContainer,
    LteNavSearch,
    LteBtnItem
  }
}
</script>