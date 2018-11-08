import { getToken } from '@/utils/auth'
import { getShopId } from '@/utils/storage'
import request from '@/utils/request'

export function getCoupon() {
  return request({
    url: '/business/coupon/list/',
    method: 'get',
    params: {
      fShopId: getShopId()
    }
  })
}

export function setCoupon(obj) {
  return request({
    url: '/business/coupon/add/',
    method: 'post',
    data: {
      token: getToken(),
      fShopId: getShopId(),
      ...obj
    }
  })
}

export function delCoupon(couponId) {
  return request({
    url: '/business/coupon/del/',
    method: 'post',
    data: {
      token: getToken(),
      fCouponId: couponId
    }
  })
}
