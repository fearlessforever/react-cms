import React,{Component} from 'react'
import {connect} from 'react-redux'
import Link from 'src/component/link'
import asset from 'src/utils/asset'

class DashboardSidebar extends Component{
    render(){
        let userDetail = {...this.props.userDetail};
        let {sidebarList,...props} = this.props;
        userDetail.name = userDetail.name.substr(0,8);
        let LIST = this.props.sidebarList.map( (val,k) => {
            return <LiDropdownSidebar key={k} obj={val} {...props} />;
        });
        return(
            <div id="nav-col">
                <section id="col-left" className="col-left-nano">
                <div id="col-left-inner" className="col-left-nano-content">
                    <div id="user-left-box" className="clearfix hidden-sm hidden-xs">
                        <img alt="" src={asset(userDetail.photo)} />
                        <div className="user-box">
                            <span className="name"> Welcome<br/> {userDetail.name} </span>
                            <span className="status"> <i className="fa fa-circle"></i> Online </span>
                        </div>
                    </div>
                    <div className={'collapse navbar-collapse navbar-ex1-collapse' + (this.props.navSmallMini ? ' in' : '') } id="sidebar-nav">
                        <ul className="nav nav-pills nav-stacked" >
                            {LIST}
                        </ul>
                    </div>
                </div>
                </section>
			</div>
        );
    }
}

export default connect( store => {
    return {
        navSmallMini:store.dashBoard.navSmallMini,
        userDetail:store.dashBoard.user,
        sidebarList:store.dashBoard.table,
    };
})(DashboardSidebar);

//====================================================================

class LiDropdownSidebar extends Component{
    constructor(){
        super();
        this.state={
            display:false
        };
    }
    handleClick(e){
        e.preventDefault();
    		this.setState({
    			display:!this.state.display
        });
    }
    handleClickPage(e){
        if(this.props.navSmallMini)
        this.props.dispatch({
            type:'BUTTON_TOGGLE_NAVBARMINI',
            value:!this.props.navSmallMini
        });
        //alert('aga')
    }
    onLeaveFocus(){
        if(this.state.display)
        setTimeout( ()=>{
            this.setState({display:!this.state.display});
        } , 1 )
    }
    /* componentDidMount(){
        global.document.addEventListener( 'click', this.handleClickOutsideLI.bind(this), false )
    }
    componentWillUnmount(){
        global.document.removeEventListener( 'click', this.handleClickOutsideLI.bind(this), false )
    } */

    render(){
      const {obj,...props} = this.props;
  		const LIST = obj.submenu ? obj.submenu.map((val,k) =>{
  			return <LiDropdownSidebar key={k} obj={val} {...props} />
  		}) :'';

  		let KELAS ='',kelasDropdown='';
  		if(LIST){
  			KELAS += ' dropdown-toggle';
  		}

		  if(this.state.display){
			  kelasDropdown += 'open';
      }
      let link = '/dashboard/'+this.props.obj.link ;

      let option = {
        to:link,
        title:this.props.obj.name,
        className:KELAS,
      }
      if(LIST){
        option.onClick = this.handleClick.bind(this)
      }

      return(
          <li className={kelasDropdown}  >
              <Link {...option}>
                <i className={ (this.props.obj.iconClassname ? this.props.obj.iconClassname : '' )}></i>
                <span>{this.props.obj.name}</span>
                {LIST ? <i className="fa fa-chevron-circle-right drop-icon"></i> : '' }
                {this.props.obj.itung ? <span className="label label-info label-circle pull-right">{this.props.obj.itung}</span> : '' }
                {this.props.obj.pesan ? <span className={'label '+this.props.obj.pesan.klass+' pull-right'} > {this.props.obj.pesan.teks} </span> : ''}
              </Link>
              { LIST ?
                  <ul className="submenu" style={this.state.display ? {display:'block'} : {} } >
                      {LIST}
                  </ul> : '' }
          </li>
      );
    }
}

/*

<a title={this.props.obj.name} href={LIST ? '' : link } className={KELAS} onClick={LIST ? this.handleClick.bind(this) : this.handleClickPage.bind(this) }>
    <i className={ (this.props.obj.iconClassname ? this.props.obj.iconClassname : '' )}></i>
    <span>{this.props.obj.name}</span>
    {LIST ? <i className="fa fa-chevron-circle-right drop-icon"></i> : '' }
    {this.props.obj.itung ? <span className="label label-info label-circle pull-right">{this.props.obj.itung}</span> : '' }
    {this.props.obj.pesan ? <span className={'label '+this.props.obj.pesan.klass+' pull-right'} > {this.props.obj.pesan.teks} </span> : ''}
</a>
*/
