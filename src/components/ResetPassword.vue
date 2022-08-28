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
export default defineComponent({
  name: 'ResetPassword',
  components: {},
  setup () {
    const password = ref('')
    const confirmPassword = ref('')
    const checkPassWordSame = computed(() => {
      if (password.value === confirmPassword.value) {
        return true
      }
      return false
    })
    return {
      password,
      confirmPassword,
      checkPassWordSame
    }
  }

})
</script>
