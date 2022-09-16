<template>
  <div>
    <div v-if="followers.length <= 0" class="concerned-empty" style="margin-top: 16px">
      <div class="concerned-empty__title">
        <div class="concerned-empty__circle red"></div>
        <div class="concerned-empty__circle yellow"></div>
        <div class="concerned-empty__circle green"></div>
      </div>
      <div class="concerned-empty__content">目前尚無追蹤者，快去追蹤感興趣的人吧！</div>
    </div>

    <div v-else v-for="(follower, index) in followers" :key="index">
      <div class="concerned flex-bottom" style="margin-top: 16px;">
        <div class="avatar">
          <img
            class="avatar__img"
            :src="follower.user.photo"
          />
          <div style="margin-left: 16px;">
            <router-link
              :to="`/personal/${follower.user._id}`"
              class="link"
            >{{ follower.user.name }}</router-link>
            <p class="avatar__text">您已追蹤 {{ timeDiffNowTime(follower.user.createdAt) }} 天！</p>
          </div>
        </div>
        <div class="concerned__text">追蹤時間：{{ timeToLocalTime(follower.user.createdAt) }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { timeToLocalTime, timeDiffNowTime } from '@/utils/time'

export default defineComponent({
  name: 'Concerned' ,
  props: {
    followers: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const followers = computed( () => {
      return props.followers
    })

    return {
      followers,
      timeToLocalTime,
      timeDiffNowTime
    }
  }
})
</script>
