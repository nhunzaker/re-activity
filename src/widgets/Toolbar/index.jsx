import Actions from './actions'
import Pure    from 'react-immutable-render-mixin'
import React   from 'react'
import cx      from 'classnames'

let Toolbar = React.createClass({
  mixins: [ Pure ],

  statics: { Actions },

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      className: '',
      fill: false
    }
  },

  render() {
    let { absolute, className, color, fill, shadow } = this.props

    let css = cx('toolbar', className, cx({
      [`fill-${ fill }`]     : fill,
      [`color-${ color }`]   : color,
      [`shadow-${ shadow }`] : shadow,
    }))

    return (
      <header className={ css }>
        { this.props.children }
      </header>
    )
  }
})

export default Toolbar
