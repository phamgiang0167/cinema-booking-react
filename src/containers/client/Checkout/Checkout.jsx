import React from 'react'
import { Redirect, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, Fragment } from 'react'

import { USER_LOGIN } from 'settings/apiConfig'
import { actFetchTicketRoom, actBookingTiketApi, actSeatPlan } from './modules/actions'

//swal
import swal from 'sweetalert';

//component
import Loader from 'components/Loader/Loader'
function Checkout() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { userLogin } = useSelector(state => state.userManagementReducer)
    const { ticketRoomDetail, seatBeingBooked, seatSomeoneElse, loading } = useSelector(state => state.ticketRoomDetailReducer)

    const { thongTinPhim, danhSachGhe } = ticketRoomDetail
    useEffect(() => {
        dispatch(actFetchTicketRoom(id))
    }, [])
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login" />
    }
    // console.log(ticketRoomDetail)

    const renderSeat = () => {
        return danhSachGhe?.map((item, index) => {
            let className = ''
            className = item.loaiGhe === "Thuong" ? "gheThuong" : "gheVip"
            if (seatBeingBooked.includes(item)) {
                className = "gheDangDat"
            }
            if(seatSomeoneElse.includes(item)){
                className = "gheDangCoNguoiDat"
            }
            return (
                <Fragment key={index}>
                    <button
                        onClick={() => dispatch(actSeatPlan(item))}
                        disabled={item.daDat}
                        className={
                            item.taiKhoanNguoiDat ? `checkout__seat-item gheDaDat` : `checkout__seat-item ${className}`}
                    >
                        {item.stt}
                    </button>
                </Fragment>
            )
        })
    }
    const handleCheckout = () => {
        if (seatBeingBooked.length === 0) {
            swal("Oops!", "Bạn chưa chọn ghế nào!", "error");
        }else {
            swal({
                title: "Bạn có chắc muốn đặt vé?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((confirm) => {
                    if (confirm) {
                        let danhSachVe = []
                        for (let i = 0; i < seatBeingBooked.length; i++) {
                            danhSachVe.push({
                                maGhe: seatBeingBooked[i].maGhe,
                                giaVe: seatBeingBooked[i].giaVe
                            })
                        }
                        dispatch(actBookingTiketApi({
                            maLichChieu: id,
                            danhSachVe: danhSachVe
                        }))
                    }
            });
        }
    }
    if(loading) return <Loader />
    return (
        <div className="container">
            <div className="row text-left">
                <div className="col-md-8">
                    <div>

                    </div>
                    <div className='hinh_thang'>
                        <p>Màn hình</p>
                    </div>
                    <div className="checkout__seat">
                        {renderSeat()}
                        <div className="row" style={{marginTop: "20px", width: "100%"}}>
                            <div className="col-md-3 col-6 d-flex align-items-center">
                                <div className="checkout__seat-item" style={{width: "30px", height: "30px"}}></div>
                                <div>Ghế thường</div>
                            </div>
                            <div className="col-md-3 col-6 d-flex align-items-center">
                                <div className="checkout__seat-item gheVip" style={{width: "30px", height: "30px"}}></div>
                                <div>Ghế Vip</div>
                            </div>
                            <div className="col-md-3 col-6  d-flex align-items-center">
                                <div className="checkout__seat-item gheDangDat" style={{width: "30px", height: "30px"}}></div>
                                <div>Ghế Đang chọn</div>
                            </div>
                            <div className="col-md-3 col-6 d-flex align-items-center">
                                <div className="checkout__seat-item gheDaDat" style={{width: "30px", height: "30px"}}></div>
                                <div>Ghế đã được đặt</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <h3 className='text-center text-2xl text-green-400'>
                        {seatBeingBooked.reduce((total, item, index) => {
                            return total = total + item.giaVe
                        }, 0)} Đ
                    </h3>
                    <hr />
                    <h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
                    <p>Địa điểm: {thongTinPhim.tenCumRap}</p>
                    <p>Ngày Chiếu: {thongTinPhim.gioChieu + ', ' + thongTinPhim.ngayChieu}</p>
                    <hr />
                    <div>
                        <div className='text-red-400'>
                            Ghế: {
                                seatBeingBooked.map((item, index) => {
                                    return item.stt + ' '
                                })
                            }
                        </div>
                    </div>
                    <hr />
                    <div>
                        <i>Email:</i><br />
                        {userLogin.email}
                    </div>
                    <hr />
                    <div>
                        <i>Số điện thoại:</i><br />
                        {userLogin.soDT}
                    </div>
                    <hr />
                    <button
                        class="btn-checkout"
                        onClick={() => { handleCheckout() }}
                    >
                        Dat ve
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function (props) {
    return (
        <div className="md:p-5" style={{marginTop: "60px"}}>
           <Checkout {...props} />
        </div>
    )
}

