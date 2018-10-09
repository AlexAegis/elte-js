import React, { Component } from 'react';
import logo from './logo.svg';
import { Counter } from './Counter';
import './App.css';

class App extends Component {
	render() {
		const a = 'Hello World';
		const t = ['1', '2', '3'];
		return (
			<div className="App">
				<p>{a}</p>
				{t.map(e => (
					<span key={parseInt({ e })}>{e}</span>
				))}
				<Counter />
			</div>
		);
	}
}

export default App;
