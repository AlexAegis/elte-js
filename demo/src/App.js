import React, { Component } from 'react';
import './App.css';
import MyInputGroup from './my-input-group/my-input-group';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MyInputGroup label="URL" onSubmit={() => console.log('asd')} />
				<MyInputGroup
					label="List name"
					onSubmit={() => console.log('cicafül')}
				/>
			</div>
		);
	}
}

export default App;
