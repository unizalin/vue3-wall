import request from '@/utils/request'

//登入
export function login (data) {
  return request({
    url: '/users/signIn',
    method: 'post',
    data
  })
}

//登出
export function logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}

//註冊
export function register (data) {
  return request({
    url: '/users/signUp',
    method: 'post',
    data
  })
}

//修改密碼
export function updatePassword (data) {
  return request({
    url: '/users/updatePassword',
    method: 'post',
    data
  })
}

//取得使用者資料
export function getUserProfile () {
  return request({
    url: `/users/profile/`,
    method: 'get'
  })
}

//取得單一使用者資料
export function getProfile (id) {
  return request({
    url: `/users/getUserInfo/${id}`,
    method: 'post'
  })
}

//更新使用者資料
export function updateProfile(data) {
  return request({
    url: `/users/updateProfile`,
    method: 'patch',
    data
  })
}

//取得按贊列表
export function getLikeList (data) {
  return request({
    url: '/users/getLikeList',
    method: 'get',
    data
  })
}

//取的追蹤
export function getFollowers (data) {
  return request({
    url: '/users/allFollowers',
    method: 'get',
    data
  })
}

//取的追蹤列表
export function getFollowing(data) {
  return request({
    url: '/users/getFollowing',
    method: 'get',
    data
  })
}

//追蹤一位使用者
export function addFollow (id) {
  return request({
    url: `/users/${id}/follow`,
    method: 'post',
  })
}

//取消追蹤一位使用者
export function delFollow (id) {
  return request({
    url: `/users/${id}/unfollow`,
    method: 'delete',
  })
}
