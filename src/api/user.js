import { getShopId } from '@/utils/storage'
import { getToken } from '@/utils/auth'
import request from '@/utils/request'

export function setAddUser(obj) {
  return request({
    url: '/business/user/add/',
    method: 'post',
    data: {
      token: getToken(),
      fShopId: parseInt(getShopId()),
      data: JSON.stringify(obj)
    }
  })
}

export function setDBMsg(obj) {
  return request({
    url: '/business/database/add/',
    method: 'post',
    data: {
      token: getToken(),
      fShopId: getShopId(),
      data: JSON.stringify(obj)
    }
  })
}

export function getDBMsg() {
  return request({
    url: '/business/database/detail/',
    method: 'get',
    params: {
      token: getToken(),
      fShopId: getShopId()
    }
  })
}

export function setAppId(fAppId, fAppSecret) {
  return request({
    url: '/business/user/appid/',
    method: 'post',
    data: {
      token: getToken(),
      fShopId: getShopId(),
      fAppId,
      fAppSecret
    }
  })
}

export function getAppId() {
  return request({
    url: '/business/user/get/',
    method: 'get',
    params: {
      token: getToken(),
      fShopId: getShopId()
    }
  })
}

export function getData() {
  return request({
    url: '/business/user/list/',
    method: 'get',
    params: {
      fShopId: getShopId()
    }
  })
}

export function setDelete(fId) {
  return request({
    url: '/business/user/del/',
    method: 'post',
    data: {
      token: getToken(),
      fId: fId
    }
  })
}

export function setRevise(fId, pwd) {
  return request({
    url: '/business/user/revise/',
    method: 'post',
    data: {
      token: getToken(),
      fId: fId,
      fPwd: pwd
    }
  })
}
