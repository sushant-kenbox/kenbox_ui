const ACCESS_TOKEN_KEY = 'kenbox';

export const login = () => {
    localStorage.setItem(ACCESS_TOKEN_KEY, 'kenbox');
}

export const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
        return true;
    }

    return false;
}