import React, { useState } from 'react'
import {
  memberSchool,
  locationWhite,
  linkPersonBlue,
  linkPersonWhite,
  linkCorrect,
  mutualFriend,
  mutualFriend2,
} from '../Common/Images'
const Member = () => {
  const [isLink, setIsLink] = useState(false)
  return (
    <article className='grid grid-cols-3 justify-center  shadow-lgOuter20  border-gray-300 rounded-xl20 px-6 py-6'>
      <img
        src='/img/member.png'
        alt='Profile'
        height={74}
        width={74}
        className='rounded-full object-cover h-74 col-span-1'
      />
      <section className=' pr-2 col-span-2'>
        <h4 className='font-semibold text-base'>Sand Rama</h4>
        <p className='text-xs10 text-gray-400 pb-1 '>@Sandrama</p>
        <p className='flex justify-start items-center capitalize text-xs pb-1 text-gray-400'>
          <img
            src={locationWhite}
            alt='location icon'
            className='max-h-2.5 pr-1  '
          />
          mohali , india
        </p>
        <p className='text-blue-550 text-xs capitalize font-medium   flex items-center justify-start pb-3'>
          <img
            src={memberSchool}
            alt='icon'
            height={11}
            width={11}
            className='pr-1 '
          />
          Chandigarh University
        </p>
        {/* overlapping images */}
        <p className='text-xs10 text-gray-400 pb-4 flex justify-center items-center relative'>
          <div className='flex content-center relative'>
            <img
              src={mutualFriend}
              alt='mutual 1'
              className='absolute top-1 right-4 z-10'
              width='18px'
            />

            <img
              src={mutualFriend2}
              alt='mutual 2 '
              className='top-0 left-7 absolute'
              width='18px'
            />

            {/* <img src={mutualFriend} alt='mutual 3' className=' ' width='18px' />

            <img src={mutualFriend} alt='mutual 4' className='' width='18px' /> */}
          </div>
          <span>+4 Mututal friends</span>
        </p>

        <button
          type='button'
          className={`${
            isLink
              ? 'border border-blue-550 text-white  bg-blue-550 px-5 py-2  transition duration-300 flex justify-center items-center   rounded text-xs font-medium'
              : 'border border-blue-550 text-blue-550 px-6 py-2 font-medium transition duration-300 flex justify-center items-center   rounded text-xs'
          }`}
          onClick={() => setIsLink(!isLink)}
        >
          {isLink ? (
            <>
              <img src={linkCorrect} alt='correct icon' />
              <img
                src={linkPersonWhite}
                alt='person white'
                className='mr-1 mr-1px'
              />
            </>
          ) : (
            <img src={linkPersonBlue} alt='person icon' className='mr-1' />
          )}
          Link
        </button>
        {/* for test */}
      </section>
    </article>
  )
}

export default Member
// 'border border-blue-550 text-blue-550 px-8  transition duration-300   rounded text-xl'
