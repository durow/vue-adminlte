<template>
  <div class="collapse navbar-collapse"
       :id="id">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: undefined
    }
  }
}
</script>