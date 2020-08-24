import { REQUEST_NAVERS_SUCCESS, SHOW_ADD, SHOW_NAVERS, REQUEST_ADD_NAVER_SUCCESS, REQUEST_ADD_NAVER_FAILURE, REQUEST_NAVERS_FAILURE, REQUEST_DELETE_NAVER_FAILURE, REQUEST_DELETE_NAVER_SUCCESS, SHOW_EDIT, REQUEST_EDIT_NAVER_SUCCESS, REQUEST_EDIT_NAVER_FAILURE } from "./types"

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
    ],
    loading: false,
    hasErr: false,
    naverSuccess: false,
    show: 'navers'
}

export default function Navers(state = initialState, action: any) {
    switch(action.type) {
        case REQUEST_NAVERS_SUCCESS:
            return {
                ...state,
                loading: false,
                hasErr: false,
                data: action.data
            }
        case REQUEST_NAVERS_FAILURE:
            return {
                ...state,
                loading: false,
                hasErr: true 
            }
        case REQUEST_ADD_NAVER_SUCCESS:
            return {
                ...state,
                loading: false,
                hasErr: false,
                naverSuccess: true
            }
        case REQUEST_ADD_NAVER_FAILURE:
            return {
                ...state,
                loading: false,
                hasErr: true,
                naverSuccess: false
            }
        case REQUEST_DELETE_NAVER_SUCCESS || REQUEST_EDIT_NAVER_SUCCESS:
            return {
                ...state,
                loading: false,
                hasErr: false
            }
        case REQUEST_DELETE_NAVER_FAILURE || REQUEST_EDIT_NAVER_FAILURE:
            return {
                ...state,
                loading: false,
                hasErr: true
            }
        case SHOW_ADD:
            return {
                ...state,
                show: 'add'
            }
        case SHOW_NAVERS:
            return {
                ...state,
                show: 'navers'
            }
        case SHOW_EDIT:
            return {
                ...state,
                show: 'edit',
                id_editing: action.id_editing
            }
        default: return state
    }
}