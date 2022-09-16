<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img src="@/assets/img.svg" alt="">
      </div>
      <div class="col">
        <div class="login-block">
          <div class="login-title">
            <img src="@/assets/MetaWall.png" alt="">
            <p class="text">註冊</p>
          </div>
          <div class="login-input">
            <p>
              <input type="text" class="nickname" placeholder="暱稱" v-model="registerForm.name">
              <span v-show="!isVerifiedNickname" class="nickname-msg">暱稱至少 2 個字元以上</span>
            </p>
            <p>
              <input type="email" class="email" placeholder="Email" v-model="registerForm.email" >
              <span v-show="!isVerifiedEmail" class="email-msg">Email 格式錯誤</span>
              <span v-show="isEmailRegistered" class="email-msg">帳號已被註冊，請替換新的 Email！</span>
            </p>
            <p>
              <input type="password" class="password" placeholder="Password" v-model="registerForm.password">
              <span v-show="!isVerifiedPassword" class="password-msg">密碼需至少 8 碼以上，並英文、數字混合</span>
            </p>
            <p>
              <input type="password" class="confirmPassword" placeholder="Confirm Password" v-model="registerForm.confirmPassword">
              <span v-show="!isVerifiedConfirmPassword" class="password-msg">確認密碼跟密碼不一致</span>
            </p>
          </div>
          <div class="user-info">
            <p class="user-info__label">性別</p>
            <div class="form-radio" style="margin-top: 8px;">
              <label class="radio">
                <input type="radio" name="gender" class="radio__input"  value="male"   v-model="registerForm.sex" checked>
                <i class="material-icons un-checked radio__input-icon">radio_button_unchecked</i>
                <i class="material-icons checked radio__input-icon">radio_button_checked</i>
                <p class="radio__input-text">男性</p>
              </label>
              <label class="radio" style="margin-left: 32px;">
                <input type="radio" name="gender"  value="female" class="radio__input"  v-model="registerForm.sex">
                <i class="material-icons un-checked radio__input-icon">radio_button_unchecked</i>
                <i class="material-icons checked radio__input-icon">radio_button_checked</i>
                <p class="radio__input-text">女性</p>
              </label>
            </div>
          </div>
          <div class="btn-block">
            <button type="button" class="btn-signup" @click="register">註冊</button>
            <router-link to="/login" class="btn-login">登入</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { nicknameRule, emailRule, passwordRule, confirmPasswordRule } from '@/utils/validation'

export default defineComponent({
  name: 'PublishPost',
  components: {},
  setup () {
    const router = useRouter()
    const store = useStore()
    const isVerifiedNickname = ref(true)
    const isVerifiedEmail = ref(true)
    const isVerifiedPassword = ref(true)
    const isVerifiedConfirmPassword =ref(true)
    const isEmailRegistered = ref(false)

    // const accountStatus = computed(() => {
    //   return store.getters['user/accountStatus']
    // });

    const registerForm = reactive({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      sex: 'male',
      photo: 'https://i.imgur.com/tpNL3KK.png'
    })

    const register = async () => {
      !registerForm.name || !nicknameRule(registerForm.name)
        ? (isVerifiedNickname.value = false)
        : (isVerifiedNickname.value = true)

      !registerForm.email || !emailRule(registerForm.email)
        ? (isVerifiedEmail.value = false)
        : (isVerifiedEmail.value = true)

      !registerForm.password || !passwordRule(registerForm.password)
        ? (isVerifiedPassword.value = false)
        : (isVerifiedPassword.value = true)

      registerForm.confirmPassword.length>0 && confirmPasswordRule(registerForm.password,registerForm.confirmPassword)? (isVerifiedConfirmPassword.value = true)
        : (isVerifiedConfirmPassword.value = false)

      if(isVerifiedNickname.value && isVerifiedEmail.value && isVerifiedPassword.value && isVerifiedConfirmPassword.value){
        const resData =await store.dispatch('user/register', { ...registerForm })
        console.log(resData)
        if(resData.status == 'false'){
          alert('信箱已註冊，請更換')
          isEmailRegistered.value= true
          return 
        }
        router.push({ path: '/login' });
      }
    }
    return {
      registerForm,
      isVerifiedNickname,
      isVerifiedEmail,
      isEmailRegistered,
      isVerifiedPassword,
      isVerifiedConfirmPassword,
      register
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  max-height: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.row {
  border: 2px solid #000400;
  width: 870px;
  padding: 70px 22px;
  background: #efece7;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: -8px 8px 0px #00040029;
  justify-content: center;

  @media screen and (max-width: 867px) {
    width: 100%;
  }
}

.col {
  margin: 0 24px;
}

.login-block {
  width: 374px;
}

/* LOGO圖片跟字 */
.login-title {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 36px;
}

.text {
  font: 24px 'Helvetica Neue', sans-serif;
  font-weight: 700;
}

/* 帳號密碼輸入框 */
.login-input p {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.login-input p input {
  padding: 16px 24px 16px;
  border: 2px solid #000400;
  outline: none;
  font: Azeret Mono;
}

.login-input p span {
  display: block;
}

.login-input p input::placeholder {
  color: #9b9893;
}

/* 錯誤訊息 */
.login-input p .nickname-msg,
.login-input p .email-msg,
.login-input p .password-msg {
  font: 14px 'Noto Sans TC';
  color: #f57375;
  display: none;
}

/* 登入與註冊按鈕 */
.btn-block {
  display: flex;
  flex-direction: column;
}

.btn-signup {
  color: #fff;
  background: #a8b0b9;
  border: 2px solid #808080;
  border-radius: 8px;
  padding: 16px 0;
  margin: 16px 0;
  cursor: pointer;
  font-size: bold Azeret Mono;
}

.btn-login {
  background: none;
  border: none;
  cursor: pointer;
  font-size: Azeret Mono;
  text-align: center;
  font-size: 13px;
}

/* 錯誤訊息 */
.login-input p .nickname-msg,
.login-input p .email-msg,
.login-input p .password-msg {
  display: block;
  font: 14px 'Noto Sans TC';
  color: #f57375;
}

.form-radio{
  justify-content: space-around;
}
</style>
