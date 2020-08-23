export const LOADING = '@navers/LOADING'
export const REQUEST_NAVERS_SUCCESS = '@navers/REQUEST_NAVERS_SUCCESS'
export const REQUEST_NAVERS_FAILURE = '@navers/REQUEST_NAVERS_FAILURE'


export interface NaverI {
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
        loading: boolean
    }
}

