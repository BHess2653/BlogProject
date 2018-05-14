import React, { Component } from 'react';
import '../styles/Home.css';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
componentDidMount() {
    let dataURL = "http://localhost:8888//wp-json/wp/v2/posts?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res
        })
      })
  }
render() {
    let posts = this.state.posts.map((post, index) => {
      return <div className="App-div" key={index}>
        <p><strong>Title:</strong> {post.title.rendered}</p>
        <div><strong>Description:</strong><div dangerouslySetInnerHTML={ {__html: post.acf.description} } /></div>
      </div>
    });
return (
      <div className="App">
        <h2 className="App-title">Posts</h2>
        {posts}
      </div>
    )
  }
}
export default Post;
