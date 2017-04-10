<template>
  <div class="form-horizontal">
    <div class="form-group"
         :class="validationStatus">
      <label v-if="label"
             for="mytextboxv"
             class="control-label"
             :class="labelWidthClass">{{label}}</label>
      <div :class="textWidthClass">
        <input type="text"
               v-model="nowText"
               :disabled="disabled"
               class="form-control"
               id="mytextboxh"
               :placeholder="placeholder"
               @change="onChange($event.target.value)"
               @input="onInput($event.target.value)"
               @focus="$emit('focus')"
               @blur="emit('blur')">
        <span v-show="showError"
              class="help-block">{{errorText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.nowText = this.text
  },
  data() {
    return {
      validationStatus: '',
      validationResult: true,
      errorText: '',
      nowText: ''
    }
  },
  watch: {
    text(v) {
      this.nowText = v
    }
  },
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
    },
    showError() {
      return this.errorText && this.errorText != ''
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
    },
    validation: {
      type: Function,
      default: undefined
    }
  },
  methods: {
    onChange(v) {
      if (this.validation) {
        var result = this.validation(v)
        this.errorText = result.text
        if (result.success) {
          this.validationStatus = result.status ? result.status : ''
        } else {
          this.validationStatus = result.status ? result.status : 'has-error'
        }
        if (this.validationResult != result.success) {
          this.validationResult = result.success
          this.$emit('validationChange', this.validationResult)
        }
      }
      this.$emit('change', v)
    },
    onInput(v) {
      this.$emit('input', v)
    }
  }
}
</script>