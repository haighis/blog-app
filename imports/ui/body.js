import { Template } from 'meteor/templating';
import { BlogPosts } from '../api/blogposts.js'; 
import './body.html';
 
Template.body.helpers({
  // Keep the dummy data around in case we ever want to revert back to this.  
  // TODO move this to some library so it doesn't pollute.
  // blogPosts: [
  //   { 
  //   	Title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   	Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia, est vel ornare lacinia, sapien velit egestas ligula, nec congue erat risus eget dolor. Vivamus faucibus metus eget gravida fringilla.',
  //   	CreatedDate: '23Apr2018',
  //   	User: 'JohnHaigh'
 	// },
  //       { 
  //   	Title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   	Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia, est vel ornare lacinia, sapien velit egestas ligula, nec congue erat risus eget dolor. Vivamus faucibus metus eget gravida fringilla.',
  //   	CreatedDate: '23Apr2018',
  //   	User: 'JohnHaigh'
 	// },
  //   { 
  //   	Title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   	Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia, est vel ornare lacinia, sapien velit egestas ligula, nec congue erat risus eget dolor. Vivamus faucibus metus eget gravida fringilla.',
  //   	CreatedDate: '23Apr2018',
  //   	User: 'JohnHaigh'
 	// },
  // ],
  blogPosts() {
    return BlogPosts.find({});
  },
});