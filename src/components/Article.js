export default class Article extends React.PureComponent {
  render () {
    const { id } = this.props.params
    return (
      <article>
        <h3>Article</h3>
        <div>
          <p>It's article<strong>{id}</strong>!</p>
        </div>
      </article>
    )
  }
}
