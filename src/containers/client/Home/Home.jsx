import React from 'react'
import PropTypes from 'prop-types'
import HomeCarousel from 'containers/client/Home/Components/Carousel/HomeCarousel'
import Tab from './Components/Tab/Tab'
import MovieList from './MovieList/MovieList'

function home(props) {
    return (
        <div className="container">
            <HomeCarousel />
            <MovieList />
            <div className="tab mx-20">
                <Tab />
            </div>
            
        </div>
    )
}

home.propTypes = {

}

export default home

