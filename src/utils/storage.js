import Cookies from 'js-cookie'

const fIdKey = 'fId'
const ShopIdKey = 'fShopId'
const fSoftType = 'fSoftType'

export function getID() {
  return Cookies.get(fIdKey)
}

export function setID(id) {
  return Cookies.set(fIdKey, id)
}

export function removeID() {
  return Cookies.remove(fIdKey)
}

export function getShopId() {
  return Cookies.get(ShopIdKey)
}

export function setShopId(shopId) {
  return Cookies.set(ShopIdKey, shopId)
}

export function removeShopId() {
  return Cookies.remove(ShopIdKey)
}

export function setSoftType(type) {
  return Cookies.set(fSoftType, type)
}

export function getSoftType() {
  return Cookies.get(fSoftType)
}

export function removeSoftType() {
  return Cookies.remove(fSoftType)
}
