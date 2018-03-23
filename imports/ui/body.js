import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { BlogPosts } from '../api/blogposts.js'; 
import './body.html';
import { Session } from 'meteor/session'

Session.set('editItemId', null);

var updateBlogPost = function(){
    var editItem = {
      title: $("#editItemTitle").val()
    }

    BlogPosts.update(Session.get('editItemId'), {$set: editItem}, {validationContext: 'updateForm'}, function(error, result) {
      if(!error){
        Session.set('editItemId', null);
      }
    });
}

Template.addBlogPostForm.events({
    'submit form': function(){
        event.preventDefault();

        const target = event.target;
        const title = target.title.value;
        const description = target.description.value;
        const user = target.user.value;
        
        if(title !== '' &&
          description !== '') {

          // Insert Blog Post into the collection
          BlogPosts.insert({
            Title: title,
            Description: description,
            CreatedDate: new Date(),
            User: Meteor.user().username,
          });
       
          // Clear form
          target.title.value = '';
          target.description.value = '';
          target.user.value = '';
        }
    }
});

Template.body.events({
  'click .delete': function() {
    BlogPosts.remove(this._id);
  },
  'click .editItem': function(){
    alert('todo implement')
    Session.set('editItemId', this._id);
  }
});

Template.body.helpers({
  editing: function(){
    return Session.equals('editItemId', this._id);
  },
  blogPosts() {
    return BlogPosts.find({}, { sort: { CreatedDate: -1 } });
  },
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
});