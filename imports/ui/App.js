import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import BlogPost from './BlogPost.js';
import { BlogPosts } from '../api/blogposts.js';

// App component - represents the whole app
class App extends Component {
  renderBlogPosts() {
      return this.props.posts.map((post) => (
      <BlogPost key={post._id} blogPost={post} />
    ));
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Aspace</h1>
        </header>
        <ul>
          {this.renderBlogPosts()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    posts: BlogPosts.find({}, { sort: { CreatedDate: -1 } }).fetch(),
  };
})(App);