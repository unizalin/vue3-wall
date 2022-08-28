<template>
  <div class="w-100">
    <Searchbar></Searchbar>
    <Posts></Posts>
  </div>
</template>

<script>
import Searchbar from '@/components/Searchbar.vue'
import Posts from '@/components/Posts.vue'

export default {
  name: 'Home',
  components: {
    Searchbar,
    Posts
  }
}
</script>

<style>
.w-100{
  width: 100%;
}
</style>
