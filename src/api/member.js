import { getShopId } from '@/utils/storage'
import { getToken } from '@/utils/auth'
import request from '@/utils/request'

export function insertRules(fLevel,fName,fMemMin,fMemMax,fDisCount) {
	console.log(fLevel,fName,fMemMin,fMemMax)
  return request({
    url: '/member/insert_rules/',
    method: 'post',
    data:{
    	token:getToken(),
    	fShopId:getShopId(),
    	fLevel:fLevel,
    	fName:fName,
    	fMemMin:fMemMin,
    	fMemMax:fMemMax,
    	fDisCount:fDisCount
    }
  })
}

export function updateRules(id,level,name,memMin,memMax,disCount){
	return request({
		url: '/member/update_rules/',
		method: 'post',
	   data:{
    	token:getToken(),
    	fId:id,
    	fLevel:level,
    	fName:name,
    	fMemMin:memMin,
    	fMemMax:memMax,
    	fDisCount:disCount
    }	
	})
}

export function delRules(id){
	return request({
		url:'/member/del_rules/',
		method: 'post',
		data:{
			token:getToken(),
			fId:id
		}
	})
}

export function getRules(){
	return request({
		url: '/member/rules/',
		method: 'get',
		params:{
			fShopId:getShopId()
		}
	})
}