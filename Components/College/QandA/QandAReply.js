import React from 'react'
import { bookAndLight, bars } from '../../Common/Images'
import QandASocial from './QandASocial'
const QandAReply = () => {
  return (
    <div className='shadow-lgOuter11 rounded-xl10 mb-10'>
      <div className=' px-9  py-9'>
        <header className='flex items-center justify-between mb-9 pr-11'>
          <section className='flex items-center'>
            <img src={bookAndLight} alt='qaGroup icon' width={33} height={33} />
            <h2 className='font-semibold text-2xl text-blue-550 capitalize ml-3'>
              Questions | <span className='text-gray-400'>Unanswered</span>
            </h2>
          </section>
          {/* sort  */}
          <section className='flex items-center'>
            <h3 className='text-lg text-gray-400 mr-1'>SORT BY: </h3>
            <div className='px-3 py-3 lg:w-60 md:w-52 bg-gray-220 max-h-10 flex justify-between items-center rounded-md'>
              <h4 className='font-medium text-gray-600'>Default order</h4>
              <button>
                <img src={bars} alt='bar icon' />
              </button>
            </div>
          </section>
          {/* sort end */}
        </header>
        <div>
          {[1, 2, 3].map((item, index) => {
            return <QandASocial key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default QandAReply
