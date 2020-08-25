import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => dispatch => {
	const books = getProducts();
	dispatch({
		type: FETCH_PRODUCTS,
		payload: books
	})
}