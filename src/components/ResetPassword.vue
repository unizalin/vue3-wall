<template>
  <div class="card round-radius">
    <div class="center-container">
      <div class="user-password">
        <p class="user-password__label">輸入新密碼</p>
        <div class="form-input" style="margin-top: 4px;">
          <input v-model.trim="password" type="password" name="password" placeholder="請輸入新密碼">
        </div>
      </div>
      <div class="user-password">
        <p class="user-password__label">再次輸入</p>
        <div class="form-input" style="margin-top: 4px;">
          <input v-model.trim="confirmPassword" type="password" name="password-confirmation" placeholder="再次輸入新密碼">
        </div>
      </div>
      <button class="btn" :class="{ disabled : !checkPassWordSame }" @click="updatePassWord" style="margin-top: 32px;">重設密碼</button>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { passwordRule } from '@/utils/validation'

export default defineComponent({
  name: 'ResetPassword',
  components: {},
  setup () {
    const store = useStore()

    const password = ref('')
    const confirmPassword = ref('')
    const checkPassWordSame = computed(() => {
      if (password.value === confirmPassword.value) {
        return passwordRule(password.value)
      }
      return false
    })
    const updatePassWord = async () => {
      if (!checkPassWordSame.value) {
        alert('密碼需至少 8 碼以上，並英文、數字混合')
      }
      const res = await store.dispatch('user/updatePassword', {
        password: password.value,
        confirmPassword: confirmPassword.value
      })
      if (res.status === 'success') {
        alert('成功修改個人資料')
        await store.dispatch('user/getUserProfile')
      }
    }
    return {
      password,
      confirmPassword,
      checkPassWordSame,
      updatePassWord
    }
  }

})
</script>
