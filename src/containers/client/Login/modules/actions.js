
import userApi from 'apis/userApi'
import {
    LOGIN
} from './types'
import {history} from '../../../../App'


const actLogin = (data) => ({
    type: LOGIN,
    payload: data
})


export const actLoginApi = (user) => {
    // console.log(user)
    return async dispatch => {
        try {
            const result = await userApi.postLogin(user)
            // console.log(result)
            if(result.status === 200){
                dispatch(actLogin(result.data.content))
                history.goBack()
            }
        }catch(err) {
            console.error(err)
        }
    }
}
