import React from 'react'
import './Banner.css'

function Banner() {

    const truncateText = (text, maxLength) => {
        return text?.length > maxLength ? text.slice(0, maxLength - 1) + '...' : text
    }

  return (
    <div className='banner' style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/004/288/148/small/sale-banner-poster-flyer-design-with-pattern-on-dark-black-canvas-and-grunge-texture-background-modern-design-backdrop-template-for-advertisement-social-and-fashion-ads-free-vector.jpg')`,
        backgroundPosition: 'center center'
    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>Movie Name</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>
                {truncateText(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 180)}
            </h1>
        </div>

        <div className='banner--fadebutton' />
    </div>
  )
}

export default Banner