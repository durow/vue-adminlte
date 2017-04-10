<template>
  <div class="checkbox">
    <label>
      <input type="checkbox"
             v-model="isChecked"
             :disabled="disabled">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  created() {
    this.isChecked = this.checked
  },
  data() {
    return {
      isChecked: undefined
    }
  },
  watch: {
    checked(v) {
      this.isChecked = v
    },
    isChecked(v) {
      this.$emit('change', v)
    }
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>