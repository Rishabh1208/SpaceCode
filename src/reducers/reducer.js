import * as ActionTypes from '../actions/ActionTypes';
import { ProductDetails } from '../data';

const product = [...ProductDetails];

export function FetchList(
	state = {
		productList: [],
		value: '',
		searchList: [],
	},
	action
) {
	switch (action.type) {
		case ActionTypes.PRODUCT_LIST:
			return { ...state, productList: product };

		case ActionTypes.SEARCH:
			const value = action.payload;
			const original = [...state.productList];

			const searchList = original.filter(
				(val) => val.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
			);

			return { ...state, value, searchList };

		case ActionTypes.ADD_PRODUCT:
			const user = { ...action.payload };
			const newproduct = [...state.productList];
			console.log(user);
			console.log(newproduct);
			console.log('oldproduct', newproduct[newproduct.length - 1].id + 1);
			user.id = newproduct[newproduct.length - 1].id + 1;
			console.log(user.id);
			newproduct.push(user);
			console.log('newproduct', newproduct);
			//state.productList = [...newproduct];

			return { ...state, productList: [...newproduct] };

		case ActionTypes.REMOVE_PRODUCT:
			const id = action.payload;

			const newOriginal = [...state.productList];
			const remove = newOriginal.filter((row) => row.id !== id);
			return { ...state, productList: remove };

		case ActionTypes.SORT_PRODUCT:
			const key = action.payload;

			const compareBy = (key) => {
				return function (a, b) {
					if (a[key] < b[key]) return -1;
					if (a[key] > b[key]) return 1;
					return 0;
				};
			};
			let arrayCopy = [...state.productList];
			arrayCopy.sort(compareBy(key));
			return { ...state, productList: arrayCopy };

		default:
			return state;
	}
}
