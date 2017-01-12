import { Link } from 'react-router'

export default class Posts extends React.PureComponent {
  render () {
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          <li><Link to='/posts/1'>article1</Link></li>
          <li><Link to='/posts/2'>article2</Link></li>
          <li><Link to='/posts/3'>article3</Link></li>
        </ul>
        <div>{ this.props.children }</div>
      </div>
    )
  }
}
