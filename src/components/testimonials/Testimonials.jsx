import React from 'react'
import  './testimonials.css'

import { Pagination } from 'swiper'
import{Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review From Clients</h5>
    <h2>Testimonials</h2>
    <Swiper className='container testimonials__container'
    modules={Pagination}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{clickable:true}}
    >
    
      <SwiperSlide className="testimonial"> 
      <div className='client__avatar'>
        <img src='' alt=''/>
        </div>
        <h5 className='client__name'>Name</h5>
        <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit magni officiis vel ea maxime dolore in quos necessitatibus rerum!</small>
    </SwiperSlide>
      <SwiperSlide className="testimonial"> 
      <div className='client__avatar'>
        <img src='' alt=''/>
        </div>
        <h5 className='client__name'>Name</h5>
        <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit magni officiis vel ea maxime dolore in quos necessitatibus rerum!</small>
    </SwiperSlide>
      <SwiperSlide className="testimonial"> 
      <div className='client__avatar'>
        <img src='' alt=''/>
        </div>
        <h5 className='client__name'>Name</h5>
        <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit magni officiis vel ea maxime dolore in quos necessitatibus rerum!</small>
    </SwiperSlide>



    </Swiper>
    </section>
  )
}

export default Testimonials