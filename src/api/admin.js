// import { getShopId } from '@/utils/storage'
import { getToken } from '@/utils/auth'
import request from '@/utils/request'

export function setDelete(typeid) {
  return request({
    url: '/admin/delete/',
    method: 'post',
    data: {
      token: getToken(),
      fTypeId: typeid,
      fStatus: 0
    }
  })
}

export function getFunc(shopid) {
  return request({
    url: '/admin/func/',
    method: 'get',
    params: {
      fShopId: shopid
    }
  })
}

export function setAuth(shopId, begDate, endDate, value, userNum) {
  return request({
    url: '/admin/auth/',
    method: 'post',
    data: {
      token: getToken(),
      fShopId: shopId,
      fBegDate: begDate,
      fEndDate: endDate,
      fSoftType: value,
      fUserNum: userNum
    }
  })
}

export function getData() {
  return request({
    url: '/admin/list/',
    method: 'get',
    params: {
      token: getToken()
    }
  })
}

export function setIsLogin(shopId, islogin) {
  return request({
    url: '/admin/islogin/',
    method: 'post',
    data: {
      token: getToken(),
      fShopId: shopId,
      fIsLogin: islogin
    }
  })
}
