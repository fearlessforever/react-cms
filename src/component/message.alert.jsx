import React, { Component } from 'react';

class MessageAlert extends Component {
	//<div dangerouslySetInnerHTML={{__html: this.props.pesan_error}} className={this.showHide()} />

	handleClick(){
		if(typeof this.props.hide === 'function')
		this.props.hide();
	}

	render() {
		let {option} = this.props,OPTION=Object.assign({},{message:'',className:'alert alert-default',header:'Error '} , option);

    	return (
    		<div className={OPTION.className}>
    			<strong>{OPTION.header} </strong>
          {OPTION.message}
          <button onClick={this.handleClick.bind(this) } className="close" data-dismiss="alert">&times;</button>
    		</div>
    	);
  	}
}

export default MessageAlert;
