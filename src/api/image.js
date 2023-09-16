import request from '@/utils/request'

export function uploadImage (file) {
  console.log('uploadImage', file)
  const formData = new FormData()
  formData.append('file', file)

  return request({
    url: '/files/uploadImage',
    method: 'POST',
    data: formData
  })
}
