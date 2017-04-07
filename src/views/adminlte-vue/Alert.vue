<template>
  <div>
    <lte-alert v-for="a in this.alerts"
               :icon="a.icon"
               :header="a.header"
               :variant="a.variant"
               :bg="a.bg"
               :dismissible="a.dismissible">{{a.content}}</lte-alert>
  </div>
</template>

<script>
import LteAlert from '../../components/adminlte-vue/Alert.vue'

export default {
  data() {
    return {
      alerts: [{
        content: `<lte-alert>...</lte-alert>`
      }, {
        header: 'Header!',
        content: `<lte-alert header="Header!">...</lte-alert>`
      }, {
        icon: 'fa fa-cube',
        header: 'Header with icon!',
        content: `<lte-alert icon="fa fa-cube" header="Header with icon!">...</lte-alert>`
      }, {
        icon: 'fa fa-rss',
        header: 'Set variant success',
        variant: 'success',
        dismissible: true,
        content: `<lte-alert icon="fa fa-rss" header="Set variant success!" variant="success">...</lte-alert>`
      }, {
        icon: '',
        header: '',
        variant: 'warning',
        dismissible: true,
        content: `<lte-alert icon="fa fa-ban" header="Danger Alert!" bg="red" dismissible>...</lte-alert>`
      }, {
        icon: '',
        header: '',
        variant: 'info',
        dismissible: true,
        content: `<lte-alert icon="fa fa-ban" header="Danger Alert!" bg="red" dismissible>...</lte-alert>`
      }]
    }
  },
  components: {
    LteAlert
  }
}
</script>