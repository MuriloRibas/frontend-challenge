import { REQUEST_NAVERS_SUCCESS, REQUEST_NAVERS_FAILURE, SHOW_ADD, SHOW_NAVERS, SHOW_EDIT, REQUEST_ADD_NAVER_FAILURE, REQUEST_ADD_NAVER_SUCCESS, NaverI, REQUEST_DELETE_NAVER_SUCCESS, REQUEST_DELETE_NAVER_FAILURE, REQUEST_EDIT_NAVER_SUCCESS, REQUEST_EDIT_NAVER_FAILURE } from "./types";
import axios from 'axios'
import { ThunkAction } from "redux-thunk";
import { SHOW_MODAL } from "../modals/types";

const API_URL = 'https://navedex-api.herokuapp.com/v1'

type Actions = { type: string };
type ThunkResult<R> = ThunkAction<R, undefined, undefined, Actions>;


const requestApi = (url: string, method: any, data?: any) => {
    return axios(API_URL + url, {
        method,
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhNDRhODVmLTNlNmItNDQ0My05ZjY2LTFkOTc0YzQ5ODkwMCIsImVtYWlsIjoidGVzdGluZy11c2VyQG5hdmUucnMiLCJpYXQiOjE1OTgxNDYwNjJ9.T_YJw609j9sxRLhZTDxiN1TDcl1cvCGantLhh6ljvQc'
        },
        data
    })
} 

export function requestNavers():ThunkResult<void> {
    return (dispatch: any) => {
        return requestApi('/navers', 'GET')
            .then(
                (sauce) => dispatch({ type: REQUEST_NAVERS_SUCCESS, data: sauce.data }),
                (err) => dispatch({ type: REQUEST_NAVERS_FAILURE })
            )
    };
}

export function addNaver(data: any):ThunkResult<void> {
    return (dispatch: any) => {
        return requestApi('/navers', 'POST', data)
            .then(
                (sauce) => {
                    dispatch({ type: REQUEST_ADD_NAVER_SUCCESS, data: sauce.data });
                    dispatch({ type: SHOW_MODAL, modalData: { type: 'create', title: 'Naver criado', content: 'Naver criado com sucesso!' } })
                },
                (err) => {
                    dispatch({ type: REQUEST_ADD_NAVER_FAILURE });
                    dispatch({ type: SHOW_MODAL, modalData: { type: 'create_error', title: 'Erro', content: 'Preencha todos os dados.' } })
                }
            )
    };
}

export function deleteNaver(id: string):ThunkResult<void> {
    return (dispatch: any) => {
        return requestApi(`/navers/${id}`, 'DELETE')
            .then(
                (sauce) => {
                    console.log(id)
                    dispatch({ type: REQUEST_DELETE_NAVER_SUCCESS, data: sauce.data });
                    dispatch({ type: SHOW_MODAL, modalData: { type: 'delete', title: 'Naver excluido', content: 'Naver excluido com sucesso!' } })
                },
                (err) => {
                    dispatch({ type: REQUEST_DELETE_NAVER_FAILURE });
                    dispatch({ type: SHOW_MODAL, modalData: { type: 'create_error', title: 'Erro', content: 'Ouve um erro ao tentar excluir esse naver :(' } })
                }
            )
    }
}

export function editNaver(id: string | undefined, data: any):ThunkResult<void> {
    return (dispatch: any) => {
        return requestApi(`/navers/${id}`, 'PUT', data)
            .then(
                (sauce) => {
                    dispatch({ type: REQUEST_EDIT_NAVER_SUCCESS, data: sauce.data });
                    dispatch({ type: SHOW_MODAL, modalData: { type: 'edit', title: 'Naver atualizado', content: 'Naver atualizado com sucesso!' } })
                },
                (err) => {
                    dispatch({ type: REQUEST_EDIT_NAVER_FAILURE });
                    dispatch({ type: SHOW_MODAL, modalData: { type: 'create_error', title: 'Erro', content: 'Ouve um erro ao tentar atualizar esse naver :(' } })
                }
            )
    }
}

export function showAdd() {
    return {
        type: SHOW_ADD
    }
}

export function showEdit(id: string) {
    return {
        type: SHOW_EDIT,
        id_editing: id
    }
}

export function showNavers() {
    return {
        type: SHOW_NAVERS
    }
}