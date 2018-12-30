import React,{Component} from 'react'
import { withRouter, Redirect } from 'react-router'

class Link extends Component{
  constructor(){
    super(); this.state={redirect:false}
  }
  handleEventOnClick(e){
    e.preventDefault()
    let {match} = this.props
    if(match.url !== e.currentTarget.getAttribute('href') ){
      this.setState({
        redirect:e.currentTarget.getAttribute('href')
      })
    }

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

export default withRouter(Link)
