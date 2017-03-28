import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'skin-blue'
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme
    }
  }
})
