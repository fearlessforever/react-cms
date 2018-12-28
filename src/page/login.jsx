import React, { Component } from 'react';
import MessageAlert from 'src/component/message.alert';
import Loading from 'src/component/loading';
import { changeAT } from 'src/store/action.login'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class Login extends Component{
  constructor(){
    super();
    this.state={
      isDisabled:false,
      isLoggedIn:false,
      loading:false,
      alert:{
          message:'',
          className:'hidden',
          header:'Error'
      }
    };

  }

  render() {
    if(this.state.isLoggedIn)
    {
      return <Redirect to={'/dashboard'} />
    }

    let { loginPage } = this.props;

    return (
      <div id="login-full-wrapper" >
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    <div id="login-box" className="tambahan">
                        <div id="login-box-holder" >
                            <div className="row">
                            <div className="col-xs-12">
            <header id="login-header">
                <div id="login-logo">
                    { loginPage.logo_img ? <img alt="" src={loginPage.logo_img}  /> : <img alt="" /> }
                </div>
            </header>
                            <div id="login-box-inner">
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                    <input onKeyPress={this.handleKeyPress.bind(this)} id="loginmail" disabled={this.state.isDisabled} name="username" ref="username" type="text" placeholder="Type Your Username Or Email Here" className="form-control" />
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-key"></i></span>
                    <input onKeyPress={this.handleKeyPress.bind(this)} id="loginpass" disabled={this.state.isDisabled} name="password" ref="password" type="password" placeholder="Type Your Password" className="form-control" />
                </div>
                <div id="remember-me-wrapper">
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="checkbox-nice">
                                <input type="checkbox" id="remember-me" name="remember" /> <label htmlFor="remember-me"> Remember Me </label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div className="row">
                <div className="col-xs-12">
                    <button disabled={this.state.isDisabled} onClick={this.handleSubmit.bind(this)} className="btn btn-success col-xs-12" type="submit"> Login </button>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 social-text">
                  <MessageAlert hide={this.alertHide.bind(this)} option={this.state.alert} />
                  <Loading show={this.state.loading} />
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <a className="btn btn-primary col-xs-12 btn-facebook" rel="noopener noreferrer" target="_blank" href="https://github.com/fearlessforever"><i className="fa fa-facebook"></i> Facebook</a>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <a className="btn btn-primary col-xs-12 btn-twitter" rel="noopener noreferrer" target="_blank" href="https://github.com/fearlessforever"> <i className="fa fa-twitter"></i> Twitter </a>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <a href="/tes"><i > {this.state.nama_system} </i></a>
                </div>
            </div>


                            </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  componentWillUnmount(){
	  document.body.removeAttribute("style");
  }

  alertHide(){
    this.setState(function(prev){
      return{
        alert:{...prev.alert,className:'hide'}
      }
    })
  }

  componentDidMount(){
    document.body.removeAttribute("style");
    let { loginPage } = this.props;
    if(loginPage.background_img){
        document.body.style.background = 'url('+loginPage.background_img+') fixed no-repeat center' ;
    }
  }


  handleKeyPress(e){
    if(e.which === 13){
      this.handleSubmit();
    }
  }

  componentWillMount(){
    let {login} = this.props
    if(login.accesstoken){
      this.setState({
        isDisabled:true,
        alert:{
          message:'Please wait .. redirecting ...',
          header:'Logged in',
          className:'alert alert-success'
        }
      })
      setTimeout(()=>{
        this.setState({
          isLoggedIn:true
        })
      },2000)
    }
  }

  handleClickAlert(){
    let {alertObject}= this.state ,temp = { alertObject , className:'hidden'};
    this.setState({
        alertObject:temp
    });
  }
  handleSubmit(){
    this.setState({
      loading:true,isDisabled:true
    })
    setTimeout(()=>{
      this.props.changeAccessToken('baksfkabsfklabslkfa')
      this.setState({
        loading:false,isDisabled:false,
        isLoggedIn:true
      })

    },3000)
  }
  //================================ END =============================
}

export default connect( store => {
  return {
      login:store.loginInfo,
      loginPage:store.loginPage
    };
} , dispatch => {
  return {
    changeAccessToken: (value) => {
      dispatch(changeAT(value))
    }
  }
})(Login)
