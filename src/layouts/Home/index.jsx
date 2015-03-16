import Container   from 'widgets/Container'
import Figure      from 'widgets/Figure'
import Icon        from 'widgets/Icon'
import Toolbar     from 'widgets/Toolbar'
import Gallery     from 'widgets/Gallery'
import FabUploader from 'widgets/FabUploader'
import cx          from 'classnames'

import './style'

const EXIT_TIME = 450
const baseClass = 'activity flex-grow fill-primary home'

const Home = React.createClass({

  getInitialState() {
    return {
      exiting : false
    }
  },

  componentWillLeave(callback) {
    this.setState({ exiting: true })
    setTimeout(callback, EXIT_TIME)
  },

  getClassName() {
    return cx({
      [baseClass] : true,
      'home-exit' : this.state.exiting
    })
  },

  render() {
    let { user, photos } = this.props.stores

    let photo = user.get('photo')

    return (
      <main className={ this.getClassName() }>
        <Toolbar className="is-absolute color-white">
          <a href="home" onClick={ this._onNav }><Icon type="arrow-back" /></a>

          <Toolbar.Actions>
            <Icon type="more-vertical" />
          </Toolbar.Actions>
        </Toolbar>

        <Figure src={ photo } />

        <Container>
          <FabUploader onUpload={ this._onUpload }  />

          <div className="home-body margin-10-right">
            <Gallery photos={ photos } />
          </div>
        </Container>
      </main>
    )
  },

  _onUpload(upload) {
    this.props.actions.photos.add(upload)
  },

  _onNav(e) {
    e.preventDefault()
    this.props.actions.history.push('')
  }

})

export default Home
