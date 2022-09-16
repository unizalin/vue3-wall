<template>
  <router-view v-if="isRouterAlive" />
</template>
<script>
import { defineComponent, ref, nextTick, provide, onBeforeMount } from 'vue';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'App',
  setup(){
    const router = useRouter();
    const store = useStore(); 
    onBeforeMount(() => {
        if(!store.getters['user/isLogin']){
          router.push({ path: '/login' });
        }
    })

    onBeforeRouteUpdate(async(to, from) => {
      if(!store.getters['user/isLogin']){
          router.push({ path: '/login' });
        }
    });
    // 局部组件刷新
    const isRouterAlive = ref(true);
    const reload = () => {
      isRouterAlive.value = false;
      nextTick(() => {
        isRouterAlive.value = true;
      });
    };
    provide('reload', reload);
  
    return {
      isRouterAlive,
    };
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
