import React, { useState }  from 'react'
import moment from 'moment';
import { Modal } from 'antd';
export default function HistoryItem(props) {
    const { historyTicket } = props
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // console.log(historyTicket)
    return (
        <div className="col-lg-4 col-md-6" style={{ padding: "10px 20px" }}>
            <div className="shadow-md rounded-2xl history__item">
                <div className="d-flex">
                    <div className="history__image"
                        style={{ backgroundImage: `url(${historyTicket.hinhAnh})` }}
                    >
                    </div>
                    <div className="" style={{ width: "70%" }}>
                        <div className="flex flex-wrap ">
                            <h2 className="text-lg font-medium">{historyTicket.tenPhim}</h2>
                        </div>
                        <p className="mt-3" />

                        <div className="d-flex align-items-center">
                            <i class="fas fa-map-marker-alt"></i>
                            <p style={{ marginBottom: "0", marginLeft: "5px" }}>{historyTicket.danhSachGhe[0].tenHeThongRap}</p>
                        </div>
                        <div className="mt-1"></div>
                        <div className="d-flex align-items-center">
                            <i class="far fa-clock"></i>
                            <p style={{ marginBottom: "0", marginLeft: "5px" }}>{moment(historyTicket.ngayDat).format('hh:mm DD-MM-YYYY')}</p>
                        </div>

                        <div className="flex border-t border-gray-200 " />
                        <div className="mt-2"></div>
                        <div className="d-flex align-items-center">
                            <i class="fas fa-dollar-sign"></i>
                            <p style={{ marginBottom: "0", marginLeft: "5px" }}>{historyTicket.giaVe} Đ</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2"></div>
                <button onClick={showModal}className="mb-2 md:mb-0 bg-gray-900 px-5 py-1 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800" type="button" aria-label="like">Chi tiết</button>
            </div>
            <Modal title={historyTicket.tenPhim} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="modal__container">
                    <h4>Ghế: {historyTicket.danhSachGhe.map((item) => {
                        return `[${item.tenGhe}] `
                    })}</h4>
                    <h4>Hệ thống rạp: {historyTicket.danhSachGhe[0].tenHeThongRap}</h4>
                    <h4>Giá vé: {historyTicket.giaVe}</h4>
                    <h4>Ngày đặt vé: {historyTicket.ngayDat}</h4>
                    <h4>Thời lượng phim: {historyTicket.thoiLuongPhim}</h4>
                </div>
            </Modal>
        </div>

    )
}
