<template>
  <div class="sidebar-form">
    <div class="input-group">
      <input type="text"
             name="q"
             v-model="nowText"
             @change="onChange($event)"
             class="form-control"
             :placeholder="placeholder">
      <span class="input-group-btn">
                <button @click="onClick" name="search" id="search-btn" class="btn btn-flat">
                <i class="fa fa-search"></i>
                </button>
                </span>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (this.text) {
      this.nowText = this.text
    }
  },
  data() {
    return {
      nowText: undefined
    }
  },
  props: {
    placeholder: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
    onChange(e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>