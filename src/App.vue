<template>
  <div id="wrapper" class="wrapper" v-bind:class="theme">
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
  import Bus from './bus.js'

  export default {
    name: 'app',
    components: {
      MainHeader,
      MainSidebar,
      ControlSidebar,
      MainFooter,
      MainContent
    },
    data: function () {
      return {
        theme: 'skin-blue'
      }
    },
    methods: {
      skinYellow: function () {
        this.theme = 'skin-yellow'
      }
    },
    created: function () {
      Bus.$on('setTheme', t => {
        this.theme = t
      });
    }
  }

</script>