import request from '@/utils/request'

export function uploadImage(data) {
  return request({
    url: '/business/image',
    method: 'post',
    data: data
  })
}
