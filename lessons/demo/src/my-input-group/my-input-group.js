import React from 'react';
import PropTypes from 'prop-types';
import MyInput from '../my-input/my-input';
export default class MyInputGroup extends React.Component {
	PropTypes = {
		label: PropTypes.string,
		onSubmit: PropTypes.func
	};

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
			<>
				<MyInput ref={me => (this.myInput = me)} label="URL" />
				<input
					type="button"
					value="OK"
					onClick={() => console.log(this.myInput.state.inputValue)}
				/>
			</>
		);
	}
}
