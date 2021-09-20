
import userApi from 'apis/userApi'
import {
    HISTORY_TICKET
} from './types'



const actHistoryTicket = (data) => ({
    type: HISTORY_TICKET,
    payload: data
})


export const actHistoryTicketApi= () => {
    return async dispatch => {
        try {
            const result = await userApi.getTicketHistory()
            dispatch(actHistoryTicket(result.data.content.thongTinDatVe))
        }catch(err) {
            console.error(err)
        }
    }
}
