<template>
  <div class="radio">
    <label>
      <input type="radio"
             :class="checkedClass"
             :name="group"
             :value="value"
             :disabled="disabled"
             @change="onChange">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.checked) {
      var inputList = document.getElementsByClassName('my-radio-checked')
      if (inputList.length > 0) {
        var el = inputList[inputList.length - 1]
        el.checked = 'checked'
        this.$emit('change', el.value)
      }
    }
  },
  computed: {
    checkedClass() {
      return this.checked ? 'my-radio-checked' : ''
    }
  },
  props: {
    group: {
      type: String,
      default: undefined
    },
    value: {
      type: String,
      default: undefined
    },
    checked: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange(v) {
      this.$emit('change', v.target.value)
    }
  }
}
</script>