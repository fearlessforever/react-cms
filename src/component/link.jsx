import React,{Component} from 'react'
import { Redirect } from 'react-router'

export default class Link extends Component{
  constructor(){
    super(); this.state={redirect:false}
  }
  handleEventOnClick(e){
    e.preventDefault()
    this.setState({
      redirect:e.currentTarget.getAttribute('href')
    })
  }

  render(){
    if(this.state.redirect){
      return <Redirect push to={this.state.redirect} />
    }
    let { children='',to='#', ...props } = this.props
    return(
      <a onClick={this.handleEventOnClick.bind(this)} {...props} href={to}  >
        {children}
      </a>
    )
  }
}
