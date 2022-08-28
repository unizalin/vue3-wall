<template>
  <div>
    <div class="block-title">
      修改個人資料
    </div>
    <ul class="tabs" style="margin-top: 32px; margin-left: 16px;">
      <li class="tab" :class="{'active': tagKey=== 'userInfo'}" @click="clickTag('userInfo')">暱稱修改</li>
      <li class="tab" :class="{'active': tagKey=== 'password'}"  @click="clickTag('password')">重設密碼</li>
    </ul>
    <transition name="fall">
      <EditUserInfo v-if="tagKey === 'userInfo'" />
    </transition>
    <transition name="fall">
      <ResetPassword v-if="tagKey === 'password'" />
    </transition>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import EditUserInfo from '@/components/EditUserInfo'
import ResetPassword from '@/components/ResetPassword'
export default defineComponent({
  components: {
    EditUserInfo,
    ResetPassword
  },
  setup () {
    const tagKey = ref('userInfo')
    function clickTag (key) {
      tagKey.value = key
    }
    return {
      tagKey,
      clickTag
    }
  }
})
</script>
