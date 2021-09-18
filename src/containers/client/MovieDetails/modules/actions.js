
import movieApi from 'apis/movieApi'
import {
    FETCH_MOVIE_DETAIL_API
} from './types'



const actFetchMovieDetailApi = (data) => ({
    type: FETCH_MOVIE_DETAIL_API,
    payload: data
})


export const actFetchMovieDetail = (id) => {
    // console.log(id)
    return async dispatch => {
        try {
            const {data} = await movieApi.fetchMovieDetailApi(id)
            dispatch(actFetchMovieDetailApi(data.content))
        }catch(err) {
            console.error(err)
        }
    }
}
