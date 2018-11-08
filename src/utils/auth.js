import Cookies from 'js-cookie'

const TokenKey = 'Business-Token'
const UploadTokenKey = 'Image-Token'

export function setUploadToken(token) {
  return Cookies.set(UploadTokenKey, token)
}

export function getUploadToken() {
  return Cookies.get(UploadTokenKey)
}

export function removeUploadToken() {
  return Cookies.remove(UploadTokenKey)
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
