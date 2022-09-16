import { getLocalStorageToken, setLocalStorageToken, removeLocalStorageToken, getLocalStoragePID, setLocalStoragePID } from '@/utils/auth'
import {
  login,
  logout,
  register,
  getProfile,
  getUserProfile,
  updateProfile,
  getLikeList,
  updatePassword,
  getFollowers,
  getFollowing,
  addFollow,
  delFollow
} from "@/api/user"

export const state = {
  token: getLocalStorageToken(),
  userName: '',
  id: getLocalStoragePID(),
  avatar: '',
  roles: [],
  usertInfo : {},
  otherUserProfile: {},
  likelist: [],
  followerList: [],
  followingList: [],
  userProfile: {},
  storeUserProfile: {},
  verifyResponse: { status: '' }
}

export const actions = {
  async login ({ commit }, userInfo) {
    try {
      const { email, password } = userInfo
      const data = await login({ email: email.trim(), password: password })
      commit('SET_TOKEN', data.user.token)
      commit('SET_NAME', data.user.name)
      commit('SET_AVATAR', data.user.avatar)
      commit('SET_ID', data.user.id)
      commit('SET_VERIFY_RESPONSE', data)
      setLocalStorageToken(data.user.token)
      setLocalStoragePID(data.user.id)
    } catch (error) {
      console.log(error)
      commit('SET_VERIFY_RESPONSE', error.response.data)
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeLocalStorageToken()
      return error
    }
  },
  async register({commit},data){
    try {
      const res = await register(data)
      return res
    } catch (error) {
      return error.response.data
    }
  },
  async logout ({ commit }) {
    try {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeLocalStorageToken()
    } catch (error) {
      return error
    }
  },
  resetLocalStorageToken ({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeLocalStorageToken()
      resolve()
    })
  },
  // set default response
  setDefaultResponse ({ commit }) {
    commit('SET_DEFAULT_RESPONSE', { status: '' })
  },
  async updatePassword({commit},data){
    try {
      const res = await updatePassword({
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
      return res
    } catch (error) {
      return error
    }
  },
  async getUserProfile({ commit }){
    try {
      const { data } = await getUserProfile()
      commit('USERPROFILE', data)
      return data
    } catch (error) {
      return error;
    }
  },
  async getStoreUserProfile({ commit }){
    try {
      const { data } = await getUserProfile()
      commit('STOREUSERPROFILE',data)
    } catch (error) {
      return error;
    }
  },
  async updateUserProfile({commit},userProfile){
    const resData = await updateProfile(userProfile)
    return resData
  },
  async getOtherUser({ commit, state, dispatch }, userId) {
    try {
      const { data } = await getProfile(userId.id);
      commit('OTHERUSERPROFILE', {
        name: data.name,
        followers: data.followers,
        following: data.following,
        followersNum: data.followers.length})
    } catch (error) {
      return error;
    }
  },
  async getLikeList({ commit, state }) {
    try {
      const { data } = await getLikeList()
      commit("LIKELIST", data)
    } catch (error) {
      return error
    }
  },
  async getFollowers({commit,state}){
    try {
      const { data } = await getFollowers()
      commit("FOLLOWERLIST", data[0].followers)
    } catch (error) {
      return error
    }
  },
  async getFollowing({commit,state}){
    try {
      const { data } = await getFollowing()
      commit("FOLLOWINGLIST", data.following)
    } catch (error) {
      return error
    }
  },
  async addFolower({commit},userId){
    try {
      const result = await addFollow(userId)
      return result
    } catch (error) {
      return error
    }
  },
  async delFolower({commit},userId){
    try {
      const result = await delFollow(userId)
      return result
    } catch (error) {
      return error
    }
  }
}

export const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, userName) => {
    state.userName = userName
  },
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_VERIFY_RESPONSE: (state, verifyResponse) => {
    state.verifyResponse.status = verifyResponse.status
  },
  SET_DEFAULT_RESPONSE: (state) => {
    state.verifyResponse.status = ''
  },
  USERPROFILE: (state, userProfile) => {
    state.userProfile = userProfile
  },
  STOREUSERPROFILE: (state, storeUserProfile) =>{
    state.storeUserProfile = storeUserProfile
  },
  OTHERUSERPROFILE: (state, otherUserProfile) => {
    state.otherUserProfile = otherUserProfile
  },
  LIKELIST : (state, likelist) => {
    state.likelist = likelist
  },
  FOLLOWERLIST: (state, followerList) => {
    state.followerList = followerList
  },
  FOLLOWINGLIST: (state, followingList) =>{
    state.followingList = followingList
  }
}

export const getters = {
  isLogin: (state) => state.token !== "" && state.token !== null,
  userInfo: (state) => {
    const { userName, id, avatar, roles } = state;
    return {
      userName,
      id,
      avatar,
      roles
    }
  },
  verifyResponse: (state) => {
    const { verifyResponse } = state
    return verifyResponse
  },
  userProfile: (state) => {
    return state.userProfile
  },
  storeUserProfile: (state) =>{
    return state.storeUserProfile
  },
  otherUserProfile: (state) => {
    return state.otherUserProfile
  },
  likeList: (state) => {
    return state.likelist
  },
  followerList: (state) => {
    return state.followerList
  },
  followingList: (state) =>{
    return state.followingList
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
