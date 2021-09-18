import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const movieApi = {
  postLogin(dataUser) {
    return callApi(`QuanLyNguoiDung/DangNhap`, 'POST', dataUser);
  },
  getTicketHistory(){
    return callApi('QuanLyNguoiDung/ThongTinTaiKhoan', 'POST')
  }
};

export default movieApi;
