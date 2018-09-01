import * as types from './actionTypes.js';

import { fromJS } from 'immutable';
let Default = fromJS({
	userNum:100,
	aNum:300,
	bNum:400
})


export default (state=Default,action)=>{
	if (action.type==types.GET_LINK) {
		return state.merge({
			userNum:action.payload.userNum,
			aNum:action.payload.aNum,
			bNum:action.payload.bNum
		})
	}
	// if (action.type==types.CHANGE_DONE) {
	// 	return state.set('isLogin',false)
	// }
	return state
	//返回的都是一个map对象
};