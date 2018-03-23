import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Post from './Post';
import { BlogPosts } from '../api/blogposts.js';

// Blog Listing component - Blog Listing
class BlogListing extends Component {
  renderBlogPosts() {
      return this.props.posts.map((post) => (
      <Post key={post._id} blogPost={post} />
    ));
  }
  render() {
    return (
      <div className="container">
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
})(BlogListing);