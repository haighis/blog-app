import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BlogPosts } from '../api/blogposts';

class AddBlogPost extends Component {
	handleSubmit(event) {
		event.preventDefault();
		const title = 
		ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
		const description = 
		ReactDOM.findDOMNode(this.refs.descriptionInput).value.trim();
		if(title !== '' &&
          description !== '') {
			BlogPosts.insert({
			  Title: title,
			  Description: description,
			  CreatedDate: new Date(),
			  User: 'JohnHaigh'
			});
			// Clear form
			ReactDOM.findDOMNode(this.refs.titleInput).value = '';
			ReactDOM.findDOMNode(this.refs.descriptionInput).value = '';
			this.props.history.push('/')
		}
	}
	render() {
    return (
    	<div className="container">
			<form onSubmit={this.handleSubmit.bind(this)}>
				<p>
					Title <input type="text" ref="titleInput" name="title" placeholder="Title" />
				</p>
				<p>
					Description <textarea rows="4" cols="50" ref="descriptionInput" name="description"></textarea>
				</p>
				<p>
					<input type="submit" value="Save" />
				</p>
				
			</form>
		</div>
    );
  }
}
export default AddBlogPost;