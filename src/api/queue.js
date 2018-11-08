import { getShopId } from '@/utils/storage'
import { getToken } from '@/utils/auth'
import request from '@/utils/request'

export function getData() {
  return request({
    url: '/business/queue/list/',
    method: 'get',
    params: {
      fShopId: getShopId()
    }
  })
}

export function setStatus(entryNo, state) {
  return request({
    url: '/business/queue/status/',
    method: 'post',
    data: {
      token: getToken(),
      fShopId: getShopId(),
      fEntryNo: entryNo,
      fStatus: state
    }
  })
}

export function setTable(entryNo, tableNo) {
  return request({
    url: '/business/queue/finish/',
    method: 'post',
    data: {
      token: getToken(),
      fShopId: getShopId(),
      fEntryNo: entryNo,
      fTableNum: tableNo,
      fStatus: 1
    }
  })
}
