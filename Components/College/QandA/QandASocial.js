import React from 'react'
import {
  profileImages,
  verifiedCorrect,
  linkReply,
  profileImages2,
  rigthButton,
  shareGreen,
  circle1,
  message,
  thumbsUp,
} from '../../Common/Images'

const QandASocial = () => {
  return (
    <article className='px-11  mb-11 '>
      <div className='rounded-xl10 shadow-lgOuter16 py-9 px-7  '>
        <section className='border-b-2 pb-11'>
          <header className='flex justify-between items-start'>
            <section className='flex'>
              <img
                src={profileImages}
                alt='profile img'
                width='60px'
                className='mr-4 rounded-full '
              />
              <div>
                <div>
                  <div className='flex items-center mb-2'>
                    <h2 className='font-semibold text-base  text-gray-750 '>
                      -Ashish Mehra
                    </h2>
                    <img
                      src={verifiedCorrect}
                      alt='verified icon'
                      className='ml-4 mr-1'
                    />
                    <h4 className='text-xs font-semibold text-blue-550'>
                      verified
                    </h4>
                  </div>
                  <p className='pl-1 text-sm  text-gray-460'>
                    Chandigarh University |
                    <i className='text-gray-750 text-xs pl-1 font-medium'>
                      Updated on July 12, 2021
                    </i>
                  </p>
                </div>
              </div>
            </section>

            <button className='text-white bg-blue-550 flex justify-center items-center py-1 pr-6 pl-5 rounded-xl50'>
              <img src={linkReply} alt='link icon' width={12} />
              <span className='pl-1 text-xs font-semibold tracking-wide'>
                Link
              </span>
            </button>
          </header>
          <section className='ml-20 '>
            <p className='font-medium text-gray-750 text-justify'>
              In IIT Madras , course B.Sc astrophysics How may years we can
              study and how much fees take per year?
            </p>
          </section>
        </section>

        <section className='mt-9 flex items-start mb-12'>
          <img
            src={profileImages2}
            alt='profile pic'
            width='60px'
            height='60px'
            className='mr-4 rounded-full '
          />
          <div>
            <h1 className='text-blue-550 font-semibold pb-1'>
              DINESH UPADHYAY
            </h1>
            <p className='text-gray-600 text-xs pb-7'>
              MBA Alumni At LPU Jalandhar
            </p>
            <h4 className='text-gray-800 pb-3 text-base'>Hello Aspirant,</h4>
            <p className='text-gray-800 text-sm15 '>
              Both BCA and B.Tech are good and have much scope nowadays. Being
              alumni of LPU, I will share details of these programmes at LPU.
              Eligibility Criteria for BCA You should have passed with 50%
              aggregate marks in 10+2...
              <button className='text-blue-550 inline-block'>
                <div className='flex items-center justify-center'>
                  read more
                  <img
                    src={rigthButton}
                    alt='right button'
                    width='12px'
                    className='pl-1'
                  />
                </div>
              </button>
            </p>
          </div>
        </section>

        <section className='flex justify-between items-center mb-11'>
          <button className='flex items-center justify-center px-11 border border-green-550 py-4 rounded-xl7'>
            <img src={thumbsUp} alt='like icon' className='pr-2' />
            <span className='pt-1'>Like</span>
          </button>
          <button className='flex items-center justify-center px-8 border border-green-550 py-4 rounded-xl7'>
            <img src={message} alt='message icon' className='pr-2' />
            Share
          </button>
          <button className='flex items-center justify-center px-10 border border-green-550 py-4 rounded-xl7'>
            <img src={circle1} alt='1' className='pr-2' />
            Answer
          </button>
          <button className='flex items-center justify-center px-10 border border-green-550 py-4 rounded-xl7'>
            <img src={shareGreen} alt='share Icon' className='pr-2' />
            share
          </button>
        </section>
      </div>
    </article>
  )
}

export default QandASocial
