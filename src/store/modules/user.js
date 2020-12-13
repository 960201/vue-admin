import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { MessageBox, Message } from 'element-ui'
const state = {
  token: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  login({ commit }, params) {
    const { username, password } = params
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then(response => {
          const { data: res } = response
          console.log(res)
          commit('SET_TOKEN', res.token)
          setToken(res.token)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
