const PORT = `8080`
const SERVER_PATH = `http://localhost:${PORT}`

export const BEARER = `Bearer `
export const TOKEN_KEY = 'kenbox';
export const USER_ID = 'loginUserId';


export const USER_LOGIN_API = `${SERVER_PATH}/authenticate`
export const GET_EMPLOYEE_API = `${SERVER_PATH}/employees`
export const GET_JOBEMPLOYMENT_API = `${SERVER_PATH}/experiences`
export const RESET_PASSWORD_API = `${SERVER_PATH}/reset-password`
export const FORGOT_PASSWORD_API = `${SERVER_PATH}/forgot-password`
export const GET_ANNOUNCEMENT_API = `${SERVER_PATH}/announcements`
