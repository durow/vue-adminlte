<template>
  <div class="btn-group">
    <button type="button"
            class="btn"
            :class="[variantClass,flatClass]"
            @click="onClick">
      <i v-if="icon"
         :class="icon"></i> {{text}}
    </button>
    <button type="button"
            class="btn dropdown-toggle"
            :class="[variantClass,flatClass]"
            data-toggle="dropdown">
      <span class="caret"></span>
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu"
        role="menu">
      <slot></slot>
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
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
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