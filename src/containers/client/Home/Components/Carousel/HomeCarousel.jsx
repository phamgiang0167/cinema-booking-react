import React, { useEffect } from 'react'

import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { actFetchAllBanner } from '../../modules/actions';
import './HomeCarousel.scss'
import { useState } from 'react';

export default function HomeCarousel(props) {
    const dispatch = useDispatch()
    const [banners, setBanners] = useState([])
    useEffect(() => {
        async function fetchAllBanner(){
            const requestURL = 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner'
            const response = await fetch(requestURL)
            const responseJSON = await response.json()
            const {content} = responseJSON
            setBanners(content)
        }
        fetchAllBanner()
    }, [])

    const renderCarousel = () => {
        return banners.map((item, index) => {
            return (
                <div key={index} className="carousel__container">
                   <div class="carousel__item" style={{backgroundImage: `url(${item.hinhAnh})`}}></div>
                </div>
            )
        })
    }
    return (
        <Carousel>
            {renderCarousel()}
        </Carousel>
    )
}
