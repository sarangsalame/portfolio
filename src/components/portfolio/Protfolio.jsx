import React from 'react'
import './portfolio.css'
import img1 from '../../assets/starbucks.jpg'
import img2 from '../../assets/spacex.jpg'
import img3 from '../../assets/frontendmentor.jpg'

const Protfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
      
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={img1} alt="project"/>
        </div>
        <h3>Starbucks Clone</h3>

        <div className='portfolio__item-cta'>
        <a href='https://github.com/sarangsalame/StarbucksClone' className='btn'>GitHub</a>
        <a href='https://starbucks-clone-sarang.netlify.app' className='btn btn-primary' rel="noreferrer" target='_blank'>Demo</a>
        
        </div>
      </article>


      
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img height= "130px" src={img2} alt="project"/>
        </div>
        <h3>SpaceX Clone</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com/sarangsalame/spaceX' className='btn'>GitHub</a>
        <a href='https://spacex-clone-group-project.netlify.app' className='btn btn-primary'  rel="noreferrer" target='_blank'>Demo</a>
        </div>
      
      </article>



      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={img3} alt="project"/>
        </div>
        <h3>Project tracking intro component</h3>

        <div className='portfolio__item-cta'>
        <a href='https://github.com/sarangsalame/project-tracking-intro-component-master' className='btn'>GitHub</a>
        <a href='https://frontend-mentor-responsive-frontpage.netlify.app' className='btn btn-primary'  rel="noreferrer" target='_blank'>Demo</a>
        
        </div>
      </article>
      </div>
    
    
    </section>
  )
}

export default Protfolio
