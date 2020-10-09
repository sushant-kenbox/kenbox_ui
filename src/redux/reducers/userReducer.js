
import { USER_LOGIN, ERROR, PENDING, GET_EMPLOYEE, GET_JOBEMPLOYMENT } from "./../actions/types";

const initialState = {
	login: [],
	employee: {}, //new
	jobEmployment: []
	
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
	case GET_EMPLOYEE: 
		return{
			...state,
			employee : action.payload,
			pending: false,
		}
		case GET_JOBEMPLOYMENT: 
		return{
			...state,
			jobEmployment : action.payload,
			pending: false,
		}
	
	default:
		return state
	}
}