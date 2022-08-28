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
            :src="follower.userPhoto"
          />
          <div style="margin-left: 16px;">
            <router-link
              :to="`/personal/${follower.userId}`"
              class="link"
            >{{ follower.userName }}</router-link>
            <p class="avatar__text">您已追蹤 {{ timeDiffNowTime(follower.createAt) }} 天！</p>
          </div>
        </div>
        <div class="concerned__text">追蹤時間：{{ timeToLocalTime(follower.createAt) }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import { timeToLocalTime, timeDiffNowTime } from '@/utils/time'

export default defineComponent({
  setup () {
    const followers = reactive([
      {
        userName: '希琳',
        userPhoto: 'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1652373309671.jpg',
        userId: '9123',
        createAt: '2022-05-10T17:22:10.221Z'
      },
      {
        userName: '希琳',
        userPhoto: 'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1652373309671.jpg',
        userId: '65423',
        createAt: '2022-05-10T17:22:10.221Z'
      }
    ])

    return {
      followers,
      timeToLocalTime,
      timeDiffNowTime
    }
  }
})
</script>
