import React from "react";
import "./service.css";
import { BsCheck2 } from "react-icons/bs";
const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container service__container'>
        <article className='services'>
          <div className='service__head'>
            <h3>UI/Ux Design</h3>
          </div>
          <ul>
            <li className="service__list">
              <BsCheck2 className='service__list-icon' />
              <p className='service__list-p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                consequuntur.
              </p>
            </li>
            <li className="service__list">
              <BsCheck2 className='service__list-icon' />
              <p className='service__list-p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                consequuntur.
              </p>
            </li>
            <li className="service__list">
              <BsCheck2 className='service__list-icon' />
              <p className='service__list-p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                consequuntur.
              </p>
            </li>
            <li className="service__list">
              <BsCheck2 className='service__list-icon' />
              <p className='service__list-p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                consequuntur.
              </p>
            </li>
          </ul>
        </article>
      
        <article className='services'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul>
            <li className="service__list">
              <BsCheck2 className='service__list-icon' />
              <p className='service__list-p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                consequuntur.
              </p>
            </li>
            <li className="service__list">
              <BsCheck2 className='service__list-icon' />
              <p className='service__list-p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                consequuntur.
              </p>
            </li>
            <li className="service__list">
              <BsCheck2 className='service__list-icon' />
              <p className='service__list-p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                consequuntur.
              </p>
            </li>
            <li className="service__list">
              <BsCheck2 className='service__list-icon' />
              <p className='service__list-p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                consequuntur.
              </p>
            </li>
            <li className="service__list">
              <BsCheck2 className='service__list-icon' />
              <p className='service__list-p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
                consequuntur.
              </p>
            </li>
            
          </ul>
        </article>


        <article className='services'>
      <div className='service__head'>
        <h3>Content Creator</h3>
      </div>
      <ul>
        <li className="service__list">
        <BsCheck2 className='service__list-icon'/>
          <p className='service__list-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, consequuntur.</p>
        </li>
        <li className="service__list">
        <BsCheck2 className='service__list-icon'/>
          <p className='service__list-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, consequuntur.</p>
        </li>
        <li className="service__list">
        <BsCheck2 className='service__list-icon'/>
          <p className='service__list-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, consequuntur.</p>
        </li>
        <li className="service__list">
        <BsCheck2 className='service__list-icon'/>
          <p className='service__list-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, consequuntur.</p>
        </li>
        
      </ul>
    </article>
      </div>
    </section>
  );
};

export default Service;
