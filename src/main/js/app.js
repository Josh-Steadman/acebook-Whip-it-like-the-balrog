const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'
import Pictures from './posts/pictures'

class AllPosts extends React.Component {

  render() {
    return (<PostsBuilder />)
  }
}

class Avatar extends React.Component {

    render() {
        return (<Pictures />)
    }
}

ReactDOM.render(<AllPosts />, document.getElementById('all-posts'))

ReactDOM.render(<Avatar />, document.getElementById('avatar'))