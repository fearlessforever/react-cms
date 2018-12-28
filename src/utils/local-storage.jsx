const ls = function(){
    this.set = async function(a,b){
        if (typeof(Storage) !== "undefined") {
            return await window.localStorage.setItem(a,b);
        }else{
            console.log('NO STORAGE');
            return Promise.reject('No Storage');
        }
	}

	this.get = async function (a){
        if (typeof(Storage) !== "undefined") {
            return await window.localStorage.getItem(a)
        }else{
            console.log('NO STORAGE');
            return Promise.reject('No Storage');
        }
	}
	this.remove = async function (a){
        if (typeof(Storage) !== "undefined") {
            return await window.localStorage.removeItem(a);
        }else{
            console.log('NO STORAGE');
            return Promise.reject('No Storage');
        }
    }

	return this;
}
const LS = new ls();
export default LS;
