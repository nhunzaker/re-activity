import Figure   from 'widgets/Figure'
import Uploader from 'widgets/Uploader'
import cx       from 'classnames'

const EXIT_TIME = 450
const baseClass = 'activity flex-grow align-center fill-primary login'

const Login = React.createClass({

  getInitialState() {
    return {
      exiting: false
    }
  },

  componentWillLeave(callback) {
    this.setState({ exiting: true })
    setTimeout(callback, EXIT_TIME)
  },

  getFigure() {
    let src = this.props.stores.user.get('photo')

    return src ? (<Figure src={ src } avatar={ !this.state.exiting } />) : null
  },

  render() {
    let { actions, stores } = this.props

    let src = stores.user.get('photo')

    let className = cx('activity flex-grow align-center fill-primary login', {
      'will-exit' : this.state.exiting
    })

    return (
      <main className={ className }>
        { this.getFigure() }
        <Uploader src={ src } onUpload={ actions.user.login } onConfirm={ this.onConfirm } />
      </main>
    )
  },

  onConfirm() {
    this.props.actions.history.push('home')
  }

})

export default Login
