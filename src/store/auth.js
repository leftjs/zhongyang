/**
 * Created by jason on 2017/3/9.
 */
import store from './index'


export const state = {
  token: {
    token: null,
    iss: null,
    exp: null,
  },
  profile: {}
}

export const actions = {
  login() {
  },
  logout({commit}) {
    commit('unsetToken')
    commit('unsetProfile')
  },
  resume({dispatch, commit}) {

  }
}

export const getters = {
  isAuthenticated: (state) => (
    !!state.token.token
  )

}

export const mutations = {
  setToken(state, token) {
    console.log('setToken')
    state.token = token
    localStorage.setItem('token', JSON.stringify(authResult))
  },
  setProfile(state, profile) {
    state.profile = profile
    localStorage.setItem('profile', JSON.stringify(profile))
  },
  unsetToken(state) {
    state.token = {}
    localStorage.removeItem('token')
  },
  unsetProfile(state, profile) {
    state.profile = {}
    localStorage.removeItem('profile')
  }
}

export const namespaced = true
