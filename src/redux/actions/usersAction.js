import { USER_LOGIN, PENDING, ERROR, GET_EMPLOYEE, GET_JOBEMPLOYMENT} from "./types";
import axios from "axios";
import * as Api from "./../../data/";
import { customizeError } from "./../../utils/CustomizeError";
import { login} from "./../../router/utils";

export function userLogin(data) {
	console.log("come", data);
	return async (dispatch) => {
		dispatch({
			type: PENDING,
		});
		try {
			let response = await axios
				.post(Api.USER_LOGIN_API, data, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((res) => res.data);

			dispatch({
				type: USER_LOGIN,
				payload: response,
			});
			
			login(response.data); //change
					
					


			
		} catch (err) {
			dispatch({
				type: ERROR,
				error: customizeError(err),
			});
		}		
	};

}

export function getUser(){
	return async (dispatch) => {
		dispatch({
			type: PENDING,
		});
		try{
			axios
				.get(`${Api.GET_EMPLOYEE_API}/${localStorage.getItem(Api.USER_ID)}`, {
					headers: { "Authorization": `${Api.BEARER}${localStorage.getItem(Api.TOKEN_KEY)}`},
				})
				.then((response) => {
					// console.log("success");
					console.log(response.data);
					dispatch({
						type: GET_EMPLOYEE,
						payload: response.data.data,
					});
				})
		}catch (err) {
			dispatch({
				type: ERROR,
				error: customizeError(err),
			});
		}
	}
}

export function getJobEmployment(){
	return async (dispatch) => {
		dispatch({
			type: PENDING,
		});
		try{
			axios
				.get(`${Api.GET_JOBEMPLOYMENT_API}`, {
					headers: { "Authorization": `${Api.BEARER}${localStorage.getItem(Api.TOKEN_KEY)}`},
					params: {"empId" : `${localStorage.getItem(Api.USER_ID)}`}
				})
				.then((response) => {
					// console.log("success");
					console.log(response.data);
					dispatch({
						type: GET_JOBEMPLOYMENT,
						payload: response.data.data,
					});
				})
		}catch (err) {
			dispatch({
				type: ERROR,
				error: customizeError(err),
			});
		}
	}
}
