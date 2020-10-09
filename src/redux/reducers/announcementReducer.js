import { ERROR, PENDING, GET_ANNOUNCEMENT } from "./../actions/types";

const initialState = {

	announcements: []
};
export default function (state = initialState, action) {
	switch (action.type) {

	case GET_ANNOUNCEMENT:
		return {
			...state,
			announcements: action.payload,
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