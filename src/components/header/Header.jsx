import React from 'react'
import  './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.jpg'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Sarang Salame</h1>
      <h5 className='text-light'>Full Stack Developer</h5>
      <CTA />
      <div className='me'>
        <img src={ME} alt='me'/>
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>
      <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header