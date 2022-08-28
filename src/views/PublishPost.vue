<template>
  <div>
    <div class="block-title">
      張貼動態
    </div>
    <div class="draft-post">
      <div class="draft-post__post">
        <p class="draft-post__post__label">貼文內容</p>
        <div class="draft-post__textarea">
          <textarea
            v-model="content"
            type="text"
            name="nickname"
            placeholder="輸入您的貼文內容稱"
          ></textarea>
        </div>
      </div>
      <div style="margin-top: 16px;">
        <label for="upload" class="text-btn black">上傳圖片</label>
        <input id="upload"
          style="visibility:hidden;"
          type="file"
          accept="image/png, image/gif, image/jpeg"
          @change="showFile"
        >
      </div>
      <img
        v-if="preViewImage"
        class="draft-post__img"
        style="margin-top: 16px;"
        :src="preViewImage"
      />
      <div v-else class="draft-post__img" />

      <!-- 錯誤訊息 -->
      <p v-if="errorImageMessageVised" class="error-message">
        {{ errorImageMessage }}
      </p>
      <p v-if="errorContentMessageVised" class="error-message">
        {{ errorContentMessage }}
      </p>
      <div style="max-width: 323px; margin: 0 auto;">
        <button
          style="margin-top: 32px;"
          class="btn secondary"
          @click="submitPost"
        >
          送出貼文
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'PublishPost',
  setup () {
    const content = ref('')
    return {
      content
    }
  }

})
</script>
