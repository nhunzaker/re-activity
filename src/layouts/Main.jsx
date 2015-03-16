import Manifest from 'Manifest'
import React    from 'react/addons'
import Router   from 'react-router'

let TransitionGroup = React.addons.TransitionGroup

let Main = React.createClass({

  propTypes: {
    actions  : React.PropTypes.object,
    pathname : React.PropTypes.string,
    stores   : React.PropTypes.object
  },

  render() {
    let Activity = Manifest.getRoute(this.props.pathname)

    return (
      <TransitionGroup className="main">
        <Activity key={ this.props.pathname } { ...this.props } />
      </TransitionGroup>
    )
  }

})

export default Main
