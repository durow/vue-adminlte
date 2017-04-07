<template>
  <div>
    <div v-if="horizontal"
         class="form-horizontal">
      <div class="form-group">
        <label v-if="label"
               for="mytextboxv"
               class="control-label"
               :class="labelWidthClass">{{label}}</label>
        <div :class="textWidthClass">
          <input type="text"
                 :value="text"
                 class="form-control"
                 id="mytextboxv"
                 :disabled="disabled"
                 :placeholder="placeholder"
                 @change="onChange($event.target.value)"
                 @input="onInput($event.target.value)"
                 @focus="$emit('focus')"
                 @blur="emit('blur')">
        </div>
      </div>
    </div>
    <div class="form-group"
         v-if="!horizontal">
      <label v-if="label"
             for="mytextboxh">{{label}}</label>
      <input type="text"
             :value="text"
             :disabled="disabled"
             class="form-control"
             id="mytextboxh"
             :placeholder="placeholder"
             @change="onChange($event.target.value)"
             @input="onInput($event.target.value)"
             @focus="$emit('focus')"
             @blur="emit('blur')">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    labelWidthClass() {
      return this.labelWidth ? `col-sm-${this.labelWidth}` : 'col-sm-1'
    },
    textWidthClass() {
      if (this.textWidth) {
        return `col-sm-${this.textWidth}`
      } else if (this.labelWidth) {
        return `col-sm-${12 - this.labelWidth}`
      } else {
        return 'col-sm-11'
      }
    }
  },
  props: {
    label: {
      type: String,
      default: null
    },
    text: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: Number,
      default: undefined
    },
    textWidth: {
      type: Number,
      default: undefined
    }
  },
  methods: {
    onChange(v) {
      this.$emit('change', v)
    },
    onInput(v) {
      this.$emit('input', v)
    }
  }
}
</script>