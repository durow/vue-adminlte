<template>
  <li class="dropdown">
    <a href="#"
       class="dropdown-toggle"
       data-toggle="dropdown">
      <i v-if="icon"
         :class="icon"></i> {{text}}
      <span v-if="!hideCaret"
            class="caret"></span></a>
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
  </li>
</template>


<script>
import ButtonItem from './ButtonItem.vue'
import LinkItem from './LinkItem.vue'
import RouterItem from './RouterItem.vue'
import Divider from './Divider.vue'

export default {
  props: {
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
    },
    hideCaret: {
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