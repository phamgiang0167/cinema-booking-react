import { USER_LOGIN, ACCESS_TOKEN } from 'settings/apiConfig'
import {
    LOGIN
} from './types'

let user = {}
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const initialState = {
    userLogin: user
}

const userManagementReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case LOGIN:
            localStorage.setItem(USER_LOGIN, JSON.stringify(payload))
            localStorage.setItem(ACCESS_TOKEN, payload.accessToken)
            return {...state, userLogin: payload}
        default: return {...state}
    }
}

export default userManagementReducer