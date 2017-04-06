<template>
  <div class="btn-group">
    <button type="button"
            class="btn"
            :class="variantClass">
      <i :class="icon"></i> {{text}}
    </button>
    <button type="button"
            class="btn dropdown-toggle"
            :class="variantClass"
            data-toggle="dropdown">
      <span class="caret"></span>
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu"
        role="menu">
      <slot></slot>
      <li>
        <a v-for="i in menu"
           v-if="i.type=='a'"
           :href="i.href">
          <i :class="i.icon"></i>{{i.text}}
        </a>
      </li>
      <li>
        <router-link v-for="i in menu"
                     v-if="i.type=='router'"
                     :to="i.href">
          <i :class="i.icon"></i>{{i.text}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    variantClass() {
      return `btn-${this.variant}`
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
    menu: {
      type: Object,
      default: undefined
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>