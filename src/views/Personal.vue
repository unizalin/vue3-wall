<template>
  <div>
    <transition name="fade">
      <div v-if="!isSelf">
        <Track />
      </div>
    </transition>
    <Searchbar
      v-if="!isPostId"
      :sort="sortby"
      @sort="sort"
      @search="search"
    ></Searchbar>
    <Posts  :posts="postsList" />
  </div>
</template>
<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
import Track from '@/components/Track.vue'
import Searchbar from '@/components/Searchbar.vue'
import Posts from '@/components/Posts.vue'

export default defineComponent({
  name: 'Personal',
  components: {
    Track,
    Searchbar,
    Posts
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const paramsId = route.params?.id
    const postsList = ref([])
    const sortby = ref('desc')
    const selfId = computed(() => {
      return store.getters['user/userProfile']?._id
    })
    const isSelf = ref('')
    const isPostId = ref('')
    onMounted(async () => {
      const { postId } = route.query
      if (postId) {
        const postData = await store.dispatch('post/getOnePost', { postId })
        postsList.value.push(postData.data)
        isPostId.value = true
      } else {
        await store.dispatch('post/getUserPosts', { userId: paramsId })
        postsList.value.push(...storePost.value)
        isPostId.value = false
      }
      isSelf.value = paramsId == selfId.value
    })

    const storePost = computed(() => {
      const data = store.getters['post/userPosts']
      return data
    })

    const sort = async (sortType) => {
      postsList.value.length = 0
      sortby.value = sortType
      await store.dispatch('post/getUserPosts', { userId: paramsId, timeSort: sortType })
      postsList.value.push(...storePost.value)
    }

    const search = async (serach) => {
      postsList.value.length = 0
      await store.dispatch('post/getUserPosts', { userId: paramsId, timeSort: serach.sortType, keyword: serach.keyword })
      postsList.value.push(...storePost.value)
    }

    onBeforeRouteUpdate(async (to, from) => {
      postsList.value.length = 0
      isPostId.value = false
      const newId = to.params.id
      isSelf.value = selfId.value == newId
      await store.dispatch('post/initUserPosts')
      await store.dispatch('post/getUserPosts', { userId: newId })
      postsList.value.push(...storePost.value)
    })

    onBeforeRouteLeave((to, from) => {
      store.dispatch('post/initUserPosts')
    })
    return {
      isSelf,
      selfId,
      isPostId,
      paramsId,
      storePost,
      postsList,
      sortby,
      sort,
      search
    }
  }
})
</script>
