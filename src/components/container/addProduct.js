import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AddProduct } from '../../actions/ActionCreators';

class AddProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			values: {
				id: 0,
				name: '',
				description: '',
				price: 0,
				weight: 0,
				image: '',
				date: '',
				subitem: {
					name: '',
					price: 0,
				},
			},
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.AddProduct(this.state.values);
		console.log(this.state.values);
		this.props.history.push('/list');
	};

	handleInputChange = (e) =>
		this.setState({
			values: { ...this.state.values, [e.target.name]: e.target.value },
		});
	render() {
		const {
			name,
			description,
			price,
			weight,
			image,
			date,
			subitem,
		} = this.state.values;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<p> NAME: </p>
					<input
						type='text'
						name='name'
						value={name}
						onChange={this.handleInputChange}
					/>

					<p> DESCRIPTION: </p>
					<input
						type='text'
						name='description'
						value={description}
						onChange={this.handleInputChange}
					/>

					<p> PRICE: </p>
					<input
						type='text'
						name='price'
						value={price}
						onChange={this.handleInputChange}
					/>

					<p> WEIGHT: </p>
					<input
						type='text'
						name='weight'
						value={weight}
						onChange={this.handleInputChange}
					/>

					<p> IMAGE: </p>
					<input
						type='text'
						name='image'
						value={image}
						onChange={this.handleInputChange}
					/>

					<p> DATE: </p>
					<input
						type='text'
						name='date'
						value={date}
						onChange={this.handleInputChange}
					/>

					<p> SUB ITEM NAME: </p>
					<input
						type='text'
						name={subitem[0]}
						value={subitem[name]}
						onChange={this.handleInputChange}
					/>

					<p> SUB ITEM PRICE: </p>
					<input
						type='text'
						name={subitem[1]}
						value={subitem[price]}
						onChange={this.handleInputChange}
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	console.log('reddd');
	return {
		AddProduct: (values) => {
			console.log(values);
			return dispatch(AddProduct(values));
		},
	};
};
export default withRouter(connect(null, mapDispatchToProps)(AddProducts));
