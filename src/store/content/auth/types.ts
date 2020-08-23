export const LOADING = '@auth/LOADING'

export const REQUEST_LOGIN_SUCCESS = '@auth/REQUEST_LOGIN_SUCCESS'
export const REQUEST_LOGIN_FAILURE = '@auth/REQUEST_LOGIN_FAILURE'
export const LOGOUT = '@auth/LOGOUT'

export interface AuthI {
    Auth: {
        token: string | undefined,
        isSignedIn: boolean,
        hasErr: boolean,
        loading: boolean
    }
}