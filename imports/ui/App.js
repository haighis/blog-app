import React, { Component } from 'react';
import RouterMain from './RouterMain';
import Header from './Header';
class App extends Component {
	render() {
    return (
    	<div>
    		<Header />
			<RouterMain />
		</div>
    );
  }
}
export default App;