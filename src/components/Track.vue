<template>
  <!-- 追蹤 -->
  <div class="track-container radius track" style="margin-bottom: 14px;">
    <div class="track-content">
      <img v-if="otherUserProfile.photo" class="track-content__img" :src="otherUserProfile.photo" alt="追蹤這照片"/>
      <div v-else>
        <img v-if="otherUserProfile.sex == 'female'"  class="track-content__img" src="@/assets/user5-1.png" alt="">
        <img v-else  class="track-content__img" src="@/assets/user_default.png" alt="">
      </div>
      <div style="margin-left: 16px;">
        <p class="track-content__name">{{otherUserProfile.name}}</p>
        <p class="track-content__text">{{ otherUserProfile.followersNum+ ' 人追蹤'}}</p>
      </div>
      <button class="btn secondary small" @click="updateFollow()">{{trackText}}</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, computed, ref } from 'vue'
import { thousandSeparator } from '@/utils/unit'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Track',
  setup () {
    const store = useStore()
    const route = useRoute()
    const userId = computed(() => {
      return route.params.id
    })
    const otherUserProfile = computed(() => {
      return store.getters['user/otherUserProfile']
    })
    const isTrack = ref(false)
    const trackText = ref('')
    const userProfile = computed(() => {
      return store.getters['user/userProfile']
    })

    const checkTrackStatus = () => {
      isTrack.value = otherUserProfile.value.followers.some((item) => {
        return item.user === userProfile.value._id
      })
      trackText.value = isTrack.value ? '取消追蹤' : '追蹤'
    }

    const updateFollow = async () => {
      if (isTrack.value) {
        await store.dispatch('user/delFolower', userId.value)
      } else {
        await store.dispatch('user/addFolower', userId.value)
      }
      await store.dispatch('user/getOtherUser', { id: userId.value })
      await checkTrackStatus()
    }

    onMounted(async () => {
      await store.dispatch('user/getOtherUser', { id: userId.value })
      checkTrackStatus()
    })

    return {
      thousandSeparator,
      userProfile,
      otherUserProfile,
      trackText,
      updateFollow
    }
  }
})
</script>
<style lang="scss" scoped>
  .tracked{
    background-color: #EFECE7;
  }
</style>
