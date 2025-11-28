import React from "react";
import "./about.css";
import ME from "../../assets/d.gif";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id='about' className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={ME} alt='me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3 Years and 3 Months</small>
            </article>
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Skills</h5>
                <small>Next.js, React.js, MERN, Tailwind, CI/CD</small>
              </article>  
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>5+ </small>
              </article>
            </div>
            
            
          <p>
            <b>Frontend / MERN Stack Developer</b> with 3+ years of experience building scalable, high-performance web applications using MERN Stack. Specialized in UI performance optimization, reusable component architecture, responsive design, & API integrations. Proven ability to deliver user-centric interfaces, reduce load times, & collaborate in Agile environments.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
