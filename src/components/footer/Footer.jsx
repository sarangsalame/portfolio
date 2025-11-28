import React from 'react'
import  './footer.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>SARANG SALAME</a>
      <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
      <a href='https://www.linkedin.com/in/sarang-salame/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/sarangsalame' target='_blank'><BsGithub/></a>
      </div>
      <div className='footer__copyright'>
      <small>
      &copy; Sarang Salame. All rights Reserved
      </small>
      </div>
    </footer>
  )
}

export default Footer