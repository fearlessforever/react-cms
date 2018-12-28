import React, { Component } from 'react'
import {Router,Route,Switch } from 'react-router'
//import createHistory from 'history/createBrowserHistory'
//import createHistory from 'history/createHashHistory'
import {connect} from 'react-redux'

import LoginPage from 'src/page/login'
//import Dashboard from '../views/Dashboard'
import Error404 from 'src/page/error404'
import DashboardRoute from './route.dashboard'
import {history} from './route.history'

class CoreRoute extends Component{
    render() {
        return (
            <Router history={ history }>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <DashboardRoute
                      path="/dashboard"
                      accesstoken={this.props.accesstoken}
                      navSmall={this.props.navSmall} 
                    />
                    <Route component={Error404} />
                </Switch>
            </Router>
        );
    }
}

export default connect( store =>{
  return{
    accesstoken:store.loginInfo.accesstoken,
    navSmall:store.dashBoard.navSmall,
  }
})(CoreRoute);
