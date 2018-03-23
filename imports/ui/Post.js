import React, { Component } from 'react';
import moment from 'moment';
import { BlogPosts } from '../api/blogposts.js';
import { Link } from 'react-router-dom'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

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
				{ this.props.currentUser ? <div>
					<button className="delete" onClick={this.deletePost.bind(this)}>
					&times;
					</button>
					<Link to={`/edit/${post._id}`}>Edit</Link>
				</div> : '' }

				<p>
					{post.Title}
				</p>
				<p>      
					{post.Description} 
				</p>
				<p>
					{moment(post.CreatedDate.toString()).format("dddd, MMMM Do YYYY, h:mm:ss a")} 
				</p>
				<p> 
					by {post.User} 
				</p>
			</li>
		</div>
		);
	}
}
export default withTracker(() => {
	return {
		currentUser: Meteor.user()
	};
})(Post);