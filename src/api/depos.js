import { getToken } from '@/utils/auth'
import { getShopId } from '@/utils/storage'
import request from '@/utils/request'

export function getDeposRules() {
	return request({
		url: '/business/deposit/getrules/',
    method: 'get',
    params: {
      fShopId: getShopId(),
    }
	})
}

export function insertDeposRules(fAmountMin,fAmountMax,fGivenMoney,fStatus,fRemark) {
	return request({
		url: '/business/deposit/inrules/',
    method: 'get',
    params: {
      fShopId: getShopId(),
      fAmountMin: fAmountMin,
      fAmountMax: fAmountMax,
      fGivenMoney: fGivenMoney,
      fStatus: 1,
      fRemark: fRemark
    }
	})
}

export function updateDeposRules(fId,fAmountMin,fAmountMax,fGivenMoney,fStatus,fRemark) {
  console.log('fRemark===',fRemark)
  if(fRemark == null){
    fRemark = ""
  }
	return request({
		url: '/business/deposit/uprules/',
    method: 'get',
    params: {
    	fId: fId,
    	fAmountMin: fAmountMin,
    	fAmountMax: fAmountMax,
    	fGivenMoney: fGivenMoney,
    	fStatus: fStatus,
    	fRemark: fRemark,
    }
	})
}

export function delDeposRules(fId) {
	return request({
		url: '/business/deposit/delrules/',
    method: 'get',
    params: {
      fId: fId
    }
	})
}

export function inputDepos(orderNo,fPhone,fAmount,fRemark){

  console.log(getToken(),getShopId(),fPhone,fAmount,fRemark)
  return request({
    url: '/business/deposit/indepos/',
    method: 'post',
    data: {
      fOrderNo: orderNo,
      token: getToken(),
      fShopId: getShopId(),
      fPhone:fPhone,
      fAmount:fAmount,
      fRemark:'后台充值'
    }
  })
}

export function getDepositRecord(){
  return request({
    url:'/business/deposit/record/',
    method: 'get',
    params:{
      fShopId:getShopId(),
      fCustId:""
    }
  })
}