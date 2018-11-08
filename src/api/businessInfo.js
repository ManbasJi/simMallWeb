import request from '@/utils/request'
import { getToken } from '@/utils/auth'
import { getShopId } from '@/utils/storage'

export function setSave(dataObj) {
  console.log("setSave===",dataObj)
  return request({
    url: '/info/add/',
    method: 'post',
    data: {
      token: getToken(),
      fShopId: getShopId(),
      data: JSON.stringify(dataObj)
    },
  })
}

export function setImageDelete(dataObj) {
  return request({
    url: '/image/del/',
    method: 'post',
    data: {
      token: getToken(),
      data: JSON.stringify(dataObj)
    }
  })
}

export function getData() {
  return request({
    url: '/info/detail/',
    method: 'get',
    params: {
      fShopId: getShopId()
    }
  })
}
