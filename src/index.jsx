import 'style'
import App from './App'

let app = new App()

let el = document.querySelector('#app')

app.listen(app.render.bind(app, el))

app.render(el)
