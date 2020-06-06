import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	ProductList,
	Search,
	Remove,
	Sort,
} from '../../actions/ActionCreators';
import './table.css';

class Table extends Component {
	componentDidMount() {
		if (this.props.product.length === 0) {
			this.props.ProductList();
		}
	}
	render() {
		return (
			<div>
				<form>
					<label>search: </label>
					<input
						type='text'
						onChange={(e) => this.props.search(e.target.value)}
						value={this.props.value}
					/>
				</form>
				<table id='table-example-1'>
					<caption>Table for displaying the items</caption>

					<thead>
						<tr>
							<th rowSpan='2' onClick={() => this.props.Sort('name')}>
								Name
							</th>
							<th rowSpan='2'>Description</th>
							<th colSpan='2'>Sub Item</th>
							<th rowSpan='2'>Weight</th>
							<th rowSpan='2'>Price</th>
							<th rowSpan='2'>Image</th>
							<th rowSpan='2'>Date</th>
							<th rowSpan='2'>Button</th>
						</tr>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{this.props.value //Logic about filtering the search
							? this.props.searchList.map((product) => {
									return (
										<tr key={product.id}>
											<td>{product.name}</td>
											<td>{product.description}</td>
											<td>{product.subitem.Name}</td>
											<td>Rs {product.subitem.Price}</td>
											<td>{product.weight} Kg</td>
											<td>Rs {product.price}</td>
											<td>{product.image}</td>
											<td>{product.date}</td>
											<td>
												<button onClick={() => this.props.Remove(product.id)}>
													Delete
												</button>
											</td>
										</tr>
									);
							  })
							: this.props.product.map((product) => {
									return (
										<tr key={product.id}>
											<td>{product.name}</td>
											<td>{product.description}</td>
											<td>{product.subitem.Name}</td>
											<td>Rs {product.subitem.Price}</td>
											<td>{product.weight} Kg</td>
											<td>Rs {product.price}</td>
											<td>{product.image}</td>
											<td>{product.date}</td>
											<td>
												<button onClick={() => this.props.Remove(product.id)}>
													Delete
												</button>
											</td>
										</tr>
									);
							  })}
					</tbody>
				</table>

				<Link to='/add'>
					<button>ADD PRODUCT</button>
				</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	product: state.productList,
	searchList: state.searchList,
	value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
	ProductList: () => dispatch(ProductList()),
	search: (value) => dispatch(Search(value)),
	Remove: (id) => dispatch(Remove(id)),
	Sort: (value) => dispatch(Sort(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
