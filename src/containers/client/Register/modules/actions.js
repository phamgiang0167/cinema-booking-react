
import userApi from 'apis/userApi'
import swal from "sweetalert"
import {actLoginApi} from '../../Login/modules/actions'

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
