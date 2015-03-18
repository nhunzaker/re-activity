import Container   from 'widgets/Container'
import Figure      from 'widgets/Figure'
import Icon        from 'widgets/Icon'
import Toolbar     from 'widgets/Toolbar'
import Gallery     from 'widgets/Gallery'
import FabUploader from 'widgets/FabUploader'
import cx          from 'classnames'

import './style'

const Home = React.createClass({

  render() {
    let { user, photos } = this.props.stores

    let photo = user.get('photo')

    return (
      <main className="activity home fill-primary">
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
            <Gallery photos={ photos.state } />
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
    this.props.actions.history.pop()
  }

})

export default Home
