import { Link } from 'react-router'

export default class App extends React.PureComponent {
  render () {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Async LazyLoad with import()</h1>
          <hr />
          <pre>
            <code>{`function lazyLoad (moduleName) {
  return function (location, cb) {
    import(\`./components/\${moduleName}\`)
      .then(module => cb(null, module.default))
      .catch(err => console.error(err))
  }
}

<Router history={hashHistory}>
  <Route path='/' component={App}>
    <Route path='/home' getComponent={lazyLoad('Home')} />
    <Route path='/posts' getComponent={lazyLoad('Posts')}>
      <Route path=':id' getComponent={lazyLoad('Article')} />
    </Route>
    <Route path='/about' getComponent={lazyLoad('About')} />
  </Route>
</Router>
`}</code>
          </pre>
          <hr />
          <p>Click these links under the &lt;hr/&gt;.</p>
          <p>And then checking out the network panel in Chrome DevTools.</p>
          <hr />
        </header>
        <ul role='nav'>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        { this.props.children }
      </main>
    )
  }
}
