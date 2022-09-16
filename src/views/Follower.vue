<template>
  <div>
    <div class="block-title">
      追蹤名單
    </div>
    <Concerned :followers="storeFollowing" />
  </div>
</template>
<script>
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import Concerned from '@/components/Concerned'

export default defineComponent({
  name: 'Follower',
  components: {
    Concerned
  },
  setup () {
    const store = useStore()
    const storeFollowing = computed( () => store.getters['user/followingList'])
    onMounted(async() => {
      store.dispatch('user/getFollowing')
    })
    return {
      store,
      storeFollowing
    }
  }
})
</script>
