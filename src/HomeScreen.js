import React from 'react'
import Banner from './component/Banner'
import Nav from './component/Nav'
import Row from './component/Row'
import './HomeScreen.css'
import requests from './request'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        <Banner />
        <Row  title="Netflix Orignals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row  title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row  title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row  title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row  title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen