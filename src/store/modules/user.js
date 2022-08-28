export const state = {
  userName: ''
}

export const actions = {
  login ({ commit }, userInfo) {
    const { email, password } = userInfo
    console.log(email, password)
  }
}

export const mutations = {

}

export const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
