import { combineReducers } from "redux";
import announcementReducer from "./announcementReducer";

import userReducer from "./userReducer";


export default combineReducers({
	users: userReducer,
	announcements: announcementReducer,
})