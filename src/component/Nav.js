import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleShow)
    return () => {
      window.removeEventListener('scroll', handleShow)
    }
  },[])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img className='nav__logo' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='netflix'/>
        <img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='netflix'/>
      </div>
    </div>
  )
}

export default Nav