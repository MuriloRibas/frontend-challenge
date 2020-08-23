import { REQUEST_NAVERS_SUCCESS, REQUEST_NAVERS_FAILURE, SHOW_ADD, SHOW_NAVERS, REQUEST_ADD_NAVER_FAILURE, REQUEST_ADD_NAVER_SUCCESS, NaverI } from "./types";
import axios from 'axios'
import { ThunkAction } from "redux-thunk";

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
                    console.log('1');
                    return dispatch({ type: REQUEST_ADD_NAVER_SUCCESS, data: sauce.data });
                },
                (err) => {
                    return dispatch({ type: REQUEST_ADD_NAVER_FAILURE });
                }
            )
    };
}

export function showAdd() {
    return {
        type: SHOW_ADD
    }
}

export function showNavers() {
    return {
        type: SHOW_NAVERS
    }
}