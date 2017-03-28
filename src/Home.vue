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
  </div>
</template>

<script>
import MainHeader from './shared/MainHeader'
import MainSidebar from './shared/MainSidebar'
import ControlSidebar from './shared/ControlSidebar'
import MainFooter from './shared/MainFooter'
import MainContent from './shared/MainContent'

export default {
  name: 'home',
  components: {
    MainHeader,
    MainSidebar,
    ControlSidebar,
    MainFooter,
    MainContent
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