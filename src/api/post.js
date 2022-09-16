import request from '@/utils/request';

// 取得所有貼文
export function getPosts({timeSort,keyword},data) {
  if(!timeSort)timeSort='desc'
  if(!keyword)keyword=''
  return request({
    url: `/posts/getAllPosts?timeSort=${timeSort}&keyword=${keyword}`,
    method: 'GET',
    data
  })
}

//取得指定 user 所有貼文
export function getUserPosts(userId, params) {
  return request({
    url: `/posts/getAllPosts/${userId}`,
    method: 'GET',
    params
  })
}

//取得指定貼文
export function getOnePost(postId) {
  return request({
    url: `/posts/getOnePost/${postId}`,
    method: 'GET',
  })
}

//新增貼文
export function createPost(data) {
  return request({
    url: '/posts/addPost',
    method: 'POST',
    data
  })
}

//新增指定貼文內留言
export function addPostComment(postId, data) {
  return request({
    url: `/posts/${postId}/comment`,
    method: 'POST',
    data
  })
}

//修改指定貼文
export function updatePost(postId, data) {
  return request({
    url: `/posts/${postId}`,
    method: 'PATCH',
    data
  })
}

//新增改指定貼文按讚數
export function updateLikes(postId, data) {
  return request({
    url: `/posts/${postId}/likes`,
    method: 'POST',
    data
  })
}

//移除指定貼文按讚數
export function delLikes(postId, data) {
  return request({
    url: `/posts/${postId}/likes`,
    method: 'DELETE',
    data
  })
}

//刪除指定貼文
export function deletePost(postId) {
  return request({
    url: `/posts/${postId}`,
    method: 'DELETE',
  })
}
