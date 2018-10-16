import React, { Component } from 'react';
import { Counter } from './Counter';
import './App.css';
import { MyInput } from './my-input/my-input';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MyInput ref={me => (this.myInput = me)} label="URL" />
				<input
					type="button"
					value="OK"
					onClick={() => console.log(this.myInput.state.inputValue)}
				/>
			</div>
		);
	}
}

export default App;
