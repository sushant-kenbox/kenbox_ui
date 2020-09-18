const ACCESS_TOKEN_KEY = 'kenbox';

export const login = (token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
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