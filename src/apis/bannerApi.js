import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const bannerApi = {
  fechAllBannerApi() {
    return callApi(`QuanLyPhim/LayDanhSachBanner`);
  },
};

export default bannerApi;
