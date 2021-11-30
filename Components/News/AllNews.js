import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { person, share, calendarSmall } from '../Common/Images'
const AllNews = ({ news }) => {
  return (
    <div className='bg-white mx-2 flex  my-4 border  shadow-lg rounded-xl'>
      <div className='m-3'>
        <Image
          src={news.image}
          alt='college'
          width={234}
          height={181}
          className='rounded-xl20 '
        />
      </div>
      <div className='cursor-pointer'>
        <Link href={`/news/${news.id}`}>
          <div className='py-1 px-2 max-w-xl my-3'>
            <h2 className='h-12 text-lg text-gray-750 font-semibold mb-3'>
              BITSAT Test Centre/ City Allotment 2021 (July 12) - Check Test
              City Allotment Here
            </h2>
            <p className='my-4 flex justify-start items-center font-semibold '>
              <img
                src={person}
                alt='person icon '
                className='h-12px w-12px pr-1 h-12px w-12px'
              />

              <span className='text-blue-550 text-sm pr-2 capitalize'>
                by {news.name}
              </span>
              <span className=' text-gray-470 pr-2'> | </span>

              <img
                src={calendarSmall}
                alt='clalendar icon '
                className='pr-2 w-10px h-10px'
              />

              <span className='text-gray-470 text- text-sm'>2 days ago</span>
            </p>
            <p className='h-12 text-xs my-2 text-gray-480 text-justify'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes .
            </p>
            <div className='text-sm text-gray-500 flex justify-start items-center'>
              <img
                src={share}
                alt='share icon'
                className='pr-2 w-18.85px h-18.85px'
              />

              <h1 className=' font-medium text-gray-430 text-sm15 '>Share</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AllNews
