import axios from 'axios'
import { ThunkAction } from "redux-thunk";
import { REQUEST_LOGIN_SUCCESS, REQUEST_LOGIN_FAILURE, LOGOUT } from './types';

type Actions = { type: string };
type ThunkResult<R> = ThunkAction<R, undefined, undefined, Actions>;

const API_URL = 'https://navedex-api.herokuapp.com/v1'

const requestApi = (email: string, password: string) => {
    return axios(API_URL + '/users/login', {
        method: 'POST',
        data: {
            email,
            password
        }
    })
} 

export function requestLogin(email: string, password: string):ThunkResult<void> {
    return (dispatch) => {
        return requestApi(email, password)
            .then(
                (sauce) => dispatch({ type: REQUEST_LOGIN_SUCCESS, token: sauce.data.token }),
                (err) => dispatch({ type: REQUEST_LOGIN_FAILURE })
            )
    };
}

export function logout() {
    return { type: LOGOUT }
}