import PropTypes from 'prop-types'

PostList.propTypes = {
  posts: PropTypes.array
}

PostList.defaultProps = {
  posts: []
}

function PostList(props) {
  const { posts } = props

  return (
    <div>
      <h3>This is an example Post List Detail 🎉</h3>
      <ul className='post-list'>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
