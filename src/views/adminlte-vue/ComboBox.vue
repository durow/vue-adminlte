<template>
  <div>
    <lte-row>
      <div class="col-md-6">
        <lte-box header="ComboBox"
                 variant="info">
          <lte-combo label="please select:"
                     :labelWidth="2"
                     :selectedIndex="1"
                     @change="selectionChange"
                     :items="items">
          </lte-combo>
          <hr>
          <div>you select: <b>{{selectedItem}}</b> , index is: <b>{{selectedIndex}}</b></div>
        </lte-box>
      </div>
      <div class="col-md-6">
        <lte-box header="MultipleComboBox"
                 variant="primary">
          <lte-combo label="please select:"
                     :labelWidth="2"
                     multiple
                     :selectedItems="['item 1','item 3']"
                     @change="selectedItems=$event"
                     :items="items">
          </lte-combo>
          <hr>
          <div>you select: <b>{{selectedItems}}</b> </div>
        </lte-box>
      </div>
    </lte-row>
    <lte-row>
      <lte-box header="test">
        <lte-test>gogogo</lte-test>
      </lte-box>
    </lte-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'],
      selectedItem: '',
      selectedIndex: -1,
      selectedItems: []
    }
  },
  methods: {
    selectionChange(v, i) {
      this.selectedItem = v
      this.selectedIndex = i
    }
  }
}
</script>