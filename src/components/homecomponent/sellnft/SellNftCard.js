import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import arrow from '../../../assets/img/icon/arrow.svg'

function SellNftCard(props) {
  AOS.init();
  return (
    <>
        <div data-aos="fade-left"
            data-aos-delay="100"
           data-aos-duration="500" 
            className='2xl:px-[30px] 2xl:py-[34px] xl:p-6 lg:p-8 md:p-6 sm:p-8 xm:p-8 bg-[#232738] rounded-2xl hover:bg-[#1F2332] duration-150'
            >
            <div className='flex justify-between 2xl:mb-[42px] lg:mb-5 sm:mb-10 xm:mb-4'>
                <span><img className='2xl:w-full xl:w-[60px] md:w-[60px] xm:w-[60px]' src={props.img} alt="" /></span>
                <p className='text-[#717585] text-[14px] font-redhet font-bold flex items-center '>Step <span className='ml-2 text-[#4A4D5B] text-[40px]'>{props.stepnum}</span> </p>
            </div>
            <div>
                <h4 className='text-white 2xl:text-[24px] xl:text-[20px] font-roboto mb-[17px]'>{props.title}</h4>
                <p className='text-[#7D8694] 2xl:mb-6 xl:mb-3 leading-6'>{props.pragraph}</p>
                <button className='text-white md:mt-0 sm:mt-2 text-[22px]'><img src={arrow} alt='' /></button>
            </div>
        </div>
    </>
  )
}

export default SellNftCard