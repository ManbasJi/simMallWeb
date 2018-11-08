import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function getAuth(shopId) {
  return request({
    url: '/business/auth/list/',
    method: 'get',
    params: {
      fShopId: shopId
    }
  })
}

export function setResetpwd(username, password, smscode) {
  return request({
    url: '/business/resetpwd/',
    method: 'post',
    data: {
      username,
      password,
      smscode
    }
  })
}

export function getSMSCode(phone) {
  return request({
    url: '/business/smscode/',
    method: 'get',
    params: { phone }
  })
}

export function setLogin(username, password) {
  return request({
    url: '/business/login/',
    method: 'get',
    params: {
      username,
      password
    }
  })
}

export function setRegiter(username, password, smscode) {
  return request({
    url: '/business/register/',
    method: 'post',
    data: {
      username,
      password,
      smscode
    }
  })
}

export function logout() {
  return request({
    url: '/business/logout/',
    method: 'post',
    data: {
      token: getToken()
    }
  })
}

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function checkToken() {
  return request({
    url: '/business/token/',
    method: 'get',
    params: {
      token: getToken()
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
