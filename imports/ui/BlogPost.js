import React, { Component } from 'react';
 
// Blog component for a single blog post item
export default class BlogPost extends Component {
  render() {
    return (
      <li>
       <p>
	      {this.props.blogPost.Title}
	    </p>
	    <p>      
	      {this.props.blogPost.Description} 
	    </p>
	    <p>
	       by {this.props.blogPost.User}
	    </p>
      </li>
    );
  }
}