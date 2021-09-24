
import callApi from 'utils/callApi';

const ticketApi = {
  getChiTietPhongVe(id){
      return callApi(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
  },
  postBookingTicket(ticketDetail){
    return callApi('QuanLyDatVe/DatVe', 'POST', ticketDetail)
  },
};

export default ticketApi;
