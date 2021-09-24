import {
    FETCH_MOVIE_LIST_SUCCESS,
    FETCH_MOVIE_LIST_FAILED,
    FETCH_MOVIE_INFO_SUCCESS,
} from './types';

const initialState = {
    movieList: [],
    error: '',
    movieInfo: {},
    isDelete: false,
};

function movieAdminReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_MOVIE_LIST_SUCCESS: {
            return { ...state, movieList: payload };
        }
        case FETCH_MOVIE_LIST_FAILED: {
            return { ...state, error: payload };
        }
        case FETCH_MOVIE_INFO_SUCCESS: {
            return { ...state, movieInfo: payload };
        }
        default:
            return state;
    }
}

export default movieAdminReducer;
