import { REQUEST_NAVERS_SUCCESS, REQUEST_NAVERS_FAILURE } from "./types";
import axios from 'axios'
import { ThunkAction } from "redux-thunk";

const API_URL = 'https://navedex-api.herokuapp.com/v1'

type Actions = { type: string };
type ThunkResult<R> = ThunkAction<R, undefined, undefined, Actions>;

const requestApi = () => {
    return axios(API_URL + '/navers', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhNDRhODVmLTNlNmItNDQ0My05ZjY2LTFkOTc0YzQ5ODkwMCIsImVtYWlsIjoidGVzdGluZy11c2VyQG5hdmUucnMiLCJpYXQiOjE1OTgxNDYwNjJ9.T_YJw609j9sxRLhZTDxiN1TDcl1cvCGantLhh6ljvQc'
        }
    })
} 

export function requestNavers():ThunkResult<void> {
    return (dispatch: any) => {
        return requestApi()
            .then(
                (sauce) => dispatch({ type: REQUEST_NAVERS_SUCCESS, data: sauce.data }),
                (err) => dispatch({ type: REQUEST_NAVERS_FAILURE })
            )
    };
}
