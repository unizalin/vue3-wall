<template>
  <div class="w-100">
    <Searchbar 
      :sort="sortby"
      @sort="sort"
      @search="search"
    ></Searchbar>
    <Posts :posts="storePost"></Posts>
  </div>
</template>

<script>
import Searchbar from '@/components/Searchbar.vue'
import Posts from '@/components/Posts.vue'
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
export default {
  name: 'Home',
  components: {
    Searchbar,
    Posts
  },
  setup () {
    const store = useStore()
    const sortby = ref('desc')
    onMounted( async() => {
      await store.dispatch('post/publichPosts')
    })
    const storePost = computed(() => store.getters['post/publicPosts']);
    const sort = async (sortType) => {
      sortby.value = sortType
      await store.dispatch('post/publichPosts',{timeSort:sortType})
    };

    const search = async (serach) => {
      await store.dispatch('post/publichPosts',serach)
    };
    return {
      store,
      storePost,
      sort,
      search,
      sortby
    }
  }
}
</script>

<style>
.w-100{
  width: 100%;
}
</style>
