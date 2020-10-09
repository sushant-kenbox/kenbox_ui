import {PENDING, ERROR, GET_ANNOUNCEMENT} from "./types";

import axios from "axios";
import * as Api from "../../data";
import { customizeError } from "../../utils/CustomizeError";



export function getAnnouncement( ){
	return async (dispatch) => {
		dispatch({
			type: PENDING,
		})
		try{
			axios
				.get(Api.GET_ANNOUNCEMENT_API, {
					headers: { "Authorization": `${Api.BEARER}${localStorage.getItem(Api.TOKEN_KEY)}`},
				})
				.then((response) => {
					console.log("success", response.data);
					
					dispatch({
						type: GET_ANNOUNCEMENT,
						payload: response.data,
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