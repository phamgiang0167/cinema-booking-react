
import movieApi from 'apis/movieApi'
import {
    FETCH_ALL_MOVIES_API
} from './types'



const actFetchAllMovies = (data) => ({
    type: FETCH_ALL_MOVIES_API,
    payload: data
})


export const actFetchAllMovie = () => {
    return async dispatch => {
        try {
            const {data} = await movieApi.fechAllMovieApi()
            dispatch(actFetchAllMovies(data.content))
        }catch(err) {
            console.error(err)
        }
    }
}
