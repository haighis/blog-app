import React, { Component } from 'react';
import moment from 'moment';
import { BlogPosts } from '../api/blogposts.js';
import { Link } from 'react-router-dom'

// Post component for a single blog post item
class Post extends Component {
	// Deletes a Post
	deletePost() {
		BlogPosts.remove(this.props.blogPost._id);
	}	
	render() {
	  const post = this.props.blogPost;
	  return (
	    <div>
	        <li>
				<button className="delete" onClick={this.deletePost.bind(this)}>
				&times;
				</button>
				<Link to={`/edit/${post._id}`}>Edit</Link>
				<p>
					{post.Title}
				</p>
				<p>      
					{post.Description} 
				</p>
				<p>
					{moment(post.CreatedDate.toString()).format("dddd, MMMM Do YYYY, h:mm:ss a")} 
				</p>
				<p> by {post.User}
				</p>
			</li>
	    </div>
	  );
	}
}
export default Post;