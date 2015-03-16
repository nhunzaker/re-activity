import Store     from 'microcosm/store'
import Immutable from 'immutable'

class History extends Store {

  getInitialState() {
    return Immutable.Stack([ window.location.pathname.slice(1) ])
  }

  register({ history }) {
    return {
      [history.push] : this.push,
      [history.pop]  : this.pop
    }
  }

  push(url) {
    window.history.pushState(null, null, url)
    this.state = this.state.push(url)
  }

  pop() {
    window.history.back()
    this.state = this.state.pop()
  }

}

export default History
