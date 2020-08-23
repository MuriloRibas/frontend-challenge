import { REQUEST_LOGIN_SUCCESS, LOADING, REQUEST_LOGIN_FAILURE } from "./types"

const initialState = {
    token: undefined,
    isSignedIn: false,
    hasErr: false,
    loading: false
}

export default function Auth(state = initialState, action: any) {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
                hasErr: false,
                isSignedIn: false
            }
        case REQUEST_LOGIN_SUCCESS:
            return {
                token: action.token,
                isSignedIn: true,
                hasErr: false,
                loading: false
            }
        case REQUEST_LOGIN_FAILURE:
            return {
                token: undefined,
                isSignedIn: false,
                hasErr: true,
                loading: false
            }
        default: return state
    }
}