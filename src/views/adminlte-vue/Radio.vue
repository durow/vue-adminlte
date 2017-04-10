<template>
  <div>
    <div class="col-md-4">
      <lte-Box header="Example"
               icon="fa fa-info"
               variant="info">
        <lte-radio group="group1"
                   @change="selectedRadio=$event"
                   checked
                   value="green">
          <span style="color:green">green</span>
        </lte-radio>
        <lte-radio group="group1"
                   @change="selectedRadio=$event"
                   value="orange">
          <span style="color:orange">orange</span>
        </lte-radio>
        <lte-radio group="group1"
                   checked
                   @change="selectedRadio=$event"
                   value="red">
          <span style="color:red">red</span>
        </lte-radio>
        <lte-radio group="group1"
                   @change="selectedRadio=$event"
                   value="blue">
          <span style="color:blue">blue</span>
        </lte-radio>
        <lte-radio group="group1"
                   @change="selectedRadio=$event"
                   value="purple">
          <span style="color:purple">purple</span>
        </lte-radio>
        <hr>
        <label :style="textStyle">selected is {{selectedRadio}}</label>
      </lte-Box>
    </div>
  </div>
</template>

<script>
import LteRadio from '../../components/adminlte-vue/Radio.vue'
import LteBox from '../../components/adminlte-vue/Box.vue'
import LteAlert from '../../components/adminlte-vue/Alert.vue'

export default {
  data() {
    return {
      selectedRadio: ''
    }
  },
  computed: {
    textStyle() {
      if (this.selectedRadio) {
        return `color:${this.selectedRadio}`
      }
    }
  },
  components: {
    LteRadio,
    LteBox,
    LteAlert
  }
}
</script>