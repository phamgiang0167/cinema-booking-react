import {
    FETCH_ALL_MOVIES_API
} from './types'
const initialState = {
    movies: []
}

const homeReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case FETCH_ALL_MOVIES_API:
            return {...state, movies: payload}
        default: return {...state}
    }
}

export default homeReducer