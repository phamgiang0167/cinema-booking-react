
import React from 'react'
import moment from 'moment'
import './MovieInfo.scss'
export default function MovieInfo(props) {
    const { movieDetail } = props
    console.log(movieDetail)
    return (
        <div className="row text-left movieInfo" style={{backgroundColor: "#fff", padding: "10px 20px"}}>
            <div className="col-md-6 movieInfo__left">
                <table>
                    <tr>
                        <td>Tên Phim</td>
                        <td>{movieDetail.tenPhim}</td>
                    </tr>
                    <tr>
                        <td>Ngày phát hành</td>
                        <td>{movieDetail.ngayKhoiChieu ? moment(movieDetail.ngayKhoiChieu).format("DD-MM-YYYY") : ""}</td>
                    </tr>
                </table>
            </div>
            <div className="col-md-6">
                <table>
                    <tr>Nội dung</tr>
                    <tr>
                        {movieDetail.moTa}
                    </tr>
                </table>
            </div>
        </div>
    )
}
