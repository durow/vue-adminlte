<template>
  <div id="wrapper"
       class="wrapper"
       v-bind:class="theme">
    <MainHeader></MainHeader>
    <MainSidebar></MainSidebar>
    <ControlSidebar></ControlSidebar>
    <div class="control-sidebar-bg"></div>
    <MainContent></MainContent>
    <MainFooter></MainFooter>
    <Modals></Modals>
  </div>
</template>

<script>
import MainHeader from './shared/MainHeader/Index.vue'
import MainSidebar from './shared/MainSidebar/Index.vue'
import ControlSidebar from './shared/ControlSidebar/Index.vue'
import MainFooter from './shared/MainFooter/Index.vue'
import MainContent from './shared/MainContent/Index.vue'
import Modals from './modal/Index.vue'

export default {
  name: 'home',
  components: {
    MainHeader,
    MainSidebar,
    ControlSidebar,
    MainFooter,
    MainContent,
    Modals
  },
  data: function () {
    return {
    }
  },
  computed: {
    theme() {
      return this.$store.state.theme
    }
  }
}

</script>