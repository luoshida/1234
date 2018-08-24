import { CHANGE_VALUE, CHANGE_LIST, DEL_LIST, INIT_LOAD } from './actionTypes.js';
let Default = {
	list:['xx','yy'],
	value:'4444'
}
// reducer是一个纯函数-
// 给定固定的输入，就会有固定的输出，不能改变参数，
// 纯函数不能系统时间，随机数等不固定的值，
// reducer只处理逻辑不改变值，数据的改变由store来负责
// action.type在整个数据中必须唯一
export default (state=Default,action)=>{
	// console.log(action);
	if (action.type == CHANGE_VALUE) {
		let newState = JSON.parse(JSON.stringify(state));
		newState.value = action.payload;
		return newState;
	}
	if (action.type == CHANGE_LIST) {
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.push(state.value);
		newState.value = '';
		return newState;
	}
	if (action.type == DEL_LIST) {
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState;
	}
	if(action.type == INIT_LOAD){

		const newState = JSON.parse(JSON.stringify(state));

		newState.list = action.payload; 

		return newState
	}
	return state
};