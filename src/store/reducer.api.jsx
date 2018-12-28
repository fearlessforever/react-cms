const Api = ( state ={
  url:( process.env.NODE_ENV !== 'production' ? '//localhost:8000' : '//git-api.jouningakure.com') ,
},action) => {
	return state;
};

export default Api
