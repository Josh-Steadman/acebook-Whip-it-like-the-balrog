const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'

class AllPosts extends React.Component {

  render() {
    return (
      <PostsBuilder />
    )
  }
}

ReactDOM.render(
	<AllPosts />,
	document.getElementById('all-posts')
)
