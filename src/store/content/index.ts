import { combineReducers } from 'redux'
import Navers from './navers'
import Auth from './auth'
import Modals from './modals'

export default combineReducers({
    Navers,
    Auth,
    Modals
})