import React , {Component} from 'react'
import list from './route.dashboard.list'
import {DashboardLayout} from 'src/page/dashboard'
import {Switch , Route} from 'react-router'
import Error404 from 'src/page/error404'


export default class DashboardRoute extends Component{
  render(){
    let { path , ...props } = this.props
    return(
      <Switch>
        {list.map((val,k)=>{
          return <DashboardLayout {...props} key={k} exact path={path+val.path} component={val.component}  />
        })}
        <Route component={Error404} />
      </Switch>
    )
  }
}
