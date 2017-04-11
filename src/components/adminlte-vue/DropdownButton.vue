<template>
  <div class="btn-group">
    <button class="btn dropdown-toggle"
            :class="[variantClass,flatClass,sizeClass]"
            :disabled="disabled"
            data-toggle="dropdown"
            aria-expanded="false">
      <i v-if="icon"
         :class="icon"></i> {{text}}
      <span class="fa fa-caret-down"></span></button>
    <ul class="dropdown-menu"
        role="menu">
      <template v-for="item in items">
        <LinkItem v-if="item.type=='a'"
                  :href="item.href?item.href:'#'"
                  :icon="item.icon?item.icon:''"> {{item.text}}</LinkItem>
        <RouterItem v-if="!item.type || item.type=='r'"
                    :to="item.to?item.to:'#'"
                    :icon="item.icon?item.icon:''"> {{item.text}}</RouterItem>
        <ButtonItem v-if="item.type=='b'"
                    @click="item.click"
                    :icon="item.icon?item.icon:''"> {{item.text}}</ButtonItem>
        <Divider v-if="item.type=='d'"></Divider>
      </template>
    </ul>
  </div>
</template>

<script>
import ButtonItem from './ButtonItem.vue'
import LinkItem from './LinkItem.vue'
import RouterItem from './RouterItem.vue'
import Divider from './Divider.vue'

export default {
  computed: {
    variantClass() {
      return `btn-${this.variant}`
    },
    flatClass() {
      return this.flat ? 'btn-flat' : ''
    },
    sizeClass() {
      return this.size ? `btn-${this.size}` : ''
    }
  },
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    text: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    },
    flat: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ButtonItem,
    LinkItem,
    RouterItem,
    Divider
  }
}
</script>