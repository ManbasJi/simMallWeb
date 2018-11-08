import request from '@/utils/request'
import { getShopId } '@/utils/storage'

export function getGlobalState() {
  return request({
    url: '/global/state/',
    method: 'get',
    params: {
      fShopId: getShopId()
    }
  })
}
