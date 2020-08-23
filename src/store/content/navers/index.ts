import { REQUEST_NAVERS_SUCCESS } from "./types"

const initialState = {
    data: []
}

export default function Navers(state = initialState, action: any) {
    switch(action.type) {
        case REQUEST_NAVERS_SUCCESS:
            return {
                data: action.data
            }
        default: return state
    }
}