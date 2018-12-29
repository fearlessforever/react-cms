import React from 'react'

const MyTable = (props)=>{
  let {header,body,...rest} = props
  let table = {header:'',body:''}
  table.header = header.map((val,k)=>{
    return(
      <th key={`thead-${k}`}>{val}</th>
    )
  })
  if( body.length > 0){
    table.body = body.map((val,k)=>{
      return(
        <tr key={`tr-${k}`} >{val.map((val2,kk)=>{
          return <td key={`td-${k}-${kk}`} >{val2}</td>
        })}</tr>
      )
    })
  }else{
    table.body = <tr><td colSpan={table.header.length}>No Data</td></tr>
  }

  return(
    <div className="table-responsive">
    <table {...rest}>
      <thead>
        <tr>{table.header}</tr>
      </thead>
      <tbody>
        {table.body}
      </tbody>
    </table>
    </div>
  )
}

export default MyTable
