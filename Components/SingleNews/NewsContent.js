import React from 'react'
import { college, person, planner, linkicon } from '../Common/Images'
import Image from 'next/image'
const NewsContent = () => {
  return (
    <div className='mb-12 border rounded-lg shadow-xl px-10 '>
      <div className='flex flex-col w-full rounded-lg'>
        <Image
          alt='college'
          src={college}
          className='rounded-xl10'
          height={561}
          width={884}
        />
        <h1 className='text-xl my-4 max-w-4xl text-gray-750 font-semibold tracking-wide'>
          BITSAT Test Centre/ City Allotment 2021 (July 12) - Check Test City
          Allotment Here
        </h1>
        <p className='my-4 flex justify-start items-center font-semibold '>
          <img src={person} alt='person icon ' className='w-5 pr-1 h-5 ' />

          <span className='text-blue-550 font-semibold text-lg pr-2 capitalize'>
            by Ramdas sharma
          </span>
          <span className=' text-gray-470 pr-2'> | </span>

          <img src={planner} alt='clalendar icon ' className='pr-2 w-5 h-5' />

          <span className='text-gray-470 font-semibold  text-lg '>
            2 days ago
          </span>
        </p>
        <p className='text-gray-480 text-lg text-justify'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes .Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes
          .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes
          <br />
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes .Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes
          .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes .
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes .Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes.
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes . Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit.
          <br />
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes .Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes
          .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes .
        </p>
      </div>

      <h1 className='text-lg mb-6 font-semibold mt-8 '>Related links</h1>
      <div className='mb-12 flex  justify-start'>
        <button className='bg-black py-2 px-6 text-white underline mr-7 rounded-sml text-lg flex justify-between items-center '>
          <img src={linkicon} alt='link-icon' width='18px' height='18px' />
          <a className='pl-2'>Aenean massa</a>
        </button>
        <button className='bg-black py-2 px-6 text-white underline  rounded-sml text-lg flex justify-between items-center '>
          <img src={linkicon} alt='link-icon' width='18px' height='18px' />
          <a className='pl-2'>Aenean massa</a>
        </button>
      </div>
    </div>
  )
}
export default NewsContent
