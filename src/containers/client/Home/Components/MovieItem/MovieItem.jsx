import React, { useState } from 'react'
import { Modal} from 'antd';
import { NavLink } from 'react-router-dom';
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
  const { maPhim, tenPhim,trailer, hinhAnh } = props.movie
  return (
    <div className="movieItem__container col-6 col-md-4 col-lg-3">
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
      <div className="movie">
          <div className="movie-img">
            <div className="movie-img__img">
              <img
                src={hinhAnh}
                alt="movie-alt"
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = "/images/error.jpg";
                }}
              />
            </div>
            <div className="movie-img__overlay" onClick={() => showModal()}></div>
            <div className="movie__play">
              <i
                onClick={() => showModal()}
                className="fa fa-play"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="movie-info">
            <div className="info">
              <div className="name-movie">{tenPhim}</div>
              <div className="info-movie">103 phút - 7.3 IMDb</div>
            </div>
            <div className="book-ticket">
              <NavLink to={`/details/${maPhim}`}>
                <span>MUA VÉ</span>
              </NavLink>
            </div>
          </div>
        </div>
    </div>

  )
}



export default MovieItem

