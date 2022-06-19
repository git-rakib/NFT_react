import React from 'react'
import icon from '../../assets/img/about/4/1.png'
import icon2 from '../../assets/img/about/4/2.png'
import icon3 from '../../assets/img/about/4/3.png'
import icon4 from '../../assets/img/about/4/4.png'

function Sucess() {
  return (
    <div className='xl:py-[100px] lg:py-24 bg-[#111826]'>
        <div className='container'>
            <h2 className='text-white mb-20 text-center'>Our mission is healping people <br></br> to get success</h2>
            <div className='grid grid-flow-row xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-8'>
                <div className='bg-[#232738] relative rounded-[18px] text-center p-6 xl:mb-0 md:mb-10'>
                <img className=' absolute w-[75px] left-[38%] 2xl:top-[-15%] xl:top-[-12%] md:top-[-20%]' src={icon} alt='' />
                  <h4 className='mb-4 xl:mt-12 lg:mt-8 md:mt-6 text-[28px] font-normal text-white'>Transperancy</h4>
                  <p className='text-[#7D8694] text-[16px] mb-2'>Aliquam mauris volutpat vestibulum diam. Ultricies tortor diam amet nulla odio integer condimentum.</p>      
                </div>
                <div className='bg-[#232738] relative rounded-[18px] text-center p-6 xl:mb-0 md:mb-10'>
                <img className=' absolute w-[75px] left-[38%] 2xl:top-[-15%] xl:top-[-12%] md:top-[-20%]' src={icon2} alt='' />
                  <h4 className='mb-4  xl:mt-12 lg:mt-8 md:mt-6 text-[28px] font-normal text-white'>Security Guarantee</h4>
                  <p className='text-[#7D8694] text-[16px] mb-2'>Aliquam mauris volutpat vestibulum diam. Ultricies tortor diam amet nulla odio integer condimentum.</p>      
                </div>
                <div className='bg-[#232738] relative rounded-[18px] text-center p-6'>
                <img className=' absolute w-[75px] left-[38%] 2xl:top-[-15%] xl:top-[-12%] md:top-[-20%]' src={icon3} alt='' />
                  <h4 className='mb-4  xl:mt-12 lg:mt-8 md:mt-6 text-[28px] font-normal text-white'>Fastest response</h4>
                  <p className='text-[#7D8694] text-[16px] mb-2'>Aliquam mauris volutpat vestibulum diam. Ultricies tortor diam amet nulla odio integer condimentum.</p>      
                </div>
                <div className='bg-[#232738] relative rounded-[18px] text-center p-6'>
                <img className=' absolute w-[75px] left-[38%] 2xl:top-[-15%] xl:top-[-12%] md:top-[-20%]' src={icon4} alt='' />
                  <h4 className='mb-4  xl:mt-12 lg:mt-8 md:mt-6 text-[28px] font-normal text-white'>Experienced team</h4>
                  <p className='text-[#7D8694] text-[16px] mb-2'>Aliquam mauris volutpat vestibulum diam. Ultricies tortor diam amet nulla odio integer condimentum.</p>      
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sucess