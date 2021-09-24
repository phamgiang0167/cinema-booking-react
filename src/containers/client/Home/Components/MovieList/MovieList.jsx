import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import MovieItem from '../MovieItem/MovieItem'
import { actFetchAllMovie} from './modules/actions'
import { Pagination } from 'antd';
import Loader from 'components/Loader/Loader'
function MovieList(props) {
    const [currentPage, setCurrentPage] = useState(1)
    let totalPage = 0
    const moviesPerPage = 8
    let moviesRender = []

    //[tat ca, dang chieu, sap chieu]
    const [groupMovie, setGroupMovie] = useState([
        {
            type: "all",
            name: "Toàn Bộ Phim",
            status: true
        },
        {
            type: "dangChieu",
            name: "Phim Đang Chiếu",
            status: false
        },
        {
            type: "sapChieu",
            name: "Phim Sắp Chiếu",
            status: false
        }
    ]) 
    
    //get data of redux
    let { movies, loading } = useSelector(state => state.movieListReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actFetchAllMovie())
    }, [])

    const renderMovies = (page) => {
        //find group of movies
        let group = groupMovie.filter(item => {
            return item.status === true
        })

        //active button
        activeButton(group[0].type)

        
        //filter movies by group
        moviesRender = movies.filter(item => {
            if(group[0].type === 'all'){
                return item
            }
            return item[group[0].type] === true
        })

        //set totalPage, currentPage
        totalPage = Math.ceil(moviesRender.length/moviesPerPage)
        
        //render movies
        return moviesRender.slice((page - 1) * moviesPerPage, page * moviesPerPage)
        .map(item => {
            return (
                <MovieItem movie={item} />
            )
        })
    }
    const handleChange = (page) => {
        setCurrentPage(page)
    }

    const changeGroupMovie = (type) => {
        let newGroups = groupMovie.map(item => {
            if(item.type === type){
                return {...item, status: true}
            }else{
                return {...item, status: false}
            }
        })
        setGroupMovie(newGroups)
    }

    const activeButton = (type) => {
        let buttons = document.getElementsByClassName('movie-group')
        for(let i = 0; i < buttons.length; i++){
            if(buttons[i].classList.contains(type)){
                buttons[i].classList.add('active')
            }else{
                buttons[i].classList.remove('active')
            }
        }
    }

    const renderButtonGroup = () => {
        return groupMovie.map(item => {
            let nameClass = 'movie-group ' + item.type
            return (
                <button
                    class={nameClass}
                    onClick={() =>changeGroupMovie(item.type)}
                >
                    {item.name}
                </button>
            )
        })
    }

    if(loading) return <Loader />
    return (
        <div className="container" id="movie__list">
            <div style={{textAlign:"left"}} class="movieList__button">
                {renderButtonGroup()}
            </div>
            
            <div className="row">
                {renderMovies(currentPage)}
            </div>
            <Pagination simple current={currentPage} total={totalPage*10} onChange={handleChange} />
        </div>
    )
}


export default MovieList

