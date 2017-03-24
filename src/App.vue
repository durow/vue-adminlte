<template>
  <div class="wrapper">
    <MainHeader></MainHeader>
    <MainSidebar></MainSidebar>
    <ControlSidebar></ControlSidebar>
    <div class="control-sidebar-bg"></div>
    <div class="content-wrapper">
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from './shared/MainHeader'
import MainSidebar from './shared/MainSidebar'
import ControlSidebar from './shared/ControlSidebar'
import MainFooter from './shared/MainFooter'

export default {
  name: 'app',
  components: {
    MainHeader,
    MainSidebar,
    ControlSidebar,
    MainFooter
  }
}
</script>
