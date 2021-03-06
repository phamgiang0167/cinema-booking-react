import React from 'react'
import { Redirect, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, Fragment } from 'react'

import { USER_LOGIN } from 'settings/apiConfig'
import { actFetchTicketRoom, actBookingTiketApi, actSeatPlan } from './modules/actions'

//swal
import Swal from 'sweetalert2'
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
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        if (seatBeingBooked.length === 0) {
            Swal.fire(
                '',
                'B???n ch??a chon gh??? n??o?',
                'question'
            )
        }else {
            swalWithBootstrapButtons.fire({
                title: 'B???n c?? ch???c mu???n ?????t v???',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'C??!',
                cancelButtonText: 'Kh??ng',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
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
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  swalWithBootstrapButtons.fire(
                    '',
                    'Gh??? c???a b???n ch??a ???????c ?????t :)',
                    'error'
                  )
                }
              })
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
                        <p>M??n h??nh</p>
                    </div>
                    <div className="checkout__seat">
                        {renderSeat()}
                        <div className="row" style={{marginTop: "20px", width: "100%"}}>
                            <div className="col-lg-3 col-6 d-flex align-items-center">
                                <div className="checkout__seat-item" style={{width: "30px", height: "30px"}}></div>
                                <div>Gh??? th?????ng</div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center">
                                <div className="checkout__seat-item gheVip" style={{width: "30px", height: "30px"}}></div>
                                <div>Gh??? Vip</div>
                            </div>
                            <div className="col-lg-3 col-6  d-flex align-items-center">
                                <div className="checkout__seat-item gheDangDat" style={{width: "30px", height: "30px"}}></div>
                                <div>Gh??? ??ang ch???n</div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center">
                                <div className="checkout__seat-item gheDaDat" style={{width: "30px", height: "30px"}}></div>
                                <div>Gh??? ???? ???????c ?????t</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <h3 className='text-center text-2xl text-green-400'>
                        {seatBeingBooked.reduce((total, item, index) => {
                            return total = total + item.giaVe
                        }, 0)} ??
                    </h3>
                    <hr />
                    <h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
                    <p>?????a ??i???m: {thongTinPhim.tenCumRap}</p>
                    <p>Ng??y Chi???u: {thongTinPhim.gioChieu + ', ' + thongTinPhim.ngayChieu}</p>
                    <hr />
                    <div>
                        <div className='text-red-400'>
                            Gh???: {
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
                        <i>S??? ??i???n tho???i:</i><br />
                        {userLogin.soDT}
                    </div>
                    <hr />
                    <button
                        class="btn-checkout"
                        onClick={() => { handleCheckout() }}
                    >
                        ?????t v??
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function (props) {
    return (
        <div className="md:p-5" style={{margin: "60px 0"}}>
           <Checkout {...props} />
        </div>
    )
}

