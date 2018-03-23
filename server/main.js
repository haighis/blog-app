import { Meteor } from 'meteor/meteor';
import { BlogPosts } from '../imports/api/blogposts.js'; 

Meteor.startup(() => {
  // code to run on server at startup
  if (BlogPosts.find().count() === 0) {
  	console.log('No blog posts. -- INSERTING Sample data --')
    BlogPosts.insert({ Title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",  Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia, est vel ornare lacinia", CreatedDate: new Date(), User: "JoeBlack" });
    BlogPosts.insert({ Title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",  Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia, est vel ornare lacinia", CreatedDate: new Date(), User: "JohnHaigh" });
    BlogPosts.insert({ Title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",  Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia, est vel ornare lacinia", CreatedDate: new Date(), User: "DarkWoodly" });
    BlogPosts.insert({ Title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",  Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia, est vel ornare lacinia", CreatedDate: new Date(), User: "NotReznor" });
    BlogPosts.insert({ Title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",  Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia, est vel ornare lacinia", CreatedDate: new Date(), User: "AffCheeros" });    
  }
});
