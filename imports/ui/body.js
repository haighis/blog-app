import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  blogPosts: [
    { 
    	Title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    	Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia, est vel ornare lacinia, sapien velit egestas ligula, nec congue erat risus eget dolor. Vivamus faucibus metus eget gravida fringilla.',
    	CreatedDate: '23Apr2018',
    	User: 'JohnHaigh'
 	},
        { 
    	Title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    	Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia, est vel ornare lacinia, sapien velit egestas ligula, nec congue erat risus eget dolor. Vivamus faucibus metus eget gravida fringilla.',
    	CreatedDate: '23Apr2018',
    	User: 'JohnHaigh'
 	},
    { 
    	Title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    	Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia, est vel ornare lacinia, sapien velit egestas ligula, nec congue erat risus eget dolor. Vivamus faucibus metus eget gravida fringilla.',
    	CreatedDate: '23Apr2018',
    	User: 'JohnHaigh'
 	},
  ],
});