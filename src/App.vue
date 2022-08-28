<template>
  <!-- <div id="nav">
    <Header/>
  </div> -->
  <!-- <div class="main container"> -->
    <router-view/>
    <!-- <Sidebar /> -->
  <!-- </div> -->
</template>
<script>
// import Header from '@/layout/components/Header.vue'
// import Sidebar from '@/layout/components/Sidebar.vue'
export default ({
  name: 'App',
  components: {
    // Header,
    // Sidebar
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
