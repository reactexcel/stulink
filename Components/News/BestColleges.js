import React from 'react'
import { college } from '../Common/Images'
import { school, locationBlue } from '../Common/Images'
const BestColleges = () => {
  const College = ({ index }) => {
    return (
      <div className='py-4 px-2'>
        <div className='flex flex-row '>
          <img className='w-12 h-12 rounded-full ' src={college} />
          <div className='mx-2'>
            <h1 className='text-gray-850'>Chandigarh University</h1>
            <div className='flex items-center justify-start py-2 '>
              <img
                src={locationBlue}
                alt='location blue'
                height='10px'
                width='10px'
              />
              <h4 className='text-xs  capitalize text-blue-550 font-semibold pl-1'>
                Chandigarh
              </h4>
            </div>
          </div>
        </div>
        <div className='flex font-normal text-gray-470 flex-row flex-wrap w-full my-2 pb-4'>
          <p className='border-r-2 text-xs11  border-gray-400  text-gray-470 pr-1'>
            Adminssion
          </p>
          <p className='border-r-2 text-xs11  border-gray-400 text-gray-470  px-1 '>
            PlaceMent
          </p>
          <p className='border-r-2 text-xs11  border-gray-400 text-gray-470 px-1'>
            Courses
          </p>
          <p className='border-r-2 text-xs11  border-gray-400 text-gray-470  px-1'>
            CutOff
          </p>
          <p className='border-r-2 text-xs11 border-gray-400  text-gray-470 px-1 '>
            Fees
          </p>
          <p className='text-xs11 border-gray-400  text-gray-470 '>Review</p>
        </div>
        {index === 3 ? null : <hr />}
      </div>
    )
  }

  return (
    <div className='bg-white border shadow-lg   rounded-lg flex flex-col  mx-2'>
      <header className='bg-green-550 lg:70 w-full h-12 rounded-t-lg  flex items-center justify-center text-white'>
        <img
          src={school}
          alt='school icon'
          className='pr-2'
          height='24px'
          width='24px'
        />
        <h1 className='pt-1 text-lg font-medium'>Best Colleges</h1>
      </header>
      {[1, 2, 3, 4].map((item, index) => (
        <College key={index} index={index} />
      ))}
    </div>
  )
}

export default BestColleges
