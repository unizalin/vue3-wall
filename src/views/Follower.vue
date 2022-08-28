<template>
  <div>
    <div class="block-title">
      追蹤名單
    </div>
    <!-- <Concerned :followers="followers" /> -->
    <Concerned/>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Concerned from '@/components/Concerned'

export default defineComponent({
  name: 'Follower',
  components: {
    Concerned
  },
  setup () {
  }
})
</script>
