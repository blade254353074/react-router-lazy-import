import { Link } from 'react-router'

export default class App extends React.PureComponent {
  render () {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Async LazyLoad with import()</h1>
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
