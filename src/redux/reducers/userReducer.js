import { USER_LOGIN, ERROR, PENDING } from "./../actions/types";

const initialState = {
	login: []
};
export default function (state = initialState, action) {
	switch (action.type) {
		case USER_LOGIN:
			return {
				...state,
				login: action.payload,
				pending: false,
			}

		case PENDING:
			return {
				...state,
				pending: true,
			}
		case ERROR:
			return {
				...state,
				error: action.payload,
				pending: false,
			}
		default:
			return state
	}
}