import { CHANGE_VALUE, CHANGE_LIST, DEL_LIST, INIT_LOAD } from './actionTypes.js';
import axios from 'axios';

const CHANGEVALUE = (payload)=>{
	return {
			type:CHANGE_VALUE,
			payload
	}
};
const CHANGELIST = ()=>{
	return {
			type:CHANGE_LIST,
	}
};
const DELLIST = (payload)=>{
	return {
			type:DEL_LIST,
			payload
	}
};
const INITLOAD = (payload)=>{
	return {
			type:INIT_LOAD,
			payload
	}
};
const getInit = ()=>{
	return (aa)=>{
		axios
		.get('http://127.0.0.1:3000')
		.then((data)=>{
			// let action = INITLOAD(data.data);
			// aa(action);
		})
		.catch((e)=>{
			throw e
		})
	}
}
export { CHANGEVALUE, CHANGELIST, DELLIST,getInit }