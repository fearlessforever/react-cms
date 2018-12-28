const defaultState = {
	background_img:false,
	logo_img:'/external/img/logo.png'
}

const loginPage = ( state = defaultState ,action) => {
	switch(action.type){
		case 'LOAD_CONFIG':
			if(action.value){
				let {value} = action;
				value.background_img= value.background_img ? value.background_img : defaultState.background_img;
				value.logo_img= value.logo_img ? value.logo_img : defaultState.logo_img;
				state = Object.assign({},state,value);
			}

			break;
		default:break;
	}
	return state;
};

export default loginPage
