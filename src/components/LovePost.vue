<template>
  <div>
    <div v-if="likePosts.length <= 0" class="love-post-empty" style="margin-top: 16px;">
      <div class="love-post-empty__title">
        <div class="love-post-empty__circle red"></div>
        <div class="love-post-empty__circle yellow"></div>
        <div class="love-post-empty__circle green"></div>
      </div>
      <div class="love-post-empty__content">目前尚無按讚的貼文，快去按讚別人貼文吧！</div>
    </div>

    <div v-else v-for="(likePost, index) in likePosts" :key="index">
      <div class="love-post" style="margin-top: 16px">
        <div class="avatar">
          <img class="avatar__img" :src="likePost.userPhoto"/>
          <div style="margin-left: 16px;">
            <router-link :to="`/personal/${likePost.userId}`" class="link">{{ likePost.userName }}</router-link>
            <p class="avatar__text">發文時間：{{ timeToLocalTime(likePost.createAt) }}</p>
          </div>
        </div>
        <ul class="love-post__btn-list">
          <li>
            <button class="love-post__btn" @click="cancelLikePost(likePost.userId, likePost.postId)">
              <i class="material-icons-outlined love-post__btn__icon blue">thumb_up</i>
              <p class="love-post__btn__text fw-bold">取消</p>
            </button>
          </li>
          <li class="look">
            <button class="love-post__btn" @click="gotoPersonalPage(likePost.userId, likePost.postId)">
              <i class="material-icons-outlined love-post__btn__icon">arrow_circle_right</i>
              <p class="love-post__btn__text fw-bold">查看</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import { timeToLocalTime, timeDiffNowTime } from '@/utils/time'

export default defineComponent({
  name: 'LovePost',
  props: {
    // likePosts: {
    //   trpe: Array,
    //   default: () => []
    // }
  },
  setup () {
    const likePosts = reactive([
      {
        userName: '希琳',
        userPhoto: 'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1652373309671.jpg',
        userId: '9123',
        postId: '123',
        createAt: '2022-05-10T17:22:10.221Z'
      },
      {
        userName: '希琳',
        userPhoto: 'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1652373309671.jpg',
        userId: '65423',
        postId: '456',
        createAt: '2022-05-10T17:22:10.221Z'
      }
    ])

    return {
      likePosts,
      timeToLocalTime,
      timeDiffNowTime
    }
  }
})
</script>
