import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const movieApi = {
    fechAllMovieApi() {
        return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
    },

    fetchMovieDetailApi(movieId) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    },
    fetchMoviePaginationApi(page) {
        return callApi(
            `QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}&soTrang=${page}&soPhanTuTrenTrang=8`
        );
    },
    addMovieUploadImage(formData) {
        return callApi('QuanLyPhim/ThemPhimUploadHinh', 'POST', formData);
    },
    fetchMovieInfoApi(maPhim) {
        return callApi(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
    },
    editMovieInfoApi(formData) {
        return callApi('QuanLyPhim/CapNhatPhimUpload', 'POST', formData);
    },
    deleteMovieApi(maPhim) {
        return callApi(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`, 'DELETE');
    },
};

export default movieApi;
