<template>
  <div class="form-horizontal">
    <div class="form-group">
      <label v-if="label"
             for="mycombobox"
             class="control-label"
             :class="labelWidthClass">{{label}}</label>
      <div :class="comboWidthClass">
        <select id="mycombobox"
                :multiple="multiple"
                :disabled="disabled"
                v-model="selection"
                class="form-control">
          <option v-for="item in items">{{item}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (!this.multiple) {
      this.selection = this.selectedItem ? this.selectedItem : null
      this.selection = this.selectedIndex ? this.items[this.selectedIndex] : -1
    } else {
      this.selection = this.selectedItems ? this.selectedItems : []
    }
  },
  data() {
    return {
      selection: undefined
    }
  },
  watch: {
    selection(v) {
      if (this.multiple) {
        this.$emit('change', v)
      } else {
        this.$emit('change', v, this.items.indexOf(v))
      }
    },
    selectedItem(v) {
      this.selection = v
    },
    selectedIndex(v) {
      this.selection = this.items[v]
    }
  },
  computed: {
    labelWidthClass() {
      return this.labelWidth ? `col-sm-${this.labelWidth}` : 'col-sm-1'
    },
    comboWidthClass() {
      if (this.comboWidth) {
        return `col-sm-${this.comboWidth}`
      } else if (this.labelWidth) {
        return `col-sm-${12 - this.labelWidth}`
      } else {
        return 'col-sm-11'
      }
    },
  },
  methods: {
  },
  props: {
    label: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: undefined
    },
    selectedItem: {
      type: String,
      default: undefined
    },
    selectedItems: {
      type: Array,
      default: undefined
    },
    selectedIndex: {
      type: Number,
      default: -1
    },
    labelWidth: {
      type: Number,
      default: undefined
    },
    comboWidth: {
      type: Number,
      default: undefined
    }
  }
}
</script>