import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
class Header extends Component {
	render() {
		return (
			<div>
	          <h1>Blog App</h1>
	          <AccountsUIWrapper />
	          { this.props.currentUser ?
				<header>
					<nav>
						<Link to='/'>Posts</Link> <Link to='/add'>Add Post</Link>
					</nav>
				</header>
				: '' }
			</div>
		);
	}
}
export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(Header);