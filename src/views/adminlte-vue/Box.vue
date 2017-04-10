<template>
  <div>
    <div>
      <div class="col-md-4">
        <lte-box header="This is Header"
                 variant="primary"
                 expandable
                 solid>This is content</lte-box>
        <lte-box header="This is Header"
                 variant="primary"
                 expandable>This is content</lte-box>
      </div>
      <div class="col-md-4">
        <lte-box header="This is Header"
                 variant="warning"
                 closeable
                 solid>This is content</lte-box>
        <lte-box header="This is Header"
                 variant="info"
                 expandable
                 loading>This is content</lte-box>
      </div>
      <div class="col-md-4">
        <lte-box header="This is Header"
                 variant="success"
                 expandable
                 closeable
                 solid>This is content</lte-box>
        <lte-box header="This is Header"
                 variant="danger"
                 expandable
                 closeable
                 loading
                 solid>This is content</lte-box>
      </div>
    </div>
  </div>
</template>

<script>
import LteBox from '../../components/adminlte-vue/Box.vue'

export default {
  components: {
    LteBox
  }
}
</script>