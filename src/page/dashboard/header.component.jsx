import React,{Component} from 'react'
import {connect} from 'react-redux'
import Link from 'src/component/link'
import ClickOutside from 'src/component/click-outside'
import localStore from 'src/utils/local-storage'
import {
  BUTTON_TOGGLE_NAVBAR,
  BUTTON_TOGGLE_NAVBARMINI,
} from 'src/store/type'

import asset from 'src/utils/asset'

class DashboardHeader extends Component{
    handleClick(e)
    {
        e.preventDefault()
        this.props.dispatch({
            type:BUTTON_TOGGLE_NAVBAR,
            value:!this.props.navSmall
        });
        localStore.set('nav-small',!this.props.navSmall)
    }
    handleClick2()
    {
        this.props.dispatch({
            type:BUTTON_TOGGLE_NAVBARMINI,
            value:!this.props.navSmallMini
        });
    }

    render(){
        let {...props} = this.props;
		return(
			<header className="navbar" id="header-navbar">
				<div className="container">
					<a href="/" id="logo" className="navbar-brand">
						<img src={asset("/external/img/logo.png")} alt="Logo" className="normal-logo logo-white"/>
						<img src={asset("/external/img/logo-black.png")} alt="Logo" className="normal-logo logo-black"/>
						<img src={asset("/external/img/logo-small.png")} alt="Logo" className="small-logo hidden-xs hidden-sm hidden"/>
					</a>
					<div className="clearfix">
						<button onClick={this.handleClick2.bind(this)} className="navbar-toggle" data-target=".navbar-ex1-collapse" data-toggle="collapse" type="button">
							<span className="sr-only">Toggle navigation</span>
							<span className="fa fa-bars"></span>
						</button>
						<div className="nav-no-collapse navbar-left pull-left hidden-sm hidden-xs">
						<ul className="nav navbar-nav pull-left">
							<li>
							<a href="clickme" onClick={this.handleClick.bind(this)} className="btn" id="make-small-nav"> <i className="fa fa-bars"></i> </a>
							</li>
						</ul>
						</div>

						<DashboardHeaderNavBar {...props} />
					</div>

				</div>
			</header>
		);
	}
}
// <DashboardHeaderNavBar />

export default connect( store =>{
    return {
        userDetail:store.dashBoard.user,
        messageList:store.dashBoard.messageList,
        notifList:store.dashBoard.notifList,
        menuList:store.dashBoard.menuList,
        navSmall:store.dashBoard.navSmall,
        navSmallMini:store.dashBoard.navSmallMini,
    };
})(DashboardHeader);


