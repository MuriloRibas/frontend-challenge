export const LOADING = '@navers/LOADING'

export const REQUEST_NAVERS_SUCCESS = '@navers/REQUEST_NAVERS_SUCCESS'
export const REQUEST_NAVERS_FAILURE = '@navers/REQUEST_NAVERS_FAILURE'

export const REQUEST_ADD_NAVER_SUCCESS = '@navers/REQUEST_ADD_NAVER_SUCCESS'
export const REQUEST_ADD_NAVER_FAILURE = '@navers/REQUEST_ADD_NAVER_FAILURE'

export const REQUEST_DELETE_NAVER_SUCCESS = '@navers/REQUEST_DELETE_NAVER_SUCCESS'
export const REQUEST_DELETE_NAVER_FAILURE = '@navers/REQUEST_DELETE_NAVER_FAILURE'

export const REQUEST_EDIT_NAVER_SUCCESS = '@navers/REQUEST_EDIT_NAVER_SUCCESS'
export const REQUEST_EDIT_NAVER_FAILURE = '@navers/REQUEST_EDIT_NAVER_FAILURE'

export const SHOW_ADD = '@navers/SHOW_ADD'
export const SHOW_NAVERS = '@navers/SHOW_NAVERS'
export const SHOW_EDIT = '@navers/SHOW_EDIT'

export interface NaverI {
    id: string
    name: string
    admission_date: string
    job_role: string
    user_id: string
    project: string
    birthdate: string
    url: string
}

export interface NaversI {
    Navers: {
        data: [NaverI],
        hasErr: boolean,
        loading: boolean,
        naverSuccess: boolean,
        show: 'navers' | 'add' | 'edit'
        id_editing?: string 
    }
}

