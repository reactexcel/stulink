import React from 'react'
import { coursesIcon } from '../Common/Images'
import CoursesList from './CoursesList'
import Faqs from './Faqs'
import { reviewIcon } from '../Common/Images'
import StudentReview from './StudentReview'
import StarRating from './StarRating'
import { downIcon } from '../Common/Images'

const Programmes = () => {
  return (
    <div className='rounded-lg border-2 border-gray-300 border-r-8 text-black p-3 text-center my-3 hover:bg-gray-300'>
      <span className='text-xl text-center'>B.sc</span>
    </div>
  )
}

const CoursesContainer = () => {
  return (
    <div>
      <div className='grid grid-cols-4 mt-5 gap-x-3'>
        <div className='col-span-1'>
          <div className=' rounded-tl-md rounded-tr-md bg-blue-550 text-white p-3 text-center'>
            <span className=' text-xl text-center'>Programmes</span>
          </div>
          <Programmes />
          <Programmes />
          <Programmes />
          <Programmes />
          <Programmes />
          <Programmes />
          <Programmes />
          <Programmes />
          <Programmes />
          <Programmes />
        </div>
        <div className='col-span-3'>
          <div className='flex'>
            <img src={coursesIcon} alt='coursesIcon' className=' h-8 w-8' />
            <span className=' text-blue-500 text-2xl font-Poppins ml-2'>
              {' '}
              Courses{' '}
            </span>
          </div>
          <CoursesList />
          <CoursesList />
          <CoursesList />
        </div>
      </div>
      <Faqs />
      <StarRating />
      <div className='mt-4 border-t-2 pt-16'>
        <div className='flex justify-center items-center'>
          <img
            src={reviewIcon}
            alt='ratingIcon'
            height='33px'
            width='33px'
            className=' mr-2.5'
          />
          <p className='text-blue-550 text-2xl font-black'> Student Reviews</p>
        </div>
        <StudentReview />
        <StudentReview />
        <StudentReview />
        <p className='text-center text-blue-550 flex justify-center items-center p-3'>
          View more
          <img src={downIcon} alt='view more' className=' h-1.5 w-3 ml-1.5' />
        </p>
      </div>
    </div>
  )
}
export default CoursesContainer
