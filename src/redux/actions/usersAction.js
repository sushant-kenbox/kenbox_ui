import { USER_LOGIN, PENDING, ERROR } from "./types";
import axios from "axios";
import * as Api from "./../../data/"
import { customizeError } from "./../../utils/CustomizeError"
import { login } from "./../../router/utils"

export function userLogin(data) {
	console.log('come', data)
	return async dispatch => {
		dispatch({
			type: PENDING,
		})
		try {
				let response = await axios.get(
				Api.USER_LOGIN_API,
				{
					params: data

				}, {
				headers: {
					"Authorization": `${Api.BEARER}${localStorage.getItem(Api.TOKEN_KEY)}`
				}
			}).then(res => res.data);
			dispatch({
				type: USER_LOGIN,
				payload: response,

			});

			//console.log("------", response)
			login('kenbox');
		} catch (err) {
			dispatch({
				type: ERROR,
				error: customizeError(err),
			});
		}



	}

}