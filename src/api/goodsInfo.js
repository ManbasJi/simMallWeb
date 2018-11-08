import request from '@/utils/request'
import { getShopId } from '@/utils/storage'
import { getToken } from '@/utils/auth'

export function setImageDelete(dataObj) {
  console.log(dataObj)
  return request({
    url: '/image/del/',
    method: 'post',
    data: {
      token: getToken(),
      data: JSON.stringify(dataObj)
    }
  })
}

export function addGoodsAttribute(obj) {
  console.log(obj)
  return request({
    url: '/attribute/add/',
    method: 'post',
    data: {
      token: getToken(),
      ...obj
    }
  })
}

export function delGoodsAttribute(fItemId) {
  console.log(fItemId)
  return request({
    url: '/attribute/del/',
    method: 'post',
    data: {
      token: getToken(),
      fItemId
    }
  })
}

export function getGoodsAttribute(goodsId) {
  return request({
    url: '/attribute/list/',
    method: 'get',
    params: {
      fShopId: getShopId(),
      fGoodsId: goodsId
    }
  })
}

export function getCategoryData() {
  return request({
    url: '/category/data/',
    method: 'get',
    params: {
      fShopId: getShopId()
    }
  })
}

export function setSave(objData) {
  console.log('保存商品===',objData)
  return request({
    url: '/goods/submit/',
    method: 'post',
    data: {
      token: getToken(),
      ...objData
    }
  })
}

export function getGoodsData() {
  return request({
    url: '/goods/list/',
    method: 'get',
    params: {
      fShopId: getShopId()
    }
  })
}

export function setStatus(goodsId, state) {
  return request({
    url: '/goods/status/',
    method: 'post',
    data: {
      token: getToken(),
      fGoodsId: goodsId,
      fStatus: state
    }
  })
}

export function setDelete(fGoodsId) {
  return request({
    url: '/goods/delete/',
    method: 'post',
    data: {
      token: getToken(),
      fGoodsId
    }
  })
}
