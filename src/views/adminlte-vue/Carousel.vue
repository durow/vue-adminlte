<template>
  <div class="col-md-6 col-md-offset-3">
    <lte-carousel :items="pics" :interval="2000">
    </lte-carousel>
  </div>
</template>

<script>
import LteCarousel from '../../components/adminlte-vue/Carousel.vue'
import LteBox from '../../components/adminlte-vue/Box.vue'

export default {
  data() {
    return {
      pics: [{
        src: 'http://placehold.it/900x500/39CCCC/ffffff&amp;text=I+Love+Bootstrap',
        alt: 'First slide',
        caption: 'First slide'
      }, {
        src: 'http://placehold.it/900x500/3c8dbc/ffffff&amp;text=I+Love+Bootstrap',
        alt: 'Second slide',
        caption: 'Second slide'
      }, {
        src: 'http://placehold.it/900x500/f39c12/ffffff&amp;text=I+Love+Bootstrap',
        alt: 'Third slide',
        caption: 'Third slide'
      }]
    }
  },
  components: {
    LteCarousel,
    LteBox
  }
}
</script>