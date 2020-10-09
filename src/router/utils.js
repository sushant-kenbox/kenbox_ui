const ACCESS_TOKEN_KEY ='kenbox';
const LOGIN_USER_ID ='loginUserId';

export const login = (data) => {
	localStorage.setItem(ACCESS_TOKEN_KEY, data.token);
	localStorage.setItem(LOGIN_USER_ID, data.loginUserId);
	window.location = "/admin/users/dashboard" 
}

export const logout = () => {
	localStorage.removeItem(ACCESS_TOKEN_KEY);
	window.location = "/login"
}

export const isLogin = () => {
	if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
		return true;
	}

	return false;
}

export const token = () => {
	return localStorage.getItem(ACCESS_TOKEN_KEY);
}