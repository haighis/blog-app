import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Header extends Component {
	render() {
		return (
			<div>
	          <h1>Blog App</h1>
				<header>
					<nav>
						<Link to='/'>Posts</Link> <Link to='/add'>Add Post</Link>
					</nav>
				</header>
			</div>
		);
	}
}
export default Header;