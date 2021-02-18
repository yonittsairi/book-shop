import Vue from 'vue'
import Vuex from 'vuex'

import bookModule from './modules/book.module'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    user: {
      name: 'mulu',
      address: 'natnaye'
    },
    userMsg: ''
  },
  getters: {
    user(state) {
      return state.user.name
    },
    userMsg(state) {
      return state.userMsg
    }
  },
  mutations: {
    setUserName(state, { userName }) {
      state.user.name = userName
    },
    setMsg(state, { msgStr }) {
      state.userMsg = msgStr;
    },
  },
  actions: {
    setMsg({ commit }, { msgStr }) {
      commit({ type: 'setMsg', msgStr })
      setTimeout(() => {
        commit({ type: 'setMsg', msgStr: '' })
      }, 3000);
    },
  },
  modules: {
    bookModule
  }
})
