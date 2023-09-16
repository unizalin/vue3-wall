<template>
  <div class="header pos-sticky">
    <div class="header__container container">
      <router-link to="/">
        <div class="logo">MetaWall
        </div>
      </router-link>
      <div class="header__avatar__dropdown">
        <div class="header__avatar__dropdown__content">
          <div class="header__avatar">
            <img v-if="userProfile.photo" class="header__avatar__img" :src="userProfile.photo" alt="avatar">
            <div v-else>
              <img v-if="userProfile.sex == 'female'"  class="header__avatar__img" src="@/assets/user5-1.png" alt="">
              <img v-else  class="header__avatar__img" src="@/assets/user_default.png" alt="">
            </div>
          </div>
          <p v-if="userProfile" class="header__avatar__dropdown__text" style="margin__left: 8px">{{userProfile.name}}</p>
        </div>
        <ul class="header__avatar__dropdown__items">
          <li class="header__avatar__dropdown__item">
            <router-link v-if="userProfile" :to="`/personal/${userProfile._id}`">我的貼文牆</router-link>
          </li>
          <li class="header__avatar__dropdown__item">
            <router-link to="/profile/index">修改個人資料</router-link>
          </li>
          <li class="header__avatar__dropdown__item">
            <router-link to="/signup">註冊</router-link>
          </li>
          <li class="header__avatar__dropdown__item">
            <a @click="logout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Header',
  components: {},
  setup () {
    const store = useStore()
    const router = useRouter()
    const show = ref(false)

    const logout = async () => {
      await store.dispatch('user/logout')
      router.push({ path: '/login' })
    }

    const userInfo = computed(() => {
      return store.getters['user/userInfo']
    })

    const userProfile = computed(() => {
      return store.getters['user/userProfile']
    })

    watch(() => userProfile.value, (newVal) => {
      show.value = true
    }
    )

    onMounted(async () => {
      await store.dispatch('user/getUserProfile')
    })

    return {
      show,
      userInfo,
      userProfile,
      logout
    }
  }
})
</script>

  <style lang="scss" scoped>
  </style>
