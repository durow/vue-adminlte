<template>
  <div id="carousel-generic"
       class="carousel slide"
       data-ride="carousel"
       :data-interval="interval">
    <ol class="carousel-indicators">
      <li v-for="(item,index) in items"
          data-target="#carousel-generic"
          :data-slide-to="index"
          :class="index==0?'active':''">
      </li>
    </ol>
    <div class="carousel-inner">
      <div v-for="(item,index) in items"
           class="item"
           :class="index==0?'active':''">
        <img :src="item.src"
             :alt="item.alt?item.alt:''">
  
        <div class="carousel-caption">
          {{item.caption}}
        </div>
      </div>
    </div>
    <a class="left carousel-control"
       href="#carousel-generic"
       data-slide="prev">
      <span class="fa fa-angle-left"></span>
    </a>
    <a class="right carousel-control"
       href="#carousel-generic"
       data-slide="next">
      <span class="fa fa-angle-right"></span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    interval: {
      type: Number,
      default: 5000
    },
    items: {
      type: Array,
      default: undefined
    }
  }
}
</script>