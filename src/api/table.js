import { getShopId } from '@/utils/storage'
import { getToken } from '@/utils/auth'
import request from '@/utils/request'

export function setAdd(obj) {
  console.log(obj)
  return request({
    url: '/business/table/add/',
    method: 'post',
    data: {
      token: getToken(),
      ...obj
    }
  })
}

export function setStatus(fId, state) {
  return request({
    url: '/business/table/status/',
    method: 'post',
    data: {
      token: getToken(),
      fId: fId,
      fStatus: state
    }
  })
}

export function setDelete(fId) {
  return request({
    url: '/business/table/del/',
    method: 'post',
    data: {
      token: getToken(),
      fId: fId
    }
  })
}

export function getData() {
  return request({
    url: '/business/table/list/',
    method: 'get',
    params: {
      fShopId: getShopId()
    }
  })
}

export function getAccessToken() {
  return request({
    url: '/token/access/',
    method: 'get',
    params: {
      fShopId: getShopId()
    }
  })
}

export function buildQCode() {
  return request({
    url: ''
  })
}
