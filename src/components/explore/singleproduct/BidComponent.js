import React, { useState, useEffect } from 'react'
import abc from '../../../assets/img/2/1.png'

function BidComponent() {


  const [countdownDate] = useState(new Date('12/25/2022').getTime());
  const [state, setState] = useState ({
    days:0,
    hours:0,
    minutes:0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  });

  const setNewTime = () => {
    if(countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 *24));
      let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),);
      let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60),);
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days, hours, minutes, seconds });

    }
  }


  return (
    <div className='bg-[#232738] rounded-3xl py-5 xl:px-8 lg:px-4 md:px-8 xm:px-[18px]'>
    <h4 className='text-center text-white'>Auction ending in</h4>
        <div className='flex justify-between items-center mt-4'>
           <div className='flex'>
           <img className='w-[50px] h-[50px] rounded-full' src={abc} alt='' />
            <div className='ml-4'>
                <span className='text-[#566FFE] block'>0.234wETH</span>
                <b className='text-white'>Alfonso Likens</b>
            </div>
           </div>
           <div>
            <span className='text-[#7D8694]'>
            Heighest bid
            </span>
           </div>
        </div>
        <div className='flex my-9'>
          <div className='flex items-center'>
            <div className='bg-[#111826] xl:p-3 lg:p-3 md:p-4 xm:p-1 rounded-xl w-20 text-center'>
              <h4 className='text-white block xl:text-[25px] sm:text-[20px] xm:text-[18px]'>{state.days || '0'}</h4>
              <span className='text-[#7D8694]'>Days</span>
            </div>
            <b className='text-white 2xl:ml-7 xl:ml-4 lg:ml-[10px] md:ml-4 xm:ml-2'>:</b>
          </div>
          <div className='flex items-center'>
            <div className='bg-[#111826] xl:p-3 lg:p-3 md:p-4 xm:p-1 lg:ml-2 md:ml-4 xm:ml-2 rounded-xl 2xl:ml-6 xl:ml-5 w-20 text-center'>
              <h4 className='text-white block xl:text-[25px] sm:text-[20px] xm:text-[18px]'>{state.hours || '00'}</h4>
              <span className='text-[#7D8694]'>Hours</span>
            </div>
            <b className='text-white 2xl:ml-7 xl:ml-4 lg:ml-[10px] md:ml-4 xm:ml-2'>:</b>
          </div>
          <div className='flex items-center'>
            <div className='bg-[#111826] xl:p-3 lg:p-3 md:p-4 xm:p-1 lg:ml-2 md:ml-4 xm:ml-2 rounded-xl w-20 2xl:ml-6 xl:ml-5 text-center'>
              <h4 className='text-white block xl:text-[25px] sm:text-[20px] xm:text-[18px]'>{state.minutes || '00'}</h4>
              <span className='text-[#7D8694]'>Minutes</span>
            </div>
            <b className='text-white 2xl:ml-7 xl:ml-4 lg:ml-[10px] md:ml-4 xm:ml-2'>:</b>
          </div>
          <div className='flex w-full lg:justify-end md:justify-start items-center'>
            <div className='bg-[#111826] xl:p-3 lg:p-3 md:p-4 xm:p-1 lg:ml-2 md:ml-4 xm:ml-2 rounded-xl w-20 text-center'>
              <h4 className='text-white block xl:text-[25px] sm:text-[20px] xm:text-[18px]'>{state.seconds || '00'}</h4>
              <span className='text-[#7D8694]'>Seconds</span>
            </div>
          </div> 
        </div>
        <button className='px-4 py-3 rounded-xl button-bg font-medium text-white leading-7 w-full'>Place Bid</button>
    </div>
  )
}

export default BidComponent