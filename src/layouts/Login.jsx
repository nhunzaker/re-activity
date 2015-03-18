import Figure   from 'widgets/Figure'
import Uploader from 'widgets/Uploader'

let Login = React.createClass({

  getFigure(user) {
    let src = user.get('photo')
    return src ? (<Figure src={ src } avatar={ !this.props.exiting } />)
               : null
  },

  render() {
    let { user } = this.props.stores

    return (
      <main className="activity align-center fill-primary">
        { this.getFigure(user) }
        <Uploader src={ user.get('photo') }
                  onUpload={ this.onUpload }
                  onConfirm={ this.onConfirm } />
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
