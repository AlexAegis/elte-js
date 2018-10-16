import React from 'react';
import PropTypes from 'prop-types';

export class MyInput extends React.Component {
	PropTypes = { label: PropTypes.string };

	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
	}

	onChange(e) {
		console.log(e);
		this.setState({
			inputValue: e.target.value
		});
	}
	render() {
		const { label } = this.props;
		const { inputValue } = this.state;
		return (
			<div className="form-group">
				<label htmlFor="url">{label}:</label>
				<input
					name="url"
					type="text"
					value={inputValue}
					onChange={e => this.onChange(e)}
				/>
			</div>
		);
	}
}
