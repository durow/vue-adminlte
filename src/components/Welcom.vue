<template>
  <div>
    <h1>Welcom!</h1>
    <h3>{{counter}}</h3>
    <button v-on:click="add"> 赞 </button>
    <button v-on:click="dec"> 踩 </button>
  </div>
</template>

<script>
export default {
  name: 'welcom',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add() {
      this.counter++
    },
    dec(){
      if(this.counter == 0){
        return
      }
      this.counter--
    }
  }
}
</script>
