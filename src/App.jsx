import Main      from 'layouts/Main'
import Microcosm from 'microcosm'
import React     from 'react'
import History   from 'services/History'

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

    this.history = new History({
      onPopState: this.actions.history.refresh
    })
  }

  render(el) {
    let component = <Main actions={ this.actions }
                          stores={ this.stores }
                          pathname={ this.stores.history.state } />

    React.render(component, el)
  }

}

export default App
