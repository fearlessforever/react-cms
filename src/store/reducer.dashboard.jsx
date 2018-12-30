import LS from 'src/utils/local-storage'
import {
	SIDEBAR_CLICKED,
	UPDATE_DASHBOARDINFO,
	BUTTON_TOGGLE_NAVBAR,
	BUTTON_TOGGLE_NAVBARMINI,
	UPDATE_LOAD_USERINFO,
	UPDATE_PAGE,
	UPDATE_PAGE_DATA,
	UPDATE_PAGE_PERMISSION,
	PAGE_LOADING,
	PAGE_AJAX_ERROR,
	PAGE_ERROR,
	TOGGLE_MODAL,
	UPDATE_MODAL_BODY,
	UPDATE_MODAL_SIZE,
	TOGGLE_MODAL2,
	UPDATE_MODAL_BODY2,
	UPDATE_MODAL_SIZE2,
	UPDATE_SIDEBAR_LIST,
	UPDATE_MESSAGE_NOTIF,
} from './type'

const dashBoard = (state={
	user:{photo:'/external/img/no_image.jpg',name:'No Name'},
	accesstoken:{expiredIn:0},
	notif:{pesan:0,notif:0},
	page:'',
	pageIsLoading:false ,
	pageData:false,
	pagePermission:{
		create:false,update:false,delete:false
	},
	loadUserinfo:false,
	navSmall:false,
	collapsedSidebar:false,
	navSmallMini:false,
	config:{
		list:[
			{id:'config-fixed-header' ,name:'Fixed Header'}
			//,{id:'config-fixed-sidebar' ,name:'Fixed Left Menu'}
			,{id:'config-fixed-footer' ,name:'Fixed Footer'}
			,{id:'config-boxed-layout' ,name:'Boxed Layout'}
		   // ,{id:'config-rtl-layout' ,name:'Right-to-Left'}
		],
		color:[
			{title:'Default' ,klass:'' ,name:'theme-default',stile:{backgroundColor: '#34495e'} }
			,{title:'White/Green' ,klass:'' ,name:'theme-white',stile:{backgroundColor: '#2ecc71'} }
			,{title:'Gradient' ,klass:'blue-gradient',name:'theme-blue-gradient',stile:{} }
			,{title:'Green Sea' ,klass:'' ,name:'theme-turquoise',stile:{backgroundColor: '#1abc9c'}}
			,{title:'Amethyst' ,klass:'' ,name:'theme-amethyst',stile:{backgroundColor: '#9b59b6'}}
			,{title:'Blue' ,klass:'' ,name:'theme-blue',stile:{backgroundColor: '#2980b9'}}
			,{title:'Red' ,klass:'' ,name:'theme-red',stile:{backgroundColor: '#e74c3c'}}
			,{title:'White/Blue' ,klass:'' ,name:'theme-whbl',stile:{backgroundColor: '#3498db'} }
		]
	},
	messageList:[
		{name:'George Clooney',pic:'/external/img/no_image.jpg',teks:"Look, Don't make it right for Marsellus to throw...",waktu:'13 min.'}
		,{name:'Emma Watson',pic:'/external/img/no_image.jpg',teks:"Look, Don't make it right for Marsellus to throw...",waktu:'13 min.'}
		,{name:'Robert Downey Jr.',pic:'/external/img/no_image.jpg',teks:"Look, Don't make it right for Marsellus to throw...",waktu:'13 min.'}
	],
	menuList:[
		{link:'/dashboard/profiles',teks:'Profile',iconClassname:'fa fa-user'}
		,{link:'/dashboard/settings',teks:'Settings',iconClassname:'fa fa-cog'}
		,{link:'/dashboard/messagelists',teks:'Messages',iconClassname:'fa fa-envelope-o'}
		,{link:'/dashboard/logout',teks:'Logout',iconClassname:'fa fa-power-off'}
	],
	notifList:[
		{iconClassname:'fa fa-comment',teks:'New comment on ‘Awesome P...',waktu:'13 min.'}
		,{iconClassname:'fa fa-plus',teks:'New user registration',waktu:'13 min.'}
		,{iconClassname:'fa fa-envelope',teks:'New Message from George',waktu:'13 min.'}
		,{iconClassname:'fa fa-shopping-cart',teks:'New purchase',waktu:'13 min.'}
		,{iconClassname:'fa fa-eye',teks:'New order',waktu:'13 min.'}
	],
	errorData:{},
	ajaxErrors:[],
	table:[
		{iconClassname:'fa fa-dashboard',link:'index.html',name:'Dashboard',itung:28},
	],
	modalContent:{
		body:'',header:'',footer:'',
	},
	modalOpen:false,
	modalSize:'sm',
	modalContent2:{
		body:'',header:'',footer:'',
	},
	modalOpen2:false,
	modalSize2:'sm',
},action)=>{
	switch(action.type){
		case UPDATE_MESSAGE_NOTIF:
			state = {...state ,messageList:action.value };
			break;
		case SIDEBAR_CLICKED:
		state = {...state ,collapsedSidebar:action.value };
			break;
		case UPDATE_DASHBOARDINFO:
			state = Object.assign({},state,action.value);
			break;
		case BUTTON_TOGGLE_NAVBAR:
			LS.set('navSmall', action.value);
			state = {...state,navSmall:action.value };
			break;
		case BUTTON_TOGGLE_NAVBARMINI:
			state = {...state,navSmallMini:action.value };
			break;
		case UPDATE_LOAD_USERINFO:
			state = {...state,loadUserinfo:action.value};
			break;
		case UPDATE_PAGE:
			state = {...state,page:action.value };
			break;
		case UPDATE_PAGE_DATA:
			state = {...state,pageData:action.value };
			break;
		case UPDATE_PAGE_PERMISSION:
			action.value = Object.assign({create:false,update:false,delete:false},action.value)
			state = {...state,pagePermission:action.value };
			break;
		case PAGE_LOADING:
			state = {...state,pageIsLoading:true,page:'',pageData:false};
			break;
		case PAGE_AJAX_ERROR:
			state = {...state,ajaxErrors:action.value };
			break;
		case PAGE_ERROR:
			state = {...state,errorData:action.value,pageIsLoading:false,page:'error404'};
			break;
		case UPDATE_SIDEBAR_LIST:
			if(action.value.length < 1)break;
			state = {...state,table:action.value};
			break;
		//======================== MODAL ================================
		case TOGGLE_MODAL:
			state = {...state,modalOpen:(action.value === 'false' ? false : true ) };
			break;
		case UPDATE_MODAL_BODY:
			state = {...state,modalContent:action.value};
			break;
		case UPDATE_MODAL_SIZE:
			state = {...state,modalSize:(action.value === 'lg' ? 'lg' : 'sm')};
			break;
		case TOGGLE_MODAL2:
			state = {...state,modalOpen2:( action.value ? true: false ) };
			break;
		case UPDATE_MODAL_BODY2:
			state = {...state,modalContent2:action.value};
			break;
		case UPDATE_MODAL_SIZE2:
			state = {...state,modalSize2:(action.value === 'lg' ? 'lg' : 'sm')};
			break;
		default:break;
	}
	return state;
};

export default dashBoard
