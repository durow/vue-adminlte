<template>
  <div class="box"
       :class="[variantClass,solidClass]">
    <div class="box-header"
         :class="[borderClass]">
      <h3 class="box-title"><i v-if="icon" :class="icon"></i> {{header}}</h3>
      <div class="box-tools pull-right"
           v-show="expandable">
        <button type="button"
                class="btn btn-box-tool"
                data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
        <button type="button"
                class="btn btn-box-tool"
                v-show="closeable"
                data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
    </div>
    <div class="box-body"
         style="display: block;">
      <slot></slot>
    </div>
    <div class="overlay"
         v-show="loading">
      <i class="fa fa-refresh fa-spin"></i>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    variantClass() {
      return 'box-' + this.variant
    },
    borderClass() {
      return this.border ? 'with-border' : ''
    },
    solidClass() {
      return this.solid ? 'box-solid' : ''
    },
    collapsedClass() {
      return this.collapsed ? 'collapsed-box' : ''
    }
  },
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    header: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: undefined
    },
    border: {
      type: Boolean,
      default: true
    },
    expandable: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    },
    solid: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>