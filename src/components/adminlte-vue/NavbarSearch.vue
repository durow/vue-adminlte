<template>
  <div class="form-group">
    <input type="text"
           class="form-control"
           id="navbar-search-input"
           :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: undefined
    }
  }
}
</script>