class DashboardHeaderNavBar extends Component{
    render(){
        let { userDetail,messageList ,notifList,menuList}=this.props;
        let LIST3 = menuList.map((val , k)=>{
			return <LiDropdownPhoto key={k} obj={val} />
        });
        let LIST2;
		let cntList2 = messageList.length ;
		LIST2 = messageList.map((val,k)=>{
			return <LiDropdownMessage key={k} obj={val} />
        });
        let LIST = notifList.map(( val,k) =>{
            return <LiDropdownNotif key={k} obj={val} />
        }), cntList=notifList.length ;

        return(
            <div className="nav-no-collapse pull-right" id="header-nav">
                <ul className="nav navbar-nav pull-right">
                <ClickOutside componentType="li" onClickOutside={this.toggleSearchBar.bind(this)}
                  className={"mobile-search "+ (this.state.search ? 'active' : '') }
                >
                    <a href="clickme" onClick={this.onClickSearchBar.bind(this)} className="btn">
                      <i className="fa fa-search"></i>
                    </a>
                    <div className="drowdown-search">
                    <form role="search">
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search..." />
                        <i className="fa fa-search nav-search-icon"></i>
                        </div>
                    </form>
                    </div>
                </ClickOutside>
                <ClickOutside componentType="li" onClickOutside={this.handleNotifOnBlur.bind(this)}
                  className={ 'dropdown hidden-xs ' + (this.state.notif ? 'open' : '' )}
                >
                  <a href="clickme" role="button" onClick={this.onClickNotif.bind(this)} className="btn dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-warning"></i> <span className="count">{cntList}</span>
                  </a>
                  <ul className="dropdown-menu notifications-list">
                      <li className="pointer">
                          <div className="pointer-inner"> <div className="arrow"></div> </div>
                      </li>
                      <li className="item-header"> { cntList > 0 ? 'You have '+cntList+' new notifications' : 'Notif Message Not Found' } </li>
                      {LIST}
                      <li className="item-footer"> <a href="clickme" onClick={e=>e.preventDefault()}> View all notifications </a> </li>
                  </ul>
                </ClickOutside>
                <ClickOutside id="view-msg-notif" componentType="li" onClickOutside={this.toggleMessageNotif.bind(this)}
                  className={'dropdown hidden-xs '+ (this.state.messageNotif ? 'open' : '' )}
                >
                  <a href="clickme" role="button" onClick={this.onClickMessageNotif.bind(this)} className="btn dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-envelope-o"></i> <span className="count"> {cntList2} </span>
                  </a>
                  <ul className="dropdown-menu notifications-list messages-list">
                    <li className="pointer"> <div className="pointer-inner"> <div className="arrow"></div> </div> </li>
                     {LIST2}
                    <li className="item-footer"> <a href="clickme" onClick={e=>e.preventDefault()}> View all messages </a> </li>
                  </ul>
                </ClickOutside>
                <li className="hidden-xs">
                  <Link to={'/dashboard/settings'} className="btn" >
                    <i className="fa fa-cog"></i>
                  </Link>
                 </li>
                 <ClickOutside id="view-user-nav" componentType="li" onClickOutside={this.toggleProfileOnBlur.bind(this)}
                   className={'profile-dropdown dropdown '+ (this.state.profileDD ? 'open' : '' )}
                 >
                   <a href="clickme" role="button" onClick={this.onClickProfileDropdown.bind(this)} className="btn dropdown-toggle" data-toggle="dropdown">
                     <img src={asset(userDetail.photo)} alt="User profile" />
                     <span className="hidden-xs">{userDetail.name.substr(0,16)}</span> <b className="caret"></b>
                   </a>
                   <ul className="dropdown-menu ">
                     {LIST3}
                   </ul>
                 </ClickOutside>

                <li className="hidden-xxs"> <a href="clickme" className="btn" onClick={this.clickLogout.bind(this)} > <i className="fa fa-power-off"></i> </a> </li>
                </ul>
			</div>
        );
    }
    //=======================================================================================
    constructor(){
        super();
        this.state={
          notif:false,
          messageNotif:false,
          profileDD:false,
          search:false,
        };
    }
    toggleSearchBar(){
      if(this.state.search)
      this.setState(function(prev){
        return{
          search:!prev.search
        }
      })
    }
    onClickSearchBar(e){
      e.preventDefault()
      this.setState(function(prev){
        return{
          search:!prev.search
        }
      })
    }

    handleNotifOnBlur(){
        if(this.state.notif)
        this.setState({notif:!this.state.notif});
    }
    onClickNotif(e){
        e.preventDefault();
        this.setState({notif:!this.state.notif});
    }
    onClickMessageNotif(e){
      e.preventDefault()
      this.setState(function(prev){
        return{
          messageNotif:!prev.messageNotif
        }
      })
    }

    onClickProfileDropdown(e){
      e.preventDefault()
      this.setState(function(prev){
        return{
          profileDD:!prev.profileDD
        }
      })
    }
    toggleProfileOnBlur(){
      if(this.state.profileDD){
        this.setState(function(prev){
          return{
            profileDD:!prev.profileDD
          }
        })
      }

    }
    toggleMessageNotif(){
      if(this.state.messageNotif)
      this.setState(function(prev){
        return{
          messageNotif:!prev.messageNotif
        }
      })
    }

    clickLogout(e){
        e.preventDefault()
        this.props.dispatch({
          type:'CHANGE_ACCESSTOKEN'
        })
    }

}


//==========================================
const LiDropdownPhoto = (props)=>{
  let {obj}=props
  return(
    <li>
      <Link to={obj.link}>
      <i className={ obj.iconClassname }></i>
        {obj.teks}
      </Link>
    </li>
  )
}

const LiDropdownMessage = (props)=>{
  let { obj } = props
  return(
    <li className="item first-item">
      <a href="clickme" onClick={e=>e.preventDefault()}>
      <img src={asset(obj.pic)} alt={'Photos Profile of ' + obj.name} />
      <span className="content">
      <span className="content-headline">{obj.name}</span>
      <span className="content-text">{obj.teks}</span>
      </span>
      <span className="time"><i className="fa fa-clock-o"></i>{obj.waktu}</span>
      </a>
    </li>
  )
}
const LiDropdownNotif = ( props ) =>{
  let { obj } = props
  return(
    <li className="item">
      <a href="clickme" onClick={e=>e.preventDefault()} >
        <i className={ obj.iconClassname }></i>
        <span className="content">{obj.teks}</span>
        <span className="time"><i className="fa fa-clock-o"></i>{obj.waktu}</span>
      </a>
    </li>
  )
}
