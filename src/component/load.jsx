import React,{Component} from 'react'
import logo from 'src/logo.svg';
import 'src/App.css';

export default class Load extends Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  }
}
