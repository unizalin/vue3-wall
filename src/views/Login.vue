<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img src="@/assets/img.svg" alt="meta wall image">
      </div>
      <div class="col">
        <div class="login__block" ref="loginFormRef">
          <div class="login__title">
            <img src="@/assets/MetaWall.png" alt="meta wall logo">
            <p class="text">到元宇宙展開全新社交圈</p>
          </div>
          <div class="login__input">
            <input type="email" placeholder="Email" v-model="loginForm.email">
            <input  type="password" placeholder="Password" v-model="loginForm.password">
          </div>
          <div class="btn__block">
            <button type="button" class="btn__login" @click="login">登入</button>
            <router-link to="/signup" class="btn__signup">註冊帳號</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'login',
  components: {},
  setup () {
    const store = useStore()
    const router = useRouter()
    const loginForm = reactive({
      email: '',
      password: ''
    })

    const status = computed(() => {
      return store.getters['user/verifyResponse']
    })
    const login = async () => {
      await store.dispatch('user/login', { ...loginForm })
    }
    watch(status.value, (newStatus) => {
      if (newStatus.status === 'success') {
        router.push({ path: '/home' })
        store.dispatch('user/setDefaultResponse')
      }
    })

    return {
      loginForm,
      status,
      login
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

.login {
  &__block {
    width: 374px;
  }

  &__title {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 36px;
  }

  &__input {
    display: flex;
    flex-direction: column;

    /* 帳號密碼輸入框 */
    input {
      padding: 16px 24px 16px;
      margin-bottom: 16px;
      border: 2px solid #000400;
      outline: none;
      font: Azeret Mono;

      &::placeholder {
        color: #9b9893;
      }
    }
  }
}

.text {
  font: 24px 'Helvetica Neue', sans-serif;
  font-weight: 700;
}

/* 錯誤訊息 */
.wrong-msg {
  font: 14px 'Noto Sans TC';
  color: #f57375;
  text-align: center;
}

/* 登入與註冊按鈕 */
.btn {
  &__block {
    display: flex;
    flex-direction: column;
  }

  &__login {
    cursor: pointer;
    margin: 16px 0;
    padding: 16px 0;
    color: #fff;
    background: #03438d;
    box-shadow: -2px 2px 0px #000400;
    border: 2px solid #000400;
    border-radius: 8px;
    font-size: bold Azeret Mono;
    transition: 0.1s;

    &:hover {
      background-color: #a8b0b9;
      border-color: #808080;
    }
  }

  &__signup {
    background: none;
    border: none;
    cursor: pointer;
    font-size: Azeret Mono;
    text-align: center;
    font-size: 13px;
  }
}
</style>
