import React,{Component} from 'react'
import Header from 'src/component/dashboard/header'
import {
  Box,
  BoxBody
} from 'src/component/dashboard/box'

import {
  CHANGE_ACCESSTOKEN
} from 'src/store/type'
import {connect} from 'react-redux'

let logoutTimeout;


class Logout extends Component{
  componentDidMount(){
    clearTimeout(logoutTimeout)
    logoutTimeout = setTimeout(()=>{
      this.props.dispatch({
        type:CHANGE_ACCESSTOKEN,
        value:''
      })
    },2000)
  }
  render(){
    
    return(
      <div>
        <Header title="Logout" />
        <Box>
          <BoxBody style={{textAlign:'center'}} >
            <h1>Please wait .....</h1>
          </BoxBody>
        </Box>
      </div>
    )
  }
}
export default connect()(Logout)
