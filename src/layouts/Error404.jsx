import Icon    from 'widgets/Icon'
import React   from 'react'
import Toolbar from 'widgets/Toolbar'

let Error404 = React.createClass({

  componentWillLeave(callback) {
    this.getDOMNode().classList.add('will-leave')
    setTimeout(callback, 400);
  },

  render() {
    return (
      <main className="activity">
        <Toolbar fill="accent" color="white" shadow="1">
          <Icon type="arrow-back" onClick={ this._onClick } />
          <h2 className="type-display-2 pad-2 pad-8-top">Error 404</h2>
        </Toolbar>

        <section className="pad-2">
          <p>This page doesn't exist!</p>
        </section>
      </main>
    )
  },

  _onClick() {
    this.props.actions.history.push('')
  }

})

export default Error404
