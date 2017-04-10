<template>
  <div>
    <label>input:</label>
    <lte-textbox placeholder="input text here!"
                 :disabled="inputDisabled"
                 :validation='isEmpty'
                 @change="out=$event"
                 @input="inputing=$event"
                 @validationChange="valResult=$event">
    </lte-textbox>
    <label>input:</label>
    <div>{{inputing}}</div>
    <br>
    <label>change:</label>
    <div>{{out}}</div>
    <br>
    <label>validationResult:</label>
    <div>{{valResult}}</div>
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
      valResult: true,
      inputDisabled: false,
      checkTest: true
    }
  },
  methods: {
    checkChange(v) {
      this.inputDisabled = v
      this.checkTest = v
    },
    btnClick() {
      this.checkTest = !this.checkTest
    },
    isEmpty(v) {
      if (!v || v == '') {
        return {
          success: false,
          text: `text can't empty`,
        }
      } else if (v.length < 10) {
        return {
          success: false,
          status: 'has-warning',
          text: 'text is too short!'
        }
      } else {
        return {
          success: true,
          status: 'has-success',
          text: 'success!'
        }
      }
    }
  },
  components: {
    LteTextbox,
    LteCheckbox,
    LteBtn
  }
}
</script>