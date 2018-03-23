import React, { Component } from 'react';
import moment from 'moment';

// Blog component for a single blog post item
export default class BlogPost extends Component {
 	
  render() {
    const date = new Date();
	const formattedDate = moment(date).format("LLL");

    return (
      <li>
       <p>
	      {this.props.blogPost.Title}
	    </p>
	    <p>      
	      {this.props.blogPost.Description} 
	    </p>
	    <p>
	       { moment(this.props.blogPost.CreatedDate.toString()).format("dddd, MMMM Do YYYY, h:mm:ss a") } by {this.props.blogPost.User}
	    </p>
      </li>
    );
  }
}