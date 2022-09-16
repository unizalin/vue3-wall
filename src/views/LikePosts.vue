<template>
  <div>
    <div class="block-title">
      我按讚的貼文
    </div>
    <LovePost :likePosts="storeLikeList"/>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import LovePost from '@/components/LovePost'

export default defineComponent({
  name: 'LikePosts',
  components: {
    LovePost
  },
  setup () {
    const store = useStore ()
    const storeLikeList = computed(()=> store.getters['user/likeList'])
    onMounted( async () => {
      await store.dispatch('user/getLikeList')
    })

    return {
      store,
      storeLikeList
    }
  }
})
</script>
