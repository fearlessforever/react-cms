import React,{Component} from 'react'

export default function(RealComponent){
  return function(props){
    return <Loader component={RealComponent} {...props} />
  }
}

class Loader extends Component{
  constructor(){
    super()
    this.state={
      loaded:false
    }
  }
  async componentDidMount(){
    let { component } = this.props
    let realComponent = await component.then(({default:value}) =>{
      return value
    })
    this.setState({
      loaded:realComponent
    })
  }

  render(){
    if(this.state.loaded){
      let {component , ...rest}=this.props
      let LoadedComponent = this.state.loaded
      return <LoadedComponent {...rest} />
    }

    return(
      <div style={{textAlign:'center'}}>
        <img alt="Loading...." src={'/external/img/loading.gif'} />
      </div>
    )
  }
}
