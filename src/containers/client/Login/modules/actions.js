
import userApi from 'apis/userApi'
import {
    LOGIN
} from './types'
import {history} from '../../../../App'
import swal from "sweetalert"

const actLogin = (data) => ({
    type: LOGIN,
    payload: data
})


export const actLoginApi = (user) => {
    // console.log(user)
    return async dispatch => {
        try {
            const result = await userApi.postLogin(user)
            if(result.status === 200){
                dispatch(actLogin(result.data.content))
                history.push('/login')
            }
        }catch(err) {
            swal("Oops","Thông tin tài khoản không đúng", "error")
        }
    }
}
