import * as ActionTypes from './ActionTypes';

export function ProductList() {
	return {
		type: ActionTypes.PRODUCT_LIST,
	};
}

export function AddProduct(product) {
	return {
		type: ActionTypes.ADD_PRODUCT,
		payload: {
			id: product.id,
			name: product.name,
			description: product.description,
			price: product.price,
			weight: product.weight,
			image: product.image,
			date: product.date,
			subitem: {
				Name: product.subitem.Name,
				Price: product.subitem.Price,
			},
		},
	};
}

export function Search(value) {
	return {
		type: ActionTypes.SEARCH,
		payload: value,
	};
}

export function Remove(id) {
	return {
		type: ActionTypes.REMOVE_PRODUCT,
		payload: id,
	};
}

export function Sort(value) {
	return {
		type: ActionTypes.SORT_PRODUCT,
		payload: value,
	};
}
