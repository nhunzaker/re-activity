import React from 'react'
import cx    from 'classnames'

let Window = React.createClass({

  statics: {
    EXIT_TIME  : 700,
    ENTER_TIME : 700
  },

  getInitialState() {
    return {
      exiting  : false,
      entering : false
    }
  },

  componentWillLeave(callback) {
    this.setState({ exiting: true })
    setTimeout(callback, Window.EXIT_TIME)
  },

  componentWillEnter(callback) {
    this.setState({ entering: true })
    setTimeout(callback, Window.ENTERING_TIME)
  },

  getChildren() {
    let { exiting, entering } = this.state

    let child = React.Children.only(this.props.children)

    return React.cloneElement(child, { exiting, entering })
  },

  getClassName() {
    return cx('window', {
      'will-enter' : this.props.exiting,
      'will-exit'  : this.props.exiting
    })
  },

  render() {
    return (
      <div className={ this.getClassName() }>
        { this.getChildren() }
      </div>
    )
  }

})

export default Window
