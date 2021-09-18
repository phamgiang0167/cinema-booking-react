import React from 'react'
import HomeCarousel from 'containers/client/Home/Components/Carousel/HomeCarousel'
import MovieList from './Components/MovieList/MovieList'
import Theater from './Components/Theater/Theater'

function Home(props) {
    return (
        <div className="">
            <HomeCarousel history={props.history}/>
            <div style={{padding: "0 20px"}} class="container">
                <Theater />
            </div>
            <div style={{marginTop: "50px"}}>
                <MovieList />
            </div>
            
        </div>
    )
}

export default Home

