<template>
  <div>
    <lte-textbox label="Label:"
                 placeholder="input text here!"
                 :disabled="inputDisabled"
                 @change="onChange($event)"
                 @input="onInput($event)">
    </lte-textbox>
    <label>input:</label>
    <div>{{inputing}}</div>
    <br>
    <label>change:</label>
    <div>{{out}}</div>
    <br>
    <div>
      <lte-checkbox :checked="checkTest"
                    @change="checkChange">disabled</lte-checkbox>
      <lte-btn @click="btnClick">{{checkTest}}</lte-btn>
    </div>
  </div>
</template>

<script>
import LteTextbox from '../../components/adminlte-vue/TextBox.vue'
import LteCheckbox from '../../components/adminlte-vue/CheckBox.vue'
import LteBtn from '../../components/adminlte-vue/Button.vue'

export default {
  data() {
    return {
      out: '',
      inputing: '',
      inputDisabled: false,
      checkTest: true
    }
  },
  methods: {
    onChange(v) {
      this.out = v
    },
    onInput(v) {
      this.inputing = v
    },
    checkChange(v) {
      this.inputDisabled = v
      this.checkTest = v
    },
    btnClick() {
      this.checkTest = !this.checkTest
    }
  },
  components: {
    LteTextbox,
    LteCheckbox,
    LteBtn
  }
}
</script>