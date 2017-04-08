<template>
  <div>
    <div v-if="horizontal"
         class="form-horizontal">
      <div class="form-group"
           :class="validationStatus">
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
         :class="validationStatus"
         v-if="!horizontal">
      <label v-if="label"
             for="mytextboxh">{{label}}</label>
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
</template>

<script>
export default {
  created(){
    this.nowText = this.text
  },
  data() {
    return {
      validationStatus: '',
      errorText: '',
      showError: false,
      nowText:''
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
    validationClass() {
      return this.validation ? `has-${this.validation}` : ''
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
        if (result.success) {
          this.showError = false
        } else {
          this.errorText = result.text
          this.showError = true
        }
      }
      this.$emit('change', v)
      this.validationStatus = result.status
    },
    onInput(v) {
      this.$emit('input', v)
    }
  }
}
</script>