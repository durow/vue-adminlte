<template>
  <div class="radio">
    <label>
      <input type="radio"
             :class="checkClass"
             :name="group"
             :value="value"
             @change="onChange">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.checked) {
      console.debug('begin')
      var inputList = document.getElementsByClassName('my-radio-checked')
      console.debug(inputList.length)
      if (inputList.length > 0) {
        console.debug('found')
        var el = inputList[inputList.length - 1]
        el.checked = 'checked'
        this.$emit('change', el.value)
      }
    }
  },
  data() {
    return {
      isChecked: undefined
    }
  },
  computed: {
    checkClass() {
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
    }
  },
  methods: {
    onChange(v) {
      this.$emit('change', v.target.value)
    }
  }
}
</script>