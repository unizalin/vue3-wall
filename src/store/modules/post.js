import {
  getPosts,
  getUserPosts,
  getOnePost,
  createPost,
  addPostComment,
  updatePost,
  updateLikes,
  delLikes,
  deletePost,
} from '@/api/post';


export const state = {
  // 公開
  publicPosts: [],
  // 私人(個人)
  userPosts: [],
}

export const actions = {
  async initUserPosts ({commit}){
    commit('USERPOSTS', [])
  },
  async publichPosts ({ commit, state, dispatch }, filters = {}) {
    const posts = await getPosts(filters)
    commit('PUBLICPOSTS', posts.data)
  }, 
  async getUserPosts({ commit, state, dispatch },userId){
    const posts = await getUserPosts(userId)
    commit('USERPOSTS', posts.data)
  },
  async addPost({ commit, dispatch }, data = {}) {
    try {
      const result = await createPost(data);
      return result;
    } catch (error) {
      return error;
    } 
  },
  async getOnePost({ commit, state, dispatch },{postId}){
    try {
      const result = await getOnePost(postId)
      return result
    } catch (error) {
      return error
    }
  },
  async updateLikes({commit},postId){
    try {
      const result = await updateLikes(postId)
      return result
    } catch (error) {
      return error
    }
  },
  async delLikes({commit},postId){
    try {
      const result = await delLikes(postId)
      return result
    } catch (error) {
      return error
    }
  },
  async addComment ({commit},{ postId,  commentData}){
    try {
      const result = await addPostComment(postId,  {comment:commentData})
      return result
    } catch (error) {
      return error
    }
  }
}

export const mutations = {
  PUBLICPOSTS : (state, posts) => {
    state.publicPosts = posts
  },
  USERPOSTS : (state, posts) => {
    state.userPosts = posts
  }
}

export const getters = {
  publicPosts : (state) => state.publicPosts,
  userPosts: (state) => state.userPosts
}


export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}

