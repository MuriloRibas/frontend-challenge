import { REQUEST_NAVERS_SUCCESS } from "./types"

const initialState = {
    data: [
        {
            name: '',
            admission_date: '',
            job_role: '',
            user_id: '',
            project: '',
            birthdate: '',
            url: ''
        }
    ]
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