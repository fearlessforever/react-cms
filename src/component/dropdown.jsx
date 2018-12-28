import React,{Component} from 'react'

export class Dropdown extends Component{

  handleNotifOnBlur()
  {
    if(typeof this.props.onBlur === 'function')
    {
      this.props.onBlur();
    }
  }

  render(){
    let { className='' ,id='',style={},children:MyComponent} = this.props
    style.outline='none'
    return(
      <li
        id={id}
        style={style}
        onBlur={this.handleNotifOnBlur.bind(this)}
        tabIndex="-1" className={className} >
        {MyComponent}
      </li>
    )
  }
}
