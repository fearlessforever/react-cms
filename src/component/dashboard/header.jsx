import React from 'react'

const Header = (props)=>{
  let {title=''} = props
  return(
    <div className="col-lg-12">
      <ol className="breadcrumb">
      <li><button className="link-button a">Home</button></li>
      <li className="active"><span>Dashboard</span></li>
      </ol>
      <h1>{title}</h1>
    </div>
  )
}

export default Header
