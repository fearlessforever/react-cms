import React, { Component } from 'react';

class Error404 extends Component {
	constructor(){
		super();
		this.state={
		};
	}

	goBack(e){
		e.preventDefault();
		window.history.back();
	}

  	render(){
		document.body.className = '';
		document.body.className = 'error-page';
		let error = {code:'404' , message : '' };
		if(typeof this.props.obj !== 'undefined'){
			error = {...error, code:this.props.obj.code,message:this.props.obj.error};
		}
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div id="error-box">
							<div className="row">
							<div className="col-xs-12">
								<div id="error-box-inner"> <img src="/external/img/error-404-v3.png" alt="Have you seen this page?"/> </div>
								<h1> ERROR { error.code }</h1>
								 {error.message ? error.message : <div dangerouslySetInnerHTML={
									{__html: 'Page not found. <br/>If you find this page, let us know.' }

									} />}
								<p> Go back to <a href="/">Homepage</a>. <a href="#####" onClick={this.goBack } >Previous Page</a> </p>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Error404;
