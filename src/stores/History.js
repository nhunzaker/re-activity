import Store from 'microcosm/store'

class History extends Store {

  get state() {
    return decodeURI(window.location.pathname + window.location.search).slice(1)
  }

  register({ history }) {
    return {
      [history.push] : this.push,
      [history.pop]  : this.pop
    }
  }

  push(url) {
    window.history.pushState(null, null, url)
  }

  pop() {
    window.history.back()
  }

}

export default History
