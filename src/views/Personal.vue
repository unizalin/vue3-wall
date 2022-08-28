<template>
  <div>
    <transition name="fade">
      <div v-if="!isSelf">
        <Track />
      </div>
    </transition>
    <Searchbar />
    <Posts  />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
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
    const isSelf = ref('')
    return {
      isSelf
    }
  }
})
</script>
