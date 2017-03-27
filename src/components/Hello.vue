<template>
  <div>
    这是主页面{{msg}}
    <button v-on:click="testClick">Test</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'hello!'
    }
  },
  methods: {
    testClick: function () {
      this.msg = 'foo'
    }
  }
}
</script>
