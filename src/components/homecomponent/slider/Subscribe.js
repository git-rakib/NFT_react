import React from 'react'
import CountUp from 'react-countup';

function Subscribe() {

  return (
    <div>
        <div className='xl:flex xm:grid xm:grid-flow-row lg:grid-cols-2 md:grid-cols-3 md:grid-flow-row sm:grid-cols-3 xm:grid-cols-2 lg:justify-center xl:mt-20 md:mt-0 sm:my-8 xm:my-8'>
            <div className='2xl:pr-8 xl:pr-4 xl:border-r border-[#434955] lg:border-0 xl:mb-0 lg:mb-2'>
                <h4 data-value='13' className='js-count-up subscribe-text 2xl:text-[36px] xl:text-[28px] md:text-[22px] sm:text-[20px] xm:text-[18px]'><CountUp end={13} duration={1.5} /> k <span className='ml-4 text-blue-500 font-medium md:text-[18px] sm:text-[16px]'>Subscriber</span></h4>
            </div>
            <div className='2xl:px-8 xl:px-4  xl:border-r border-[#434955] lg:border-0 xl:mb-0 lg:mb-2'>
                <h4 className='subscribe-text 2xl:text-[36px] xl:text-[28px] md:text-[22px] sm:text-[20px] xm:text-[18px]'><CountUp end={33} duration={1.5} /> k <span className='ml-4 text-blue-500 font-medium md:text-[18px] sm:text-[16px]'>Subscriber</span></h4>
            </div>
            <div className='2xl:ml-8 xl:ml-4'>
                <h4 className='subscribe-text 2xl:text-[36px] xl:text-[28px] md:text-[22px] sm:text-[20px] xm:text-[18px]'><CountUp end={16} duration={1.5} /> k+ <span className='ml-4 text-blue-500 font-medium md:text-[18px] sm:text-[16px]'>Subscriber</span></h4>
            </div>
        </div>
    </div>
  )
}

export default Subscribe