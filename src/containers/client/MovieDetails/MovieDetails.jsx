//component...
import Rating from './components/Rating/Rating'
import { actFetchMovieDetail } from './modules/actions'
import moment from 'moment'
import swal from 'sweetalert'

//mui
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MovieInfo from './components/MovieInfo/MovieInfo'
import Loader from 'components/Loader/Loader'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'

//react
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'

//antd
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function MovieDetails(props) {
    const history = useHistory()
    const { id } = useParams()
    const { movieDetail, loading} = useSelector(state => state.movieDetailReducer)
    const classes = useStyles();
    const [calendar, setCalendar] = useState('')
    const [calendarCode, setCalendarCode] = useState('');
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actFetchMovieDetail(id))
    }, [])
    const handleChange = (event) => {
        setCalendar(event.target.value)
    };
    const createTime = (lichChieuPhim) => {
        // console.log(lichChieuPhim)
        return lichChieuPhim?.map((item, index) => {
            return (
                <MenuItem
                    value={item.ngayChieuGioChieu}
                    onClick={() => setCalendarCode(item.maLichChieu)}
                >
                    {moment(item.ngayChieuGioChieu).format('hh:mm, DD-MM-YYYY')}
                </MenuItem>
            )
        })
    }

    const renderTheater = (theaters) => {
        // console.log(theaters)
        return theaters?.map((item, index) => {
            return (
                <TabPane tab={item.tenCumRap} key={item.maCumRap} style={{ textAlign: "left" }}>
                    <div className="d-flex">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Time</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={calendar}
                                onChange={handleChange}
                            >
                                {createTime(item.lichChieuPhim)}
                            </Select>
                        </FormControl>
                        <div style={{ padding: "20px 0" }}>
                            <button
                                onClick={() => {
                                    if (calendarCode === '') {
                                        swal('Bạn chưa chọn ngày giờ chiếu!')
                                    } else {

                                        history.push(`/checkout/${calendarCode}`)
                                    }
                                }}
                            >
                                Đặt ngay
                            </button>
                        </div>
                    </div>
                </TabPane>
            )
        })
    }
    const renderTheaterSystem = () => {
        return movieDetail.heThongRapChieu?.map((item, index) => {
            return (
                <TabPane tab={item.tenHeThongRap} key={index}>
                    <Tabs tabPosition={'top'}>
                        {renderTheater(item.cumRapChieu)}
                    </Tabs>
                </TabPane>
            )
        })
    }

    if(loading) return <Loader />
    
    return (<div style={{ backgroundImage: `url(${movieDetail.hinhAnh})`, backgroundPosition: "center", backgroundSize: "cover", height: "110vh" }}>
        <CustomCard
            effectColor="rgba(255,255,255,0.4)"
            color="rgba(255,255,255,0.4)"
            blur={80}
            borderRadius={0}
            style={{ height: "100%" }}
        >
            <div className="detail__container">
                <div className="row movie__detail-container">
                    <div className='movie__detail-details col-md-9'>
                        <div class="movide__detail-image" style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}></div>
                        <div className="movie__detail-info">
                            <p>Ngày khởi chiếu: {moment(movieDetail.ngayKhoiChieu).add(10, 'days').calendar()}</p>
                            <p>{movieDetail.tenPhim}</p>
                            <a href="#movie__calendar" className="btn-booking">Mua Ve</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="movies__details-rate" style={{ padding: "15px 0" }}>
                            <Rating rate={movieDetail.danhGia} />
                        </div>
                    </div>
                </div>
                <div className="movie__calendar" id="movie__calendar">
                    <Tabs tabPosition={'top'} centered defaultActiveKey="1">
                        <TabPane tab="Lịch chiếu" key='1'>
                            <Tabs tabPosition="top" style={{backgroundColor: "#fff", padding: "10px 20px"}}>
                                {renderTheaterSystem()}
                            </Tabs>
                        </TabPane>
                        <TabPane tab="Thông tin" key='2'>
                            <MovieInfo movieDetail={movieDetail} />
                        </TabPane>
                        <TabPane tab="Đánh giá" key='3'>
                            content
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </CustomCard>
    </div>)
}
