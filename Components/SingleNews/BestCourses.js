import React from 'react'

import { notepade, rightbluearrow } from '../Common/Images'

const BestCourses = () => {
  const Course = ({ index }) => {
    return (
      <div className='py-4 px-4 '>
        <div className='flex flex-row justify-between '>
          <h1 className='text-blue-550  font-semibold text-base'>
            Master of Computer technology
          </h1>
          <img src={rightbluearrow} alt='longarrow' className='w-5' />
        </div>
        <div className='flex flex-row max-w-full pt-2 text-xs font-medium text-gray-460 pb-6 '>
          <p className='border-r-2 text-xs border-gray-460 pr-2 text-gray-460'>
            2 year
          </p>
          <p className='border-r-2 text-xs  border-gray-460 px-1  text-gray-460'>
            Bachelor
          </p>
          <p className=' text-xs  border-gray-460 px-1  text-gray-460 '>
            Full Time
          </p>
        </div>
        {index === 3 ? null : <hr />}
      </div>
    )
  }

  return (
    <div className='bg-white border shadow-lg rounded-lg flex flex-col  mx-2'>
      <div className='bg-green-550 w-full h-12 lg:h-72 rounded-t-lg  flex items-center justify-center text-white'>
        <img src={notepade} alt='notepade icon' />

        <h2 className='text-base pt-1 pl-2'> Best Colleges</h2>
      </div>
      {[1, 2, 3, 4].map((item, index) => (
        <Course key={index} index={index} />
      ))}
    </div>
  )
}

export default BestCourses
