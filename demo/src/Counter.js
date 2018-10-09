import React from 'react';

export class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	increment() {
		console.log('asd');
		this.setState(prev => {
			return {
				counter: prev.counter + 1
			};
		});
	}

	render() {
		const { counter } = this.state;
		return (
			<div>
				<div>Values: {counter}</div>
				<div>
					<button onClick={() => this.increment()}>Press me!</button>
				</div>
			</div>
		);
	}
}
