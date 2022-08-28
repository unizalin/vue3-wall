<template>
  <div class="search-bar" style="margin-bottom: 12px;">
    <div class="dropdown">
      <div class="dropdown__btn">
        <p>{{  }}</p>
        <i class="material-icons-outlined">
          expand_more
        </i>
      </div>
      <ul class="dropdown__items">
        <li class="dropdown__item">最新貼文</li>
        <!-- <li class="dropdown__item" @click="onSort('asc')">最舊貼文</li> -->
      </ul>
    </div>
    <div class="search-input">
      <div class="search-input__input">
        <input
          type="text"
          name="name"
          placeholder="搜尋貼文"
        >
      </div>
      <button class="search-input__btn">
        <i class="material-icons-outlined">
          search
        </i>
      </button>
    </div>
  </div>
</template>
