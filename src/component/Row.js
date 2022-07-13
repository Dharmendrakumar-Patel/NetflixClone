import React, { useState, useEffect} from 'react'
import axios  from '../axios'
import './Row.css'

function Row({
    title,
    fetchUrl,
    isLargeRow
}) {
   
    const [movies, setMovies] = useState([])

    const baseURL = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        async function getMovies() {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results)
        }
        getMovies();
    },[fetchUrl])

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__images'>
            {
                movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <img 
                            className={`${isLargeRow ? 'row__imageLarge' : 'row__imageSmall'}`}
                            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name} 
                            key={movie.id}
                        /> 
                    )
                ))
            }
        </div>
    </div>
  )
}

export default Row