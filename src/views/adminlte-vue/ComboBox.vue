<template>
  <div>
    <div class="col-md-6">
      <lte-box header="ComboBox"
               variant="info">
        <lte-combo label="please select:"
                   :labelWidth="2"
                   :selectedIndex="1"
                   @change="selectionChange"
                   multiple
                   :items="items">
        </lte-combo>
        <hr>
        <div>you select: <b>{{selectedItem}}</b> , index is: <b>{{selectedIndex}}</b></div>
      </lte-box>
    </div>
  </div>
</template>

<script>
import LteCombo from '../../components/adminlte-vue/ComboBox.vue'
import LteBox from '../../components/adminlte-vue/Box.vue'

export default {
  data() {
    return {
      items: ['item 1', 'item 2', 'item 3','item 4','item 5','item 6'],
      selectedItem: '',
      selectedIndex: -1
    }
  },
  methods: {
    selectionChange(v, i) {
      this.selectedItem = v
      this.selectedIndex = i
    }
  },
  components: {
    LteCombo,
    LteBox
  }
}
</script>