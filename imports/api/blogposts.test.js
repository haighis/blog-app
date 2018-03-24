import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { BlogPosts } from './blogposts';
 
if (Meteor.isServer) {
  describe('Blog Posts', () => {
    describe('methods', () => {
    	const user = Random.id();
      	let postId;

		beforeEach(() => {
			BlogPosts.remove({});
			postId = BlogPosts.insert({
				Title: 'test title',
				Description: 'test Description',
				CreatedDate: new Date(),
				User: user
			});
		});

		// this test fails but given more time we could implement testing
		it('can delete my blog post', () => {
			const deletePost = Meteor.server.method_handlers['blogposts.remove'];
	        const invocation = { user };
	 
	        // Run the method with `this` set to the fake invocation
	        deletePost.apply(invocation, [postId]);
	 
	        // Verify that the method does what we expected
	        assert.equal(BlogPosts.find().count(), 0);
		});
    });
  });
}