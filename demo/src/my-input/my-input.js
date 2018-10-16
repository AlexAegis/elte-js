import React from 'react';
import PropTypes from 'prop-types';
export default class MyInput extends React.Component {
	PropTypes = { label: PropTypes.string };

	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};

		//this.setInputRef = () => this.setInputRef;
	} /*

	componentDidMount() {
		var maskProps = {
			clearMaskOnLostFocus: false,
			rightAlign: false
		};
		var inputmask = new Inputmask.Inputmask('99-9999999', maskProps);
		inputmask.mask(this.input);
	}

	setInputRef(inputComponent) {
		this.input = inputComponent.getDOMNode();
    }*/

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
					//ref={this.setInputRef}
					onChange={e => this.onChange(e)}
				/>
			</div>
		);
	}
}
