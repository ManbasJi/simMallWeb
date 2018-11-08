import axios from 'axios'
import qs from 'qs'
import { Message, MessageBox } from 'element-ui'
import { removeToken, removeUploadToken } from '@/utils/auth'
import { removeSoftType } from '@/utils/storage'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  const regex = /.*csrftoken=([^;.]*).*$/
  config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1]
  console.log(config.headers['X-CSRFToken'])
  config.data = qs.stringify(config.data)
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 901) {
      MessageBox.confirm('登录超时,请重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeToken()
        removeUploadToken()
        removeSoftType()
        location.reload()
      })
      return Promise.reject('登录超时，请重新登录')
    }
    if (res.code === -1) {
      Message({
        message: '服务器出错',
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject('服务器出错')
    }
    if (res.code === 600) {
      Message({
        message: '缺少参数',
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject('缺少参数')
    }
    return response.data
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
