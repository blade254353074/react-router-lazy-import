import { Router, Route, hashHistory } from 'react-router'
import App from './App'

const lazyload = moduleName => _ =>
  import(`./components/${moduleName}`)
    .then(module => module.default)
    .catch(err => console.error(err))

export default function Root () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='/home' getComponent={lazyload('Home')} />
        <Route path='/posts' getComponent={lazyload('Posts')}>
          <Route path=':id' getComponent={lazyload('Article')} />
        </Route>
        <Route path='/about' getComponent={lazyload('About')} />
      </Route>
    </Router>
  )
}
