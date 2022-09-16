<template>
  <div>
    <transition name="fade">
      <div v-if="!isSelf">
        <Track />
      </div>
    </transition>
    <Searchbar />
    <Posts  :posts="postsList" />
  </div>
</template>
<script>
import { defineComponent, ref, computed, onMounted} from 'vue'
import { useStore } from 'vuex';
import { useRoute, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
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
    const store = useStore();
    const route = useRoute()
    const paramsId = route.params?.id;
    const postsList = ref([]);
    const selfId = computed(() => {
      return store.getters['user/userProfile']?._id
    });
    const isSelf = ref(selfId == paramsId);

    onMounted(async () => {
      const { postId } = route.query;
      if(postId){
          const postData =await store.dispatch('post/getOnePost', {postId} );
          postsList.value.push(postData.data);
      }else{
        await store.dispatch('post/getUserPosts', paramsId );
        postsList.value.push(...storePost.value);
      }
    });


    const storePost = computed(() => {
      const data = store.getters['post/userPosts'];
      return data;
    });    

    onBeforeRouteUpdate(async(to, from) => {
      const newId = to.params.id;
      isSelf.value = selfId.value == newId;
      await store.dispatch('post/initUserPosts');
      await store.dispatch('post/getUserPosts', newId );
      postsList.value.push(...storePost.value);
    });

    onBeforeRouteLeave((to, from) => {
      store.dispatch('post/initUserPosts');
    });
    return {
      isSelf,
      selfId,
      paramsId,
      storePost,
      postsList
    }
  }
})
</script>
