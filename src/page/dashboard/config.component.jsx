import React,{Component} from 'react'
import {connect} from 'react-redux'

//import wait from '../../load/wait'
import localStore from 'src/utils/local-storage'
import {
  BUTTON_TOGGLE_NAVBAR,
} from 'src/store/type'
import ClickOutside from 'src/component/click-outside'

class DashboardConfig extends Component{
    constructor()
    {
        super();
        this.state ={
            show:false
        };
    }
    async componentWillMount(){
      // SET theme
      let temp = await localStore.get('body-tema')
      document.body.classList.add( temp ) ;
      temp = await localStore.get('nav-small')
      this.props.dispatch({
        type:BUTTON_TOGGLE_NAVBAR,
        value:(temp === 'true' ? true : false)
      })
    }
    toggleOnBlur()
    {
        if(this.state.show){
          this.setState(function(prev){
            return {show:!prev.show}
          });
        }

    }
    toggleShowConfig(e)
    {
      e.preventDefault()
      this.setState(function(prev){
        return {show:!prev.show}
      });
    }

    render(){
        const LIST = this.props.dashConfig.list.map( (val,k) => <LiConfigList key={k} obj={val} /> )
        const LIST2 = this.props.dashConfig.color.map( (val,k) => <LiConfigColor key={k} obj={val} /> )
        return (
            <ClickOutside id="config-tool" className={this.state.show?'opened':'closed'}
              onClickOutside={this.toggleOnBlur.bind(this)}
            >
              <a href="clickme" id="config-tool-cog" onClick={this.toggleShowConfig.bind(this)} > <i className="fa fa-cog"></i> </a>
              <div id="config-tool-options">
                  <h4>Layout Options</h4>
                  <ul> {LIST} </ul>
                  <br/>
                  <h4>Skin Color</h4>
                  <ul id="skin-colors" className="clearfix"> {LIST2} </ul>
              </div>
            </ClickOutside>
        );
    }
}

export default connect( store =>{
    return {dashConfig:store.dashBoard.config};
})(DashboardConfig)

class LiConfigList extends Component{
    constructor(){
        super();
        this.state={checkBox:false};
    }
    async componentWillMount()
    {
        let { obj } = this.props ,temp ;
        temp = await localStore.get(obj.id)
        this.setState({
          checkBox: temp === 'true' ? true : false
        })

    }
    async handleClick(e)
    {
        let id = e.currentTarget.getAttribute('data-id'),value = this.state.checkBox;
        await localStore.set(id,!value)
        this.setState({
          checkBox:!value
        })
    }

    render(){
        let { obj } = this.props ;

      switch( obj.id ){
  			case 'config-fixed-header':
  				let KLASS = document.body.getAttribute('class') ;
          KLASS = KLASS == null ? '' : KLASS ;
  				KLASS = this.state.checkBox ? (KLASS.match(/fixed-header/) ? KLASS : KLASS + ' fixed-header'  )  : KLASS.replace(/fixed-header/g,'') ;
  				document.body.className = KLASS;
  				break;
  			case 'config-fixed-footer':
  				this.state.checkBox === true ? document.body.classList.add('fixed-footer') : document.body.classList.remove('fixed-footer');
  				break;
  			case 'config-boxed-layout':
  				this.state.checkBox === true ? document.body.classList.add('boxed-layout') : document.body.classList.remove('boxed-layout');
  				break;
			default:break;
		}

        return(
            <li>
                <div className="checkbox-nice" onClick={this.handleClick.bind(this)} data-id={ obj.id}>
                <input onChange={e=>e} type="checkbox" id={ obj.id} checked={this.state.checkBox ? true : false} />
                <label > { obj.name} </label>
                </div>
            </li>
        );
    }
}

class LiConfigColor extends Component{

    async handleClick(e){
        let skin = e.currentTarget.getAttribute('data-skin'),temp ;
        temp = await localStore.get('body-tema')
        document.body.classList.add( skin ) ;
        document.body.classList.remove( temp );
        await localStore.set('body-tema',skin)
    }

    render()
    {
        let { obj } = this.props, kelas = 'skin-changer link-button ' + obj.klass ;
        return(
            <li>
                <button onClick={this.handleClick.bind(this)}
                    className={kelas} data-skin={obj.name}
                    data-toggle="tooltip" title={obj.title}
                    style={obj.stile} > </button>
            </li>
        );
    }
}
