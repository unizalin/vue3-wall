<template>
  <div class="card round-radius">
    <div class="center-container">
      <div class="avatar-upload">
        <div class="avatar">
          <img v-if="preViewImage" class="avatar__img" :src="preViewImage" />
          <img v-else class="avatar__img" :src="storeUserProfile.photo" />
        </div>
        <div style="margin-top: 16px">
          <label for="upload" class="text-btn black">上傳大頭照</label>
          <input id="upload" style="visibility:hidden" type="file" accept="image/png, image/gif, image/jpeg" @change="showFile">
        </div>
      </div>
      <div class="user-info">
        <p class="user-info__label">暱稱</p>
        <div class="form-input" style="margin-top: 4px;">
          <input type="text" name="nickname" placeholder="名稱" v-model="storeUserProfile.name">
        </div>

      </div>
      <div class="user-info">
        <p class="user-info__label">性別</p>
        <div class="form-radio" style="margin-top: 8px;">
          <label class="radio">
            <input type="radio" name="gender" class="radio__input" v-model="storeUserProfile.sex" value="male" checked>
            <i class="material-icons un-checked radio__input-icon">radio_button_unchecked</i>
            <i class="material-icons checked radio__input-icon">radio_button_checked</i>
            <p class="radio__input-text">男性</p>
          </label>
          <label class="radio" style="margin-left: 32px;">
            <input type="radio" name="gender" v-model="storeUserProfile.sex" value="female" class="radio__input">
            <i class="material-icons un-checked radio__input-icon">radio_button_unchecked</i>
            <i class="material-icons checked radio__input-icon">radio_button_checked</i>
            <p class="radio__input-text">女性</p>
          </label>
        </div>
      </div>
      <p v-if="!errorNameMessageVised" class="user-info__error-message text-align-center" style="margin-top: 32px;">名字不能為空
      </p>
      <p v-if="errorImageMessageVised" class="error-message">{{ errorImageMessage }}</p>
      <!-- <p class="user-info__error-message text-align-center">
        1.圖片寬高比必需為 1:1，請重新輸入
      </p>
      <p class="user-info__error-message text-align-center">
        2. 解析度寬度至少 300像素以上，請重新輸入
      </p> -->
      <button class="btn secondary" @click="updateProfile" style="margin-top: 32px;">
        送出更新
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { uploadImage } from '@/api/image.js'
import { alertSuccess, alertError } from '@/utils/swal'
import { imageTypeRule } from '@/utils/validation'

export default defineComponent({
  name: 'EditUserInfo',
  setup () {
    const store = useStore()
    const userName = ref('')
    const photo = ref('')
    const gender = ref('')
    const errorMessageEnum = {
      noContent: '沒有圖片，請選擇圖片上傳',
      imageSizeError: '解析度寬度至少 300像素以上，請重新輸入',
      imageTypeError: '圖片格式錯誤，僅限 JPG、PNG 圖片'
    }
    const storeUserProfile = computed(() => {
      return store.getters['user/storeUserProfile']
    })

    const title = ref('') // 圖片標題
    const preViewImage = ref(null) // 圖片預覽
    const errorImageMessageVised = ref(true)
    const errorImageMessage = ref('')
    const errorNameMessageVised = ref(true)
    const errorNameMessage = ref('')
    let uploadImageRes
    let file = reactive({})
    const fs = reactive({
      name: '', // input 的圖檔名稱
      thumbnail: null, // input 的圖片縮圖
      size: null, // input 的圖片大小
      unit: 'KB'
    })
    const showFile = async (e) => {
      file = e.target.files[0] // input type="file" 的值
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
    }

    const updateProfile = async () => {
      try {
        if (storeUserProfile.value.name === '') {
          errorNameMessageVised.value = false
          return false
        }
        const editProfile = {
          name: storeUserProfile.value.name,
          sex: storeUserProfile.value.sex,
          photo: uploadImageRes ? uploadImageRes.data.imageUrl : storeUserProfile.value.photo
        }
        const resData = await store.dispatch('user/updateUserProfile', editProfile)
        if (resData.status === 'success') {
          await store.dispatch('user/getUserProfile')
          await store.dispatch('user/getStoreUserProfile')
        }
        alertSuccess('成功修改個人資料')
      } catch (error) {
        alertError(error.message)
        return error
      }
    }

    onMounted(async () => {
      await store.dispatch('user/getStoreUserProfile')
    })
    return {
      userName,
      photo,
      gender,
      storeUserProfile,
      showFile,
      preViewImage,
      errorImageMessageVised,
      errorImageMessage,
      errorNameMessageVised,
      errorNameMessage,
      updateProfile
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
