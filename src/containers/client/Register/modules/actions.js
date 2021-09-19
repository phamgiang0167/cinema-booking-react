
import userApi from 'apis/userApi'
import {
    REGISTER
} from './types'
import {history} from '../../../../App'
import swal from "sweetalert"
import {actLoginApi} from '../../Login/modules/actions'
const actRegister = (data) => ({
    type: REGISTER,
    payload: data
})

export const actRegisterApi = (user) => {
    return async (dispatch) => {
        userApi.postRegister(user)
            .then((res) => {
                swal("đăng kí thành công", "success")
                dispatch(actLoginApi(user))
            })
            .catch(err => swal("Oops", err.response.data.content, 'error'))
    }
}
