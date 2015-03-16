const _routes = {
  ''      : require('./layouts/Login'),
  'home'  : require('./layouts/Home'),
  '404'   : require('./layouts/Error404')
}

export default {

  getRoute(path) {
    return _routes[path] || _routes['404']
  }

}
