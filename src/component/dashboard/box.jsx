import React from 'react'

export const Box = (props)=>{
  let {children,...rest}=props
  return(
    <div {...rest} className="main-box clearfix">
    {children}
    </div>
  )
}

export const BoxHeader = (props)=>{
  let {children,...rest}=props
  return(
    <header {...rest} className="main-box-header clearfix">
      {children}
    </header>
  )
}

export const BoxBody = (props)=>{
  let {children,...rest}=props
  return(
    <div {...rest} className="main-box-body clearfix">
      {children}
    </div>
  )
}
