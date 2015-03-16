import Figure   from 'widgets/Figure'
import Uploader from 'widgets/Uploader'
import cx       from 'classnames'

let Login = React.createClass({

  statics: {
    EXIT_TIME: 450
  },

  getInitialState() {
    return {
      exiting: false
    }
  },

  componentWillLeave(callback) {
    this.setState({ exiting: true })
    setTimeout(callback, Login.EXIT_TIME)
  },

  getFigure() {
    let src = this.props.stores.user.get('photo')

    return src ? (<Figure src={ src } avatar={ !this.state.exiting } />) : null
  },

  getClassName() {
    return cx('activity align-center fill-primary', {
      'will-exit' : this.state.exiting
    })
  },

  render() {
    let { user } = this.props.stores

    return (
      <main className={ this.getClassName() }>
        { this.getFigure() }
        <Uploader src={ user.get('photo') } onUpload={ this.onUpload } onConfirm={ this.onConfirm } />
      </main>
    )
  },

  onUpload(photo) {
    this.props.actions.user.login(photo)
  },

  onConfirm() {
    this.props.actions.history.push('home')
  }

})

export default Login
