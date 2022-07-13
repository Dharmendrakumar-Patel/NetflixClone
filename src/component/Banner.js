import React, { useEffect, useState } from 'react'
import axios from '../axios';
import requests from '../request'; 
import './Banner.css'

function Banner() {    
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function getMovies() {
            const response = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                ]
            );
        }
        getMovies();
    },[])

    const truncateText = (text, maxLength) => {
        return text?.length > maxLength ? text.slice(0, maxLength - 1) + '...' : text
    }

  return (
    <div className='banner' style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movies?.backdrop_path}')`,
        backgroundPosition: 'center center'
    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>{ movies?.title || movies?.name || movies?.original_name }</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>
                {truncateText(movies?.overview, 150)}
            </h1>
        </div>

        <div className='banner--fadebutton' />
    </div>
  )
}

export default Banner