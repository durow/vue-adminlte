import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'skin-blue',
    notifyModal: {
      content: '',
      title: ''
    },
    confirmModal: {
      content: '',
      title: '',
      confirmButton: '',
      cancelButton: '',
      result: ''
    }
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme
    },
    setNotifyModal(state, data) {
      state.notifyModal.content = data.content
      state.notifyModal.title = data.title
    },
    setConfirmModal(state, data) {
      state.confirmModal.content = data.content
      state.confirmModal.title = data.title
      state.confirmModal.confirmButton = data.confirmButton
      state.confirmModal.cancelButton = data.cancelButton
    },
    setConfirmResult(state, result) {
      state.confirmModal.result = result
    }
  }
})
