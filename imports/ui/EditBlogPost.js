import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BlogPosts } from '../api/blogposts';

class EditBlogPost extends Component {
	constructor(props) {
		super(props)
		this.state = { blogPost: {} };
		this.updateModelState = this.updateModelState.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentWillMount() {
		if(this.props.match.params.id) {
			var post = BlogPosts.findOne(this.props.match.params.id);
			this.setState({blogPost: post});
		}	
     }
    updateModelState(event) {
        const field = event.target.name;
        let model = Object.assign({}, this.state.blogPost);
        model[field] = event.target.value;        
        return this.setState({blogPost: model});
    }
	handleSubmit(event) {
		event.preventDefault();
		BlogPosts.update(this.state.blogPost._id, {
	      $set: { 
	      	Title: this.state.blogPost.Title,
	      	Description: this.state.blogPost.Description
	      },
	    });
		this.props.history.push('/')
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit} className="container">
			<p>
				<label>Name:</label>
				<input 
					type="text" 
					name="Title" 
					placeholder="Title" 
					ref="titleInput" 
					defaultValue={this.state.blogPost.Title}
					onChange={this.updateModelState}
					/>
			</p>
			<p>
				<label>Description:</label>
				<textarea
					type="text" 
					name="Description" 
					placeholder="Description" 
					ref="descriptionInput" 
					defaultValue={this.state.blogPost.Description}
					onChange={this.updateModelState}
					></textarea>
			</p>
			<input type="submit" value="Save" />
			</form>
			)
	}
}
export default EditBlogPost;