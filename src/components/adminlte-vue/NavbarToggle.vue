<template>
  <button type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          :data-target="target">
    <i class="fa fa-bars"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa fa-bars'
    },
    target: {
      type: String,
      default: undefined
    }
  }
}
</script>