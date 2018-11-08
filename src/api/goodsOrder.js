import request from '@/utils/request'
import { getShopId } from '@/utils/storage'
import { getToken } from '@/utils/auth'

export function getGoodsOrder() {
  return request({
    url: '/business/order/list/',
    method: 'get',
    params: {
      fShopId: getShopId()
    }
  })
}

export function setSearchOrder(data) {
  return request({
    url: '/business/order/search/',
    method: 'get',
    params: {
      fShopId: getShopId(),
      data: JSON.stringify(data)
    }
  })
}

export function setOrderStatus(orderId,status){
  return request({
    url: '/business/order/status/',
    method: 'post',
    data: {
      token:getToken(),
      fOrderId:orderId,
      fStatus:status
    }
  })
}

export function printOrderDetail(orderNo){
  console.log(getToken(),getShopId(),orderNo)
  return request({
    url: '/business/print/detail/',
    method: 'get',
    params: {
      fShopId:getShopId(),
      fOrderNo:orderNo
    }
  })
}

export function getOrderDetail(orderId){
  return request({
    url: '/business/order/detail/',
    method: 'get',
    params: {
      fOrderId:orderId
    }
  })
}

