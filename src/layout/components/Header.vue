<template>
  <div class="header pos-sticky">
    <div class="header__container container">
      <router-link to="/">
        <div class="logo">MetaWall</div>
      </router-link>
      <div class="header__avatar__dropdown">
        <div class="header__avatar__dropdown__content">
          <div class="header__avatar">
            <img class="header__avatar__img" src="@/assets/user_default.png" alt="avatar">
          </div>
          <p class="header__avatar__dropdown__text" style="margin__left: 8px">Member</p>
        </div>
        <ul class="header__avatar__dropdown__items">
          <li class="header__avatar__dropdown__item">
            <router-link to="/personal/1234">我的貼文牆</router-link>
          </li>
          <li class="header__avatar__dropdown__item">
            <router-link to="/profile/index">修改個人資料</router-link>
          </li>
          <li class="header__avatar__dropdown__item">
            <router-link to="/signup">註冊</router-link>
          </li>
          <li class="header__avatar__dropdown__item">
            <a >登出</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
