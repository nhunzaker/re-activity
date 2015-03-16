import Main      from 'layouts/Main'
import Microcosm from 'microcosm'
import React     from 'react'

class App extends Microcosm {

  constructor(seed) {
    super(seed)

    this.addActions({
      history : require('actions/history'),
      user    : require('actions/user'),
      photos  : require('actions/photos')
    })

    this.addStores({
      history : require('stores/history'),
      user    : require('stores/user'),
      photos  : require('stores/photos')
    })
  }

  render(el) {
    let component = <Main actions={ this.actions }
                          stores={ this.stores }
                          pathname={ this.stores.history.state.peek() } />

    React.render(component, el)
  }

}

export default App
