import {
    FETCH_ALL_MOVIES_API
} from './types'
const initialState = {
    movies: [],
    loading: true
}

const movieListReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case FETCH_ALL_MOVIES_API:
            return {...state, movies: payload, loading: false}
        default: return {...state}
    }
}

export default movieListReducer