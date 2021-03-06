import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import Artiests from './Artiests';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import '../../css/bobble.css'


function Artiest() {
  return (
    <>
    <div className='-z-0 grid grid-flow-row grid-cols-3 ml-20 relative'>
    <span className=' bobble '></span>
    <span className=' bobble bobble1'></span>
    <span className=' bobble bobble2'></span>
    </div>

    <div className='container'>
        <div className='flex justify-between lg:mt-[100px] md:mt-10 mb-10'>
            <h4 className='text-[36px] text-white font-roboto'>Top Artist</h4>
            <button className='text-white flex items-center'>View All <BsArrowRightShort className='text-[22px]' /> </button>
        </div>

        <Swiper
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      }}
        autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                }}
        modules={[Autoplay, Pagination]}
        
        pagination={{
                clickable: true,
                }}
       
        >
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/1.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/2.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/3.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/4.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/1.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/2.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/4.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
    </Swiper>   
    </div>
    </>
  )
}

export default Artiest