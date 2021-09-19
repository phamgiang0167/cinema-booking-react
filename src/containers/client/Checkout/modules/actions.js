
import ticketApi from 'apis/ticketApi'
import { connection } from '../../../../index'
import { get } from 'jquery'
import {
    TICKET_ROOM_MANAGEMENT
} from './types'
import { findIndex } from 'lodash'
import swal from "sweetalert"
import { Redirect } from 'react-router'


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
            if(result.status == 200){
                dispatch(actFetchTicketRoomApi(result.data.content))
            }
        }catch(err) {
            console.error(err)
        }
    }
}

export const actBookingTiketApi= (ticketDetail) => {
    console.log(ticketDetail.danhSachVe)
    return async dispatch => {
        try {
            let theaterInfo = await ticketApi.getChiTietPhongVe(ticketDetail.maLichChieu)
            let listSeat = theaterInfo.data.content.danhSachGhe
            console.log(listSeat)
            let duplicatedSeat = false
            listSeat.forEach(e =>{
                ticketDetail.danhSachVe.forEach(ticket => {
                    if(ticket.maGhe == e.maGhe){
                        if(e.taiKhoanNguoiDat != null){
                            swal("Oops", "Một vài vé của bạn vừa có người đặt mất", "error");
                            duplicatedSeat = true
                            location.reload()
                        }
                    }
                })
            })
            if(!duplicatedSeat){
                ticketApi.postBookingTicket(ticketDetail)
                    .then(() => {
                        swal("Oops", "Đặt vé thành công", "success");
                        setTimeout(() => {
                            location.replace('/history')
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
