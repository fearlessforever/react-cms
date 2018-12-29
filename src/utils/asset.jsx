const asset = ( value )=>{
  if( value.match(/^\/\/|http/i) ){
    return value
  }
  let { REACT_APP_HOMEPAGE:home='' } = process.env
  return home + '/' + cleanSlash(value)
}

const myRegex = /^[/]+|[/]+$/g
function cleanSlash( value ) {
    return value.toString().replace(myRegex, '');
};

export default asset
