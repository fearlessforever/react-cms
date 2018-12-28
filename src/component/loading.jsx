import React, { Component } from 'react';

export default class Loading extends Component{
    render(){
        let { show = false } = this.props
        return(
            <div className={ show ? '' : 'hidden' }>
                <img src='/external/img/loading.gif' alt="Loading ... " />
            </div>
        );
    }
}
