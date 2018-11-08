import { getShopId } from '@/utils/storage'
import { getToken } from '@/utils/auth'
import request from '@/utils/request'

export function getReservation() {
  return request({
    url: '/business/reservation/list/',
    method: 'get',
    params: { fShopId: getShopId() }
  })
}

export function setCancel(fId) {
  return request({
    url: '/business/reservation/cancel/',
    method: 'post',
    data: {
      token: getToken(),
      fId: fId
    }
  })
}

export function setReach(fId) {
  return request({
    url: '/business/reservation/reach/',
    method: 'post',
    data: {
      token: getToken(),
      fId: fId
    }
  })
}
