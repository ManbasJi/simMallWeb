import request from '@/utils/request'
import { getToken } from '@/utils/auth'
import { getShopId } from '@/utils/storage'

export function getGoodsCategory() {
  return request({
    url: '/business/category/',
    method: 'get',
    params: {
      fShopId: getShopId()
    }
  })
}

export function addGoodsCategory(category) {
  console.log(category)
  return request({
    url: '/business/category/add/',
    method: 'post',
    data: {
      token: getToken(),
      fShopId: getShopId(),
      categoryData: JSON.stringify(category)
    }
  })
}

export function delGoodsCategory(listId) {
  return request({
    url: '/business/category/del/',
    method: 'post',
    data: {
      token: getToken(),
      fListId: listId
    }
  })
}

export function getSecondLevel(listId) {
  return request({
    url: '/business/category/level/',
    method: 'get',
    params: {
      fShopId: getShopId(),
      fListId: listId
    }
  })
}
