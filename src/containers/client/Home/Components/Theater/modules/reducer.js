import {
    FETCH_ALL_THEATER_SYSTEM_API
} from './types'
const initialState = {
    theaterSystem: []
}

const theaterReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case FETCH_ALL_THEATER_SYSTEM_API:
            return {...state, theaterSystem: payload}
        default: return {...state}
    }
}

export default theaterReducer