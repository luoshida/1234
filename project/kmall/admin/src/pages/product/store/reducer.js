import * as types from './actionTypes.js';

import { fromJS } from 'immutable';


const Default = fromJS ({
	isCategory:false,
	FirstListId:'',
	SecendListId:'',
	loadImg:'',
	detailContent:'',

	ListIdValidateStatus:'',
	ListIdHelp:'',
	dataSource:[],
	current:1,
	defaultCurrent:1,
	total:500,
	pageSize:10,
	editObj:{}
});

export default (state=Default,action)=>{
	if (action.type==types.List_Id) {
		return state.merge({
			FirstListId:action.payload.FirstListId,
			SecendListId:action.payload.SecendListId,
			ListIdValidateStatus:'',
			ListIdHelp:''	
		})
	}
	if (action.type==types.LOAD_IMG) {
		return state.set('loadImg',action.payload)
	}

	if (action.type==types.DETAIL_IMG) {
		// console.log(state);
		return state.set('detailContent',action.payload)
	}
	if (action.type==types.CHANGE_START) {
		return state.set('isCategory',true)
	}

	if (action.type==types.CHANGE_DONE) {
		return state.set('isCategory',false)
	}
	if (action.type==types.ERR_ID) {
		return state.merge({
			ListIdValidateStatus:'error',
			ListIdHelp:'请输入分类'
		})
	}
	if (action.type==types.PRO_MOUNT_DONE) {
		return state.merge({
			dataSource:action.payload.dataSource,
			current:action.payload.current*1,
			defaultCurrent:action.payload.defaultCurrent,
			total:action.payload.total,
			pageSize:action.payload.pageSize,
		})
	}

	if (action.type==types.EDIT_PRODUCT_LOAD) {
		return state.set('editObj',action.payload)
	}
	return state
};