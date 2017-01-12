import { Router, Route, hashHistory } from 'react-router'
import App from './App'

function lazyLoad (moduleName) {
  return (location, cb) => import(`./components/${moduleName}`)
    .then(module => cb(null, module.default))
    .catch(err => console.error(err))
}

export default function Root () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='/home' getComponent={lazyLoad('Home')} />
        <Route path='/posts' getComponent={lazyLoad('Posts')}>
          <Route path=':id' getComponent={lazyLoad('Article')} />
        </Route>
        <Route path='/about' getComponent={lazyLoad('About')} />
      </Route>
    </Router>
  )
}
