import {
    TICKET_ROOM_MANAGEMENT,
    SEAT_PLAN
} from './types'
const initialState = {
    ticketRoomDetail: {
        thongTinPhim: {
            "maLichChieu": 0,
            "tenCumRap": "",
            "tenRap": "",
            "diaChi": "",
            "tenPhim": "",
            "hinhAnh": "",
            "ngayChieu": "",
            "gioChieu": ""
        },
    },
    seatBeingBooked: [],
    seatSomeoneElse: [],
    loading: true
}

const ticketRoomDetailReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case TICKET_ROOM_MANAGEMENT:
            return {...state, ticketRoomDetail: payload, loading: false}
        case SEAT_PLAN:
            // console.log(state)
            let seatBeingBookedUpdate = [...state.seatBeingBooked]
            let index = seatBeingBookedUpdate.findIndex((item) => item.maGhe === payload.maGhe)
            if(index != -1){
                seatBeingBookedUpdate.splice(index, 1)
            }else{
                seatBeingBookedUpdate.push(payload)
            }
            return {...state, seatBeingBooked: seatBeingBookedUpdate}
        default: return {...state}
    }
}

export default ticketRoomDetailReducer