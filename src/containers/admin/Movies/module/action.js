import movieApi from 'apis/movieApi';
import {
    FETCH_MOVIE_LIST_SUCCESS,
    FETCH_MOVIE_LIST_FAILED,
    FETCH_MOVIE_INFO_SUCCESS,
} from './types';

const actFetchAllMovieSucess = (movieList) => {
    return {
        type: FETCH_MOVIE_LIST_SUCCESS,
        payload: movieList,
    };
};
const actFetchAllMovieFailed = (err) => {
    return {
        type: FETCH_MOVIE_LIST_FAILED,
        payload: err,
    };
};
const actFetchMovieInfoSucess = (movieInfo) => {
    return {
        type: FETCH_MOVIE_INFO_SUCCESS,
        payload: movieInfo,
    };
};

// async action
export const actFetchAllMovie = () => {
    return (dispatch) => {
        //call api
        movieApi
            .fechAllMovieApi()
            .then((res) => {
                dispatch(actFetchAllMovieSucess(res.data.content));
            })
            .catch((err) => {
                dispatch(actFetchAllMovieFailed(err));
            });
    };
};

export const actAddMovieUploadImage = (formData, props) => {
    const tenPhimAdded = formData.get('tenPhim');
    return (dispatch) => {
        movieApi
            .addMovieUploadImage(formData)
            .then((res) => {
                //console.log(res.data.content);
                alert(`Thêm phim ${tenPhimAdded} thành công!!`);
                props.history.push('/admin/movies');
            })
            .catch((err) => {
                alert(err);
            });
    };
};
export const actFetchMovieInfo = (maPhim) => {
    return (dispatch) => {
        movieApi
            .fetchMovieInfoApi(maPhim)
            .then((res) => {
                //console.log(res.data.content);
                dispatch(actFetchMovieInfoSucess(res.data.content));
            })
            .catch((err) => {
                //console.log(err);
            });
    };
};
export const actEditMovieInfo = (formData, props) => {
    return (dispatch) => {
        movieApi
            .editMovieInfoApi(formData)
            .then((res) => {
                //console.log('call api');
                //console.log(res);
                alert('Cập nhật phim thành công!!');
                dispatch(actFetchAllMovie());
                props.history.push('/admin/movies');
            })
            .catch((err) => {
                alert(err);
            });
    };
};
export const actDeleteMovie = (maPhim, props) => {
    return (dispatch) => {
        movieApi
            .deleteMovieApi(maPhim)
            .then((res) => {
                dispatch(actFetchAllMovie());
                props.history.push('/admin/movies');
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    };
};
