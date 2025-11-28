import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
const frontendExp = [
  { name: 'React.js', experience: '3+ years'},
  { name: 'Next.js', experience: '3+ years'},
  { name: 'Javascript', experience: '3+ years'},
  { name: 'Tailwind', experience: '3+ years'},
  { name: 'BootStrap', experience: '3+ years'},
  { name: 'CSS', experience: '3+ years'},
  { name: 'TypeScript', experience: '3+ years'},
  ]
const backendExp = [
  { name: 'Node.js', experience: '1+ years'},
  { name: 'Express.js', experience: '1+ years'},
  { name: 'MongoDb', experience: '1+ years'},
  ]
  return (
    <section id='experience' className='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {frontendExp.map((item, ind)=>{
              <article key={ind} className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>{item.name}</h4>
              <small className='text-light'>{item.experience}</small>
              </div>
            </article>
            }}
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            {backendExp.map((item, ind)=>{
              <article key={ind} className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>{item.name}</h4>
              <small className='text-light'>{item.experience}</small>
              </div>
            </article>
            }}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
