import React from 'react'
import {Route , Redirect } from 'react-router'
import DashboardConfig from 'src/page/dashboard/config.component'
import DashboardHeader from 'src/page/dashboard/header.component'
import DashboardFooter from 'src/page/dashboard/footer.component'
import DashboardSidebar from 'src/page/dashboard/sidebar.component'

export const DashboardLayout = ({component: Component, ...rest}) => {
  let { accesstoken='' } = rest
  if(!accesstoken){
    return <Redirect to='/' />
  }

  return (
    <Route {...rest} render={matchProps => (
      <div id="theme-wrapper">
      <DashboardHeader />
      <DashboardConfig />

      <div id="page-wrapper" className={'container' + ( rest.navSmall ? ' nav-small ' : '') }>
          <div className="row">
              <DashboardSidebar />
              <div id="content-wrapper">
                  <Component {...rest} {...matchProps} />
              </div>
              <DashboardFooter />
          </div>
      </div>
      </div>
    )} />
  )
};
