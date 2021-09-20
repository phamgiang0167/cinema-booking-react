import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const movieApi = {
  postLogin(dataUser) {
    return callApi(`QuanLyNguoiDung/DangNhap`, 'POST', dataUser);
  },
  postRegister(dataUser){
    return callApi(`QuanLyNguoiDung/DangKy`, 'POST', dataUser);
  },
  getTicketHistory(){
    return callApi('QuanLyNguoiDung/ThongTinTaiKhoan', 'POST')
  }
};

export default movieApi;
