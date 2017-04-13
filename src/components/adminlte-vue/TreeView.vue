<template>
  <li class="treeview">
    <a href="#">
      <i :class="icon"></i>
      <span>{{text}}</span>
      <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i><small v-if="badgeText" class="label" :class="[badgeBgClass]">{{badgeText}}</small></span>
    </a>
    <ul class="treeview-menu">
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
  computed: {
    badgeBgClass() {
      return this.badgeBg ? `bg-${this.badgeBg}` : ''
    }
  },
  props: {
    text: {
      type: String,
      default: undefined
    },
    items: {
      type: Array,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    },
    badgeText: {
      type: String,
      default: undefined
    },
    badgeBg: {
      type: String,
      default: 'primary'
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