import React from 'react'

const Info = (props)=>{
  return(
    <div className="main-box infographic-box">
      <i className={props.iconClassname}></i>
      <span className="headline">{props.headline}</span>
      <span className="value">
        {props.symbol ? <span dangerouslySetInnerHTML={{__html: props.symbol}} /> : '' }
        <span className="timer" >{props.value}</span>
      </span>
    </div>
  )
}

export default Info
