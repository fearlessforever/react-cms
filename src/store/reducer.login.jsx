import {
	CHANGE_ACCESSTOKEN,
	LOADING,
} from './type'

const loginInfo = ( state ={
	accesstoken:'',
	loaded:false,
},action) => {
	let { value } = action
	switch(action.type){
		case CHANGE_ACCESSTOKEN :
			value =  typeof value === 'undefined' ? '' : value
			state = {...state , accesstoken : value };
			break;
		case LOADING:
			value =  typeof value === 'undefined' ? false : value
			state = {...state , loaded: (value ? true : false) };
			break;
		default:break;
	}
	return state;
};

export default loginInfo
