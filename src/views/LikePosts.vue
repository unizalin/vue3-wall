<template>
  <div>
    <div class="block-title">
      我按讚的貼文
    </div>
    <!-- <LovePost :likePosts="likePosts"/> -->
    <LovePost />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LovePost from '@/components/LovePost'

export default defineComponent({
  name: 'LikePosts',
  components: {
    LovePost
  },
  setup () {
  }
})
</script>
