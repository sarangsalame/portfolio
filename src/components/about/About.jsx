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
              <small>Fresher</small>
            </article>

            
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Skills</h5>
                <small></small>
              </article>
            

            
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>5+ </small>
              </article>
            </div>
            
            
          <p>
          I am constantly seeking new challenges and opportunities to grow and develop. Currently, I am diving into the world of Full Stack Development, acquiring the skills needed to create websites using HTML, CSS, JavaScript, and React. My background in Mechanical Engineering has taught me the importance of problem-solving, critical thinking, and attention to detail, which I believe will serve me well in my new field. I am eager to put my skills to use and create dynamic, user-friendly websites that deliver exceptional user experiences.
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
