
import ticketApi from 'apis/ticketApi'
import {
    TICKET_ROOM_MANAGEMENT
} from './types'
import Swal from 'sweetalert2'
import swal from 'sweetalert'
const actFetchTicketRoomApi = (data) => ({
    type: TICKET_ROOM_MANAGEMENT,
    payload: data
})

const actSeatPlanApi = (data) => ({
    type: "SEAT_PLAN",
    payload: data
})

export const actFetchTicketRoom = (id) => {
    // console.log(id)
    return async dispatch => {
        try {
            const result = await ticketApi.getChiTietPhongVe(id)
            if(result.status === 200){
                dispatch(actFetchTicketRoomApi(result.data.content))
            }
        }catch(err) {
            console.error(err)
        }
    }
}

export const actBookingTiketApi= (ticketDetail) => {
    Swal.fire({
        text: "Đang đặt vé...",
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading()
        }
    })
    
    return async dispatch => {
        try {
            let theaterInfo = await ticketApi.getChiTietPhongVe(ticketDetail.maLichChieu)
            let listSeat = theaterInfo.data.content.danhSachGhe
            // console.log(listSeat)
            let duplicatedSeat = false
            listSeat.forEach(e =>{
                ticketDetail.danhSachVe.forEach(ticket => {
                    if(ticket.maGhe === e.maGhe){
                        if(e.taiKhoanNguoiDat != null){
                            swal("Oops", "Một vài vé của bạn vừa có người đặt mất", "error");
                            Swal.close()
                            duplicatedSeat = true
                            window.location.reload()
                        }
                    }
                })
            })
            if(!duplicatedSeat){
                ticketApi.postBookingTicket(ticketDetail)
                    .then(() => {
                        swal("Chúc mừng", "Đặt vé thành công", "success");
                        Swal.close()
                        setTimeout(() => {
                            window.location.replace('/history')
                        }, 2000)
                    })
            }
        }catch(err) {
            console.error(err)
        }
    }
}
export const actSeatPlan = (seat) => {
    // console.log(seat)
    return async (dispatch) => {
        try {
            await dispatch(actSeatPlanApi(seat))
        }catch(err) {
            console.error(err)
        }
    }
}
