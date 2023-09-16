<template>
  <div class="fixed-menu-layout__menu end">
    <div class="card">
      <router-link class="btn" to="/publishPost/index">張貼動態</router-link>
      <ul style="margin-top:24px;">
        <li>
          <router-link :to="`/personal/${userProfile._id}`" class="icon-btn">
            <div class="avatar">
              <img v-if="userProfile.photo" class="header__avatar__img" :src="userProfile.photo" alt="avatar">
              <div v-else>
                <img v-if="userProfile.sex == 'female'"  class="header__avatar__img" src="@/assets/user5-1.png" alt="">
                <img v-else  class="header__avatar__img" src="@/assets/user_default.png" alt="">
              </div>
            </div>
            <p class="icon-btn__text">{{userProfile.name}}</p>
          </router-link>
        </li>
        <li style="margin-top:24px;">
          <router-link to="/follower/index" class="icon-btn">
            <i class="material-icons-outlined icon-btn__icon">notifications</i>
            <p class="icon-btn__text">追蹤名單</p>
          </router-link>
        </li>
        <li style="margin-top:24px;">
          <router-link to="/likePosts/index" class="icon-btn">
            <i class="material-icons-outlined icon-btn__icon">thumb_up</i>
            <p class="icon-btn__text">我按讚的文章</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Sidebar',
  components: {},
  setup () {
    const store = useStore()

    const userProfile = computed(() => {
      return store.getters['user/userProfile']
    })

    return {
      userProfile

    }
  }
})
</script>

<style lang="scss" scoped>
  .btn{
    width: auto;
  }
  .header__avatar__img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid #000400;
  }
</style>
