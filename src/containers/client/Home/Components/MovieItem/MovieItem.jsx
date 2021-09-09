import React, { useState } from 'react'
import './MovieItem.scss'

import { Modal} from 'antd';
import Button from '@material-ui/core/Button';
function MovieItem(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    var iframe = document.querySelector( 'iframe');
    var video = document.querySelector( 'video' );
    if ( iframe ) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    if ( video ) {
      video.pause();
    }
  };
  const { maPhim, tenPhim, biDanh, trailer, hinhAnh, hot, moTa, ngayKhoiChieu, sapChieu } = props.movie
  return (
    <div className="movieItem__container col-6 col-md-3">
      <div className="movieItem ">
        <div className="movieItem__img" style={{ backgroundImage: `url(${hinhAnh})` }}></div>
        <div className="movieItem__desc">
          <div className="movieItem__desc-name">
            {tenPhim}
          </div>
          <div className="list__btn">
            <Button variant="contained" color="primary" >
              Đặt vé
            </Button>
            {" "}
            <Button variant="outlined" onClick={showModal} color="secondary">
              Trailer
            </Button>
          </div>
          <Modal 
            footer={false}
            width={1000} 
            title={tenPhim} 
            visible={isModalVisible} 
            onCancel={handleCancel}
          >
            <iframe 
              className="movieItem__desc-trailer"
              src={trailer}
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </iframe>
          </Modal>
        </div>
      </div>
    </div>

  )
}



export default MovieItem

