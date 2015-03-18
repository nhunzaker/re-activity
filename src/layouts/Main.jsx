import Manifest from 'Manifest'
import React    from 'react/addons'
import Window   from 'widgets/Window'

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
        <Window key={ this.props.pathname }>
          <Activity { ...this.props } />
        </Window>
      </TransitionGroup>
    )
  }

})

export default Main
