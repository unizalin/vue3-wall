<template>
  <div>
    <div class="block-title">
      張貼動態
    </div>
    <div class="draft-post">
      <div class="draft-post__post">
        <p class="draft-post__post__label">貼文內容</p>
        <div class="draft-post__textarea">
          <textarea v-model="content" type="text" name="nickname" placeholder="輸入您的貼文內容稱"></textarea>
        </div>
      </div>
      <div style="margin-top: 16px">
        <label for="upload" class="text-btn black">上傳圖片</label>
        <input id="upload" style="visibility:hidden" type="file" accept="image/png, image/gif, image/jpeg" @change="showFile">
      </div>
      <img v-if="preViewImage" class="draft-post__img" style="margin-top: 16px" :src="preViewImage"/>
      <div v-else class="draft-post__img" />

      <!-- 錯誤訊息 -->
      <p v-if="errorImageMessageVised" class="error-message">{{ errorImageMessage }}</p>
      <p v-if="errorContentMessageVised" class="error-message">
        {{ errorContentMessage }}
      </p>
      <div style="max-width: 323px margin: 0 auto">
        <button style="margin-top: 32px" class="btn secondary" @click="submitPost"> 送出貼文
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'
import { imageTypeRule } from '@/utils/validation'
import { useStore } from 'vuex'
import { uploadImage } from '@/api/image.js'
import router from '../router'

export default defineComponent({
  name: 'PublishPost',
  setup () {
    const store = useStore()
    const content = ref('')
    let file = reactive({})
    const fs = reactive({
      name: '', // input 的圖檔名稱
      thumbnail: null, // input 的圖片縮圖
      size: null, // input 的圖片大小
      unit: 'KB'
    })
    const title = ref('') // 圖片標題
    const preViewImage = ref(null) // 圖片預覽
    const errorImageMessageVised = ref(true)
    const errorImageMessage = ref('')
    const errorContentMessageVised = ref(true)
    const errorContentMessage = ref('')
    let uploadImageRes
    const errorMessageEnum = {
      noContent: '沒有貼文內容，請填寫',
      imageSizeError: '圖片檔案過大，僅限 1mb 以下檔案',
      imageTypeError: '圖片格式錯誤，僅限 JPG、PNG 圖片'
    }
    const showFile = async (e) => {
      file = e.target.files[0]
      console.log('showFile', file)
      fs.name = file.name // input 的圖檔名稱
      fs.thumbnail = window.URL.createObjectURL(file) // input 的圖片縮圖
      fs.size = ~~(file.size * 0.001) // input 的圖片大小
      title.value = fs.name // 預設 input 的圖檔名稱為圖片上傳時的圖片標題
      preViewImage.value = URL.createObjectURL(file)

      if (fs.size > 1000) {
        errorImageMessageVised.value = true
        errorImageMessage.value = errorMessageEnum.imageSizeError
      } else if (!imageTypeRule(fs.name)) {
        errorImageMessageVised.value = true
        errorImageMessage.value = errorMessageEnum.imageTypeError
      } else {
        errorImageMessageVised.value = false
      }

      uploadImageRes = await uploadImage(file)
      console.log('uploadImageRes', uploadImageRes)
    }

    const submitPost = async () => {
      try {
        errorContentMessageVised.value = false
        if (content.value === '') {
          errorContentMessageVised.value = true
          errorContentMessage.value = errorMessageEnum.noContent
          return false
        }
        if (errorImageMessageVised.value) {
          return false
        }
        const userId = store.getters['user/userProfile']?._id

        const { status, data } = await store.dispatch('post/addPost', {
          userId,
          content: content.value,
          imgUrl: uploadImageRes.data.imageUrl
        })
        status === 'success' && router.push({ path: '/home' })
      } catch (error) {

      }
    }
    return {
      content,
      title,
      preViewImage,
      errorImageMessageVised,
      errorImageMessage,
      errorContentMessageVised,
      errorContentMessage,
      showFile,
      submitPost
    }
  }

})
</script>
