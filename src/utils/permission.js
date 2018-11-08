import { getShopId, getID } from '@/utils/storage'
import { getToken } from '@/utils/auth'
import request from '@/utils/request'
import router from '@/router'
import { routerMap } from '@/router/index'

export function authTable() {
  if (getToken() && getShopId()) {
    return request({
      url: '/auth/',
      method: 'get',
      params: {
        fShopId: getShopId(),
        token: getToken(),
        fId: getID()
      }
    }).then((res) => {
      if (res.code === 0 && res.data.length > 0) {
        const data = handleRouter(res.data)
        router.addRoutes(data)
        for (let i = 0; i < data.length; ++i) {
          router.options.routes.push(data[i])
        }
        return true
      } else {
        return false
      }
    }).catch((err) => {
      console.log(err)
      return false
    })
  }
  return false
}

function handleRouter(data) {
  for (let i = 0; i < data.length; ++i) {
    if (data[i]['path'] === '/404' || data[i]['path'] === '*') {
      continue
    }
    const key = data[i]['component']
    data[i]['component'] = routerMap[key]
    for (let j = 0; j < data[i]['children'].length; ++j) {
      const tmpKey = data[i]['children'][j]['component']
      data[i]['children'][j]['component'] = routerMap[tmpKey]
    }
  }
  return data
}
