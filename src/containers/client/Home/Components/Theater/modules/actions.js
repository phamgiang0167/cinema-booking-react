
import theaterApi from 'apis/theaterApi'
import {
    FETCH_ALL_THEATER_SYSTEM_API
} from './types'



const actFetchAllTheaterSystemSuccess = (data) => ({
    type: FETCH_ALL_THEATER_SYSTEM_API,
    payload: data
})


export const actFetchAllTheaterSystem = () => {
    return async dispatch => {
        try {
            const {data} = await theaterApi.fechAllTheaterSystemApi()
            dispatch(actFetchAllTheaterSystemSuccess(data.content))
        }catch(err) {
            console.error(err)
        }
    }
}
