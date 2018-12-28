import React , {Component} from 'react'

export default class WatchClickOutside extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if(window.helRoot)
    {
      window.helRoot.addEventListener('click', this.handleClick);
    }

  }

  componentWillUnmount() {
    // remember to remove all events to avoid memory leaks
    if(window.helRoot)
    {
      window.helRoot.removeEventListener('click', this.handleClick);
    }
  }

  handleClick(event) {
    let {container} = this.refs
    const {onClickOutside} = this.props;

    const {target} = event;
    // if there is no proper callback - no point of checking
    if (typeof onClickOutside !== 'function') {
      return;
    }

    // if target is container - container was not clicked outside
    // if container contains clicked target - click was not outside of it
    if (target !== container && !container.contains(target)) {
      onClickOutside(event); // clicked outside - fire callback
    }
  }

  render() {
    let { onClickOutside, componentType= 'div' , children='' , ...props } = this.props
    const MyComponent = componentType
    return (
      <MyComponent {...props} ref="container">
        {children}
      </MyComponent>
    );
  }
}